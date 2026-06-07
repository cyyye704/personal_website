# 岳宸亿个人网站

一个极简 Astro 个人网站，用静态内容展示首页简介、项目、方法论、资料推荐、自媒体平台和个人动态。

## 运行

```bash
npm install
npm run dev
```

开发服务器启动后，打开终端中显示的本地地址即可访问。

## 常用命令

```bash
npm run dev      # 本地开发
npm run build    # 构建静态站点到 dist/
npm run preview  # 预览构建结果
```

## 修改内容

主要内容在 `src/data/site.ts` 中维护；页面结构和组件在 `src/components/` 与 `src/pages/index.astro` 中。
