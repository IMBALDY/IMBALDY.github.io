# Chen Jiajun - Academic Homepage

一个现代化的学术个人主页，包含博客系统、全文搜索、访客地图和评论功能。

## ✨ 功能特点

- ✅ **CV / 主页**: 展示个人信息、教育背景、工作经历
- ✅ **MDX 博客系统**: 支持 Markdown、LaTeX 数学公式、代码高亮
- ✅ **全文搜索**: 使用 Fuse.js 实现的客户端搜索
- ✅ **访客地图**: 实时显示访客地理位置的世界地图
- ✅ **评论系统**: 基于 GitHub Discussions 的 Giscus 评论
- ✅ **暗色模式**: 支持亮色/暗色主题切换
- ✅ **响应式设计**: 完美支持移动端和桌面端
- ✅ **SEO 优化**: 完整的元数据和 Open Graph 支持
- ✅ **RSS 订阅**: 自动生成的 RSS feed

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 本地开发

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 3. 构建生产版本

```bash
npm run build
npm start
```

## 📝 如何更新个人信息

### 更新基本信息

编辑 `lib/config.ts` 文件：

```typescript
export const personalInfo: PersonalInfo = {
  name: "您的姓名",
  title: "您的职位",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  orcid: "https://orcid.org/your-orcid-id",
  scholar: "https://scholar.google.com/citations?user=...",
  bluesky: "https://bsky.app/profile/...",
  bio: "您的个人简介...",
  
  education: [
    {
      title: "学位名称",
      organization: "学校名称",
      period: "2023 - Present",
      location: "城市, 国家",
      description: "简短描述",
    },
    // 添加更多教育经历...
  ],
  
  experience: [
    {
      title: "职位名称",
      organization: "机构名称",
      period: "2022 - 2023",
      location: "城市, 国家",
      description: "工作描述",
    },
    // 添加更多工作经历...
  ],
};
```

### 更新头像

将您的头像图片替换到 `public/profile.jpg`

支持的格式：JPG, PNG, WebP

推荐尺寸：至少 400x400 像素

## ✍️ 如何撰写博客文章

### 1. 创建新文章

在 `content/blog/` 目录下创建新的 `.mdx` 文件，例如 `my-new-post.mdx`

### 2. 添加 Front Matter

每篇文章开头需要包含元数据：

```mdx
---
title: "文章标题"
date: "2024-01-20"
description: "文章简短描述，会显示在列表页和 SEO 中"
tags: ["tag1", "tag2", "tag3"]
author: "Chen Jiajun"
---

文章内容从这里开始...
```

### 3. 支持的 Markdown 功能

#### 标题

```markdown
## 二级标题
### 三级标题
```

#### 代码块

