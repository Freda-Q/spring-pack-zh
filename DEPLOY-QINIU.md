# 通过 GitHub 更新七牛云网站

本项目有预渲染页面，也包含 Astro 服务端接口 `/api/contact`。现有正式域名使用七牛云 Kodo 静态托管；如需运行服务端接口，可按下文的 LAS 步骤另行部署。

## 现有正式站点的自动更新

`www.spring-pack.cn` 当前由七牛云 Kodo 和 CDN 提供静态页面。仓库中的 `.github/workflows/deploy-qiniu-kodo.yml` 在每次推送 `main` 后构建网站，并将 `dist/client/` 中预渲染的页面及资源上传到 Kodo，再刷新该域名的 CDN 缓存。七牛云 LAS 的一键部署目前不支持 Git Push 自动更新，所以此流程直接更新现有 Kodo 站点。

首次启用前，在 GitHub 仓库 **Settings → Secrets and variables → Actions** 中设置：

- Repository variable `QINIU_BUCKET`：已设为 `springpack`，这是 `www.spring-pack.cn` 当前绑定的存储空间。未设置时，构建会运行，上传任务会跳过。
- Repository secret `QINIU_ACCESS_KEY`：有该空间上传和 CDN 刷新权限的七牛云 AccessKey。
- Repository secret `QINIU_SECRET_KEY`：对应的 SecretKey。不要将密钥写入仓库或提交历史。

设置完成后，在 GitHub Actions 中手动运行一次 **Deploy to Qiniu Kodo**，核对正式站点的首页、联系页和微信二维码。之后每次推送 `main` 都会自动发布和刷新 CDN，无需登录七牛云手动刷新预取。构建使用官方 qshell `v2.19.13`，只覆盖同名文件，不删除空间中其他文件。

Kodo 无法运行 Astro 的 `/api/contact`。当前联系表单依赖此接口，因此静态站点上的表单提交不会成功；电话、邮件和微信联系方式仍可使用。要让表单接收询盘，需要单独部署后端并改用可访问的 API 地址。

## LAS 服务端部署（手动）

LAS「一键部署」可以从公开 GitHub 仓库运行 Astro 服务端，构建配置在 `.qiniu/deploy.yaml`。

### 部署步骤

1. 将此目录推送到**公开** GitHub 仓库的 `main` 分支。`.env`、`node_modules` 和构建产物已由 `.gitignore` 排除。不要把密钥提交到 GitHub。
2. 登录[七牛云 LAS 控制台](https://portal.qiniu.com/las)，进入「一键部署」→「新建部署」。填写 GitHub 仓库地址或 `owner/repository`，选择 `main`，配置路径使用 `.qiniu/deploy.yaml`。
3. 选择可用的 Sandbox 区域和模板，核对计费并创建部署。安装阶段执行 `npm ci && npm run build`；启动阶段运行 Node 服务并监听 `0.0.0.0:3000`；平台检查 `/`。
4. Revision 状态变成 `ready` 后，打开七牛提供的服务地址，检查首页、产品页、图片与联系页面。若失败，在该 Revision 日志中查看出错阶段。

七牛云当前的一键部署仅支持公开仓库和 Sandbox，**GitHub Push 不会自动更新已部署的 Revision**。每次发布新提交后，需要在控制台手动重新部署。Sandbox 会按资源与运行时长计费。正式域名为 `https://www.spring-pack.cn/`，`src/data/site.json` 的 `origin` 已设置为该域名；更换域名时需同步修改并重新构建，才能更新页面的 canonical 与社交分享地址。

## 上线前的表单限制

当前 `/api/contact` 会校验请求并返回成功，但只在服务器日志中记录姓名、邮箱和产品，**不会保存询盘或发送邮件**。在确定站内表单的处理方式前，不应把它视为可用的业务收件渠道。

本地验证：使用 Node.js 22 或更新版本运行 `npm ci`、`npm run build`、`HOST=0.0.0.0 PORT=3000 npm run start`。
