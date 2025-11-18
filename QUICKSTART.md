# 快速开始指南

## 🚀 5分钟快速启动

### 第一步：安装依赖

```bash
npm install
```

### 第二步：启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站！

## ✏️ 立即开始自定义

### 1. 更新个人信息（必做）

编辑 `lib/config.ts`，更新：
- 姓名、邮箱、GitHub 等基本信息
- 教育背景
- 工作经历

### 2. 更新头像（必做）

替换 `public/profile.jpg` 为您的照片

### 3. 写第一篇博客

在 `content/blog/` 目录创建 `my-first-post.mdx`：

```mdx
---
title: "我的第一篇博客"
date: "2024-01-20"
description: "这是我的第一篇博客文章"
tags: ["随笔"]
---

## 标题

您的内容...
```

保存后刷新浏览器，新文章会自动出现！

## 📝 常用命令

```bash
# 开发模式
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 🌐 部署到 Vercel（推荐）

### 方法 1：通过 GitHub（最简单）

1. 创建 GitHub 仓库
2. 推送代码：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/您的用户名/仓库名.git
   git push -u origin main
   ```
3. 访问 [vercel.com](https://vercel.com)
4. 点击 "Import Project"
5. 选择您的 GitHub 仓库
6. 点击 "Deploy"

完成！您的网站会自动部署，每次推送都会自动更新。

### 方法 2：使用 Vercel CLI

```bash
npm install -g vercel
vercel
```

## 🔧 可选配置

### 启用评论系统

1. 确保您的 GitHub 仓库是公开的
2. 在仓库设置中启用 Discussions
3. 访问 [giscus.app](https://giscus.app/) 获取配置
4. 创建 `.env.local` 文件并添加配置：

```env
NEXT_PUBLIC_GISCUS_REPO=用户名/仓库名
NEXT_PUBLIC_GISCUS_REPO_ID=从giscus获取
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=从giscus获取
```

### 配置访客地图

开发环境下自动使用模拟数据，无需配置。

生产环境部署到 Vercel 后：
1. 在 Vercel 项目中添加 KV 存储
2. 访客位置会自动记录

## 📚 更多帮助

- 详细文档：查看 `README.md`
- 维护指南：查看 `MAINTENANCE.md`
- 遇到问题？提交 GitHub Issue

## ✅ 检查清单

部署前确认：

- [ ] 更新了个人信息（`lib/config.ts`）
- [ ] 替换了头像（`public/profile.jpg`）
- [ ] 删除了示例博客文章
- [ ] 写了至少一篇自己的博客
- [ ] 测试了暗色模式
- [ ] 在手机上查看效果
- [ ] （可选）配置了评论系统

准备好了？开始部署吧！🚀