\`\`\`python
def hello_world():
    print("Hello, world!")
\`\`\`

#### 数学公式

行内公式：`$E = mc^2$`

块级公式：

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

#### 图片

```markdown
![图片描述](/path/to/image.jpg)
```

图片文件放在 `public/` 目录下

#### 链接

```markdown
[链接文字](https://example.com)
```

#### 引用

```markdown
> 这是一段引用文字
```

#### 列表

```markdown
- 无序列表项 1
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2
```

## 🗺️ 配置访客地图

### 开发环境

开发环境下使用内存存储，默认显示几个示例位置。

### 生产环境（Vercel）

1. 在 Vercel 项目中启用 KV 存储：
   - 进入项目设置
   - 点击 "Storage"
   - 创建 KV 数据库
   - 环境变量会自动添加

2. （可选）配置地理定位 API：
   - 访问 [ipapi.co](https://ipapi.co/) 获取免费 API key
   - 在 Vercel 添加环境变量 `NEXT_PUBLIC_IPAPI_KEY`

### 隐私说明

- 地理定位基于 IP 地址，仅获取城市级别精度
- 不存储任何个人识别信息
- 用户可以在隐私政策中说明此功能

## 💬 配置评论系统 (Giscus)

### 1. 准备 GitHub 仓库

1. 确保您的 GitHub 仓库是公开的
2. 在仓库设置中启用 Discussions：
   - 进入仓库 Settings
   - 勾选 Features 下的 Discussions

### 2. 配置 Giscus

1. 访问 [giscus.app](https://giscus.app/)
2. 输入您的仓库信息
3. 选择配置选项
4. 获取配置代码

### 3. 设置环境变量

创建 `.env.local` 文件（本地开发）或在 Vercel 中设置：

```env
NEXT_PUBLIC_GISCUS_REPO=yourusername/your-repo
NEXT_PUBLIC_GISCUS_REPO_ID=R_xxx
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_xxx
```

配置完成后，评论功能会自动启用。

## 🌐 部署到 Vercel

### 方法 1：通过 GitHub（推荐）

1. 将代码推送到 GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/homepage.git
git push -u origin main
```

2. 在 [Vercel](https://vercel.com) 导入项目：
   - 点击 "New Project"
   - 选择您的 GitHub 仓库
   - 配置环境变量（如果需要）
   - 点击 "Deploy"

### 方法 2：使用 Vercel CLI

```bash
npm install -g vercel
vercel
```

### 环境变量配置

在 Vercel 项目设置中添加以下环境变量（如果需要）：

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GISCUS_REPO=yourusername/repo
NEXT_PUBLIC_GISCUS_REPO_ID=...
NEXT_PUBLIC_GISCUS_CATEGORY=...
NEXT_PUBLIC_GISCUS_CATEGORY_ID=...
```

## 📁 项目结构

```
homepage/
├── app/                      # Next.js App Router
│   ├── api/                  # API 路由
│   │   ├── search/          # 搜索 API
│   │   ├── track-location/  # 访客追踪
│   │   ├── visitors/        # 访客数据
│   │   └── rss/             # RSS feed
│   ├── blog/                # 博客页面
│   │   ├── [slug]/          # 动态博客文章页
│   │   └── page.tsx         # 博客列表页
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 主页
│   └── globals.css          # 全局样式
├── components/              # React 组件
│   ├── Comments.tsx         # 评论组件
│   ├── Footer.tsx           # 页脚
│   ├── MDXComponents.tsx    # MDX 自定义组件
│   ├── Navbar.tsx           # 导航栏
│   ├── SearchBar.tsx        # 搜索框
│   ├── TableOfContents.tsx  # 目录
│   ├── ThemeProvider.tsx    # 主题提供者
│   ├── Timeline.tsx         # 时间线组件
│   └── VisitorMap.tsx       # 访客地图
├── content/                 # 内容文件
│   └── blog/               # 博客文章 (.mdx)
├── lib/                    # 工具函数和配置
│   ├── config.ts           # 个人信息配置
│   ├── mdx.ts              # MDX 处理
│   └── types.ts            # TypeScript 类型
├── public/                 # 静态资源
│   └── profile.jpg         # 头像
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎨 自定义样式

### 修改主题颜色

编辑 `tailwind.config.ts` 来自定义颜色：

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // 添加更多颜色...
    },
  },
}
```

### 修改字体

在 `app/layout.tsx` 中更改字体导入：

```typescript
import { Inter, Crimson_Text } from "next/font/google";
```

## 📊 性能优化

- ✅ 静态生成所有页面
- ✅ 图片自动优化
- ✅ 代码分割
- ✅ 字体优化
- ✅ CSS 压缩

## 🔧 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **内容**: MDX (Markdown + React)
- **数学公式**: KaTeX
- **代码高亮**: Rehype Pretty Code + Shiki
- **搜索**: Fuse.js
- **地图**: react-simple-maps
- **评论**: Giscus
- **主题**: next-themes
- **动画**: Framer Motion
- **图标**: Lucide React

## 📄 许可证

MIT License - 自由使用和修改

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

## 📮 联系方式

- Email: chenjiajun@u.nus.edu
- GitHub: [@IMBALDY](https://github.com/IMBALDY)

---

Built with ❤️ using Next.js and Tailwind CSS

