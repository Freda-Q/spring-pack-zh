# 通过 GitHub 部署到七牛云 LAS

本项目是 Astro 服务端站点，包含 `/api/contact`。七牛云 Kodo 对象存储只能托管静态文件，因此这里使用 LAS「一键部署」的 GitHub 仓库部署功能。构建配置在 `.qiniu/deploy.yaml`。

## 部署步骤

1. 将此目录推送到**公开** GitHub 仓库的 `main` 分支。`.env`、`node_modules` 和构建产物已由 `.gitignore` 排除。不要把密钥提交到 GitHub。
2. 登录[七牛云 LAS 控制台](https://portal.qiniu.com/las)，进入「一键部署」→「新建部署」。填写 GitHub 仓库地址或 `owner/repository`，选择 `main`，配置路径使用 `.qiniu/deploy.yaml`。
3. 选择可用的 Sandbox 区域和模板，核对计费并创建部署。安装阶段执行 `npm ci && npm run build`；启动阶段运行 Node 服务并监听 `0.0.0.0:3000`；平台检查 `/`。
4. Revision 状态变成 `ready` 后，打开七牛提供的服务地址，检查首页、产品页、图片与联系页面。若失败，在该 Revision 日志中查看出错阶段。

七牛云当前的一键部署仅支持公开仓库和 Sandbox，**GitHub Push 不会自动更新已部署的 Revision**。每次发布新提交后，需要在控制台手动重新部署。Sandbox 会按资源与运行时长计费。正式域名确定后，还需将 `src/data/site.json` 的 `origin` 改为最终域名并重新构建，否则页面的 canonical 与社交分享地址仍指向 `https://www.first-machinery.com`。

## 上线前的表单限制

当前 `/api/contact` 会校验请求并返回成功，但只在服务器日志中记录姓名、邮箱和产品，**不会保存询盘或发送邮件**。在确定站内表单的处理方式前，不应把它视为可用的业务收件渠道。

本地验证：使用 Node.js 22 或更新版本运行 `npm ci`、`npm run build`、`HOST=0.0.0.0 PORT=3000 npm run start`。
