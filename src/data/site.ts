export const site = {
  owner: "岳宸亿",
  title: "岳宸亿 | Engineering, AI, and Long-term Systems",
  description:
    "电子信息工程本科生，关注人工智能、无线通信、工程实践、个人方法论与长期成长。",
  email: "your-email@example.com",
  github: "https://github.com/your-name",
};

export const navItems = [
  { label: "项目", href: "#projects" },
  { label: "方法论", href: "#methodology" },
  { label: "资料推荐", href: "#resources" },
  { label: "自媒体平台", href: "#platforms" },
  { label: "新闻", href: "#news" },
];

export const projects = [
  {
    name: "Wireless Transformer Position Encoding",
    description: "面向无线大模型的位置编码与低复杂度注意力机制探索。",
    tags: ["Transformer", "Wireless AI", "PyTorch"],
    status: "进行中",
  },
  {
    name: "MIMO Receiver Simulation",
    description: "基于仿真的大规模 MIMO 接收机性能对比与分析。",
    tags: ["MIMO", "Sionna", "Communication"],
    status: "已完成",
  },
  {
    name: "Personal Knowledge System",
    description: "构建面向长期学习、研究复盘和项目管理的个人知识系统。",
    tags: ["PKM", "Workflow", "Writing"],
    status: "计划中",
  },
];

export const methodologies = [
  "如何做长期决策",
  "如何管理注意力",
  "如何构建个人学习系统",
  "如何在不确定性中推进项目",
];

export const resources = [
  {
    category: "AI / Deep Learning",
    items: [
      {
        name: "Deep Learning Book",
        description: "系统理解深度学习基础概念与数学框架。",
        href: "#",
      },
      {
        name: "PyTorch Documentation",
        description: "模型实现、训练循环和工程调试的常用参考。",
        href: "#",
      },
    ],
  },
  {
    category: "Communication / Wireless",
    items: [
      {
        name: "Wireless Communications",
        description: "无线通信系统、信道建模和接收机设计基础。",
        href: "#",
      },
      {
        name: "Sionna",
        description: "用于链路级仿真和可学习通信系统研究的工具。",
        href: "#",
      },
    ],
  },
  {
    category: "Programming",
    items: [
      {
        name: "TypeScript Handbook",
        description: "维护前端项目和工程脚本时的类型系统参考。",
        href: "#",
      },
      {
        name: "Clean Code Notes",
        description: "关于命名、边界、抽象和可维护性的长期笔记。",
        href: "#",
      },
    ],
  },
  {
    category: "Productivity",
    items: [
      {
        name: "Obsidian / Notion",
        description: "个人知识管理、项目复盘和长期资料沉淀工具。",
        href: "#",
      },
      {
        name: "Attention System",
        description: "围绕注意力、任务推进和阶段复盘建立个人流程。",
        href: "#",
      },
    ],
  },
];

export const platforms = [
  { name: "Bilibili", href: "#", handle: "视频与学习记录" },
  { name: "小红书", href: "#", handle: "学习、成长与生活观察" },
  { name: "GitHub", href: site.github, handle: "代码与项目沉淀" },
  { name: "微信公众号", href: "#", handle: "长文与阶段复盘" },
  { name: "YouTube", href: "#", handle: "国际化内容占位" },
  { name: "Twitter / X", href: "#", handle: "短动态与链接分享" },
];

export const news = [
  { date: "2026.06", text: "开始搭建个人网站" },
  { date: "2026.05", text: "启动无线大模型位置编码项目" },
  { date: "2026.04", text: "系统学习 Deep Learning 与 PyTorch" },
];
