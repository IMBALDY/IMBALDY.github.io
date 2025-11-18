# 维护指南

本文档提供了网站日常维护和更新的详细说明。

## 📋 常见维护任务

### 1. 添加新博客文章

**步骤**：

1. 在 `content/blog/` 创建新的 `.mdx` 文件
2. 文件名将成为 URL slug（例如：`my-post.mdx` → `/blog/my-post`）
3. 添加 front matter 元数据
4. 编写内容
5. 提交并推送到 GitHub（如果使用自动部署）

**示例模板**：

```mdx
---
title: "您的文章标题"
date: "2024-01-20"
description: "简短描述（用于 SEO 和列表页）"
tags: ["标签1", "标签2"]
author: "Chen Jiajun"
---

## 文章开始

您的内容...
```

### 2. 更新个人信息

**教育背景和工作经历**：

编辑 `lib/config.ts`：

```typescript
education: [
  {
    title: "学位名称",
    organization: "学校名称",
    period: "起止时间",
    location: "地点",
    description: "描述（可选）",
  },
  // 按时间倒序排列（最新的在前）
],
```

**联系方式**：

```typescript
email: "your.email@example.com",
github: "https://github.com/username",
orcid: "https://orcid.org/xxxx-xxxx-xxxx-xxxx",
```

### 3. 更新头像

替换 `public/profile.jpg` 文件：

- 推荐尺寸：400x400 像素或更大
- 格式：JPG, PNG, WebP
- 文件大小：建议小于 500KB

### 4. 添加博客图片

1. 将图片放在 `public/` 目录下（例如：`public/blog/my-image.jpg`）
2. 在 MDX 文章中引用：

```markdown
![图片描述](/blog/my-image.jpg)
```

## 🔍 内容编辑技巧

### 数学公式

**行内公式**：
```markdown
这是行内公式 $E = mc^2$ 的例子
```

**块级公式**：
```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### 代码块

支持多种语言，自动高亮：

\`\`\`python
def example():
    return "Hello"
\`\`\`

\`\`\`typescript
const greeting: string = "Hello";
\`\`\`

### 自定义组件

MDX 支持在 Markdown 中使用 React 组件。如需添加自定义组件，编辑 `components/MDXComponents.tsx`。

## 📝 SEO 优化

### 文章 SEO

确保每篇文章都有：
- 清晰的 `title`
- 描述性的 `description`（150-160 字符）
- 相关的 `tags`

### 网站 SEO

在 `app/layout.tsx` 更新站点级元数据：

```typescript
export const metadata: Metadata = {
  title: "您的名字 - Academic Homepage",
  description: "您的网站描述",
  // ...
};
```

## 🚀 部署流程

### 自动部署（推荐）

1. 将更改推送到 GitHub：
```bash
git add .
git commit -m "更新描述"
git push
```

2. Vercel 会自动构建和部署

### 手动部署

```bash
npm run build
vercel --prod
```

## 🗺️ 访客地图维护

### 查看访客数据

访客数据存储在：
- **开发环境**：内存（重启后清空）
- **生产环境**：Vercel KV

### 清理旧数据

如果使用 Vercel KV，可以通过 Vercel Dashboard 管理数据。

API 自动限制存储最近 1000 个访客。

## 💬 评论系统维护

### 管理评论

评论存储在 GitHub Discussions 中，可以：
- 在 GitHub 仓库的 Discussions 标签页管理
- 删除、编辑、锁定讨论
- 标记为已解决

### 禁用评论

如果需要临时禁用评论：
1. 在 `.env.local` 中删除 Giscus 配置
2. 或在 `components/Comments.tsx` 中注释掉组件

## 🎨 样式自定义

### 修改颜色方案

编辑 `tailwind.config.ts`：

```typescript
theme: {
  extend: {
    colors: {
      // 添加自定义颜色
      'custom-blue': '#3b82f6',
    },
  },
}
```

### 修改字体

在 `app/layout.tsx` 更改：

```typescript
import { Inter, YourFont } from "next/font/google";

const yourFont = YourFont({ 
  subsets: ["latin"],
  variable: "--font-custom",
});
```

然后在 `tailwind.config.ts` 中使用：

```typescript
fontFamily: {
  custom: ["var(--font-custom)"],
}
```

## 🔧 故障排除

### 构建失败

1. 检查所有 MDX 文件的 front matter 格式
2. 确保所有引用的图片存在
3. 检查 TypeScript 错误：`npm run lint`

### 搜索不工作

1. 确保 API 路由正常：访问 `/api/search`
2. 检查浏览器控制台错误
3. 清除浏览器缓存

### 地图不显示

1. 检查网络请求（可能是 CDN 问题）
2. 确保 API 路由返回有效数据：访问 `/api/visitors`
3. 查看浏览器控制台错误

### 评论不加载

1. 确认 Giscus 环境变量已设置
2. 检查 GitHub 仓库 Discussions 是否启用
3. 确认仓库是公开的

## 📊 性能监控

### 使用 Lighthouse

```bash
npm run build
npm start
# 在 Chrome DevTools 中运行 Lighthouse
```

### 检查包大小

```bash
npm run build
# 查看 .next/analyze/ 输出
```

## 🔐 安全性

### 环境变量

- 不要将 `.env.local` 提交到 Git
- 敏感信息只在 Vercel Dashboard 中配置
- 使用 `.env.example` 作为模板

### 依赖更新

定期更新依赖：

```bash
npm outdated
npm update
```

## 📦 备份

### 重要文件备份

定期备份：
- `content/blog/` - 所有博客文章
- `lib/config.ts` - 个人信息
- `public/` - 图片和静态资源
- `.env.local` - 环境变量（安全存储）

### 数据库备份

如果使用 Vercel KV，定期导出数据：
- 在 Vercel Dashboard 中下载数据
- 或使用 Vercel CLI

## 🆘 获取帮助

遇到问题？

1. 查看 [Next.js 文档](https://nextjs.org/docs)
2. 查看 [Tailwind CSS 文档](https://tailwindcss.com/docs)
3. 提交 GitHub Issue
4. 联系开发者：chenjiajun@u.nus.edu

---

最后更新：2024-01-20

