import type { APIRoute } from 'astro';

export const prerender = false;

type LeadPayload = {
  name?: string;
  email?: string;
  whatsapp?: string;
  country?: string;
  message?: string;
  product?: string;
  sourcePage?: string;
  sourceTitle?: string;
  source?: string;
  referrer?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxAttachmentSize = 8 * 1024 * 1024;
const allowedAttachmentExtensions = new Set(['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.jpg', '.jpeg', '.png', '.webp', '.zip']);

function clean(value: unknown, max = 1000) {
  return String(value ?? '').trim().slice(0, max);
}

function isAllowedAttachment(file: File) {
  const filename = file.name || '';
  const extension = filename.includes('.') ? filename.slice(filename.lastIndexOf('.')).toLowerCase() : '';
  return allowedAttachmentExtensions.has(extension);
}

export const POST: APIRoute = async ({ request }) => {
  let input: LeadPayload;
  let attachment: File | undefined;

  try {
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const file = formData.get('attachment');
      attachment = file instanceof File && file.size > 0 ? file : undefined;
      input = {
        name: formData.get('name')?.toString(),
        email: formData.get('email')?.toString(),
        whatsapp: formData.get('whatsapp')?.toString(),
        country: formData.get('country')?.toString(),
        message: formData.get('message')?.toString(),
        product: formData.get('product')?.toString(),
        sourcePage: formData.get('sourcePage')?.toString(),
        sourceTitle: formData.get('sourceTitle')?.toString(),
        source: formData.get('source')?.toString(),
        referrer: formData.get('referrer')?.toString(),
      };
    } else {
      input = await request.json();
    }
  } catch (error) {
    console.error('[contact] invalid request body', error);
    return Response.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const lead = {
    name: clean(input.name, 120),
    email: clean(input.email, 160).toLowerCase(),
    whatsapp: clean(input.whatsapp, 80),
    country: clean(input.country, 120),
    message: clean(input.message, 3000),
    product: clean(input.product, 180) || '常规咨询',
    sourcePage: clean(input.sourcePage, 500),
    sourceTitle: clean(input.sourceTitle, 180),
    source: clean(input.source, 180),
    referrer: clean(input.referrer, 500),
  };

  const invalid = [];
  if (!lead.name) invalid.push('name');
  if (!lead.email || !emailPattern.test(lead.email)) invalid.push('email');
  if (!lead.whatsapp) invalid.push('whatsapp');
  if (!lead.message) invalid.push('message');
  if (attachment && (attachment.size > maxAttachmentSize || !isAllowedAttachment(attachment))) invalid.push('attachment');

  if (invalid.length > 0) {
    return Response.json({ ok: false, error: `Missing or invalid fields: ${invalid.join(', ')}` }, { status: 422 });
  }

  console.log('[contact] lead received', { name: lead.name, email: lead.email, product: lead.product });

  return Response.json({ ok: true, success: true });
};
