export const site = {
  owner: "岳宸亿",
  title: "岳宸亿 | Engineering, AI, and Long-term Systems",
  description:
    "Undergraduate student at BJTU.",
  email: "cyyue7048@outlook.com",
  github: "https://github.com/cyyye704",
};

export const navItems = [
  { label: "项目", href: "#projects" },
  { label: "方法论", href: "#methodology" },
  { label: "资料推荐", href: "#resources" },
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

export const resources = [
  {
    category: "AI / Deep Learning",
    items: [
      {
        name: "Deep Learning",
        description: "系统理解深度学习基础概念与数学框架。",
        href: "/resources/deep-learning/",
      },
      {
        name: "PyTorch Documentation",
        description: "模型实现、训练循环和工程调试的常用参考。",
        href: "#",
      },
    ],
  },
  {
    category: "数学物理基础",
    items: [
      {
        name: "微积分",
      },
      {
        name: "线性代数",
      },
      {
        name: "概率论与统计",
      },
      {
        name: "随机过程",
      },
    ],
  },
  {
    category: "电类课程",
    items: [
      {
        name: "电路分析",
      },
      {
        name: "信号与系统",
      },
      {
        name: "模拟电子技术",
      },
      {
        name: "数字电子技术",
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
  {
    name: "bilibili",
    href: "https://space.bilibili.com/402433321?spm_id_from=333.1007.0.0",
    icon: "B",
    action: "link",
  },
  { name: "微信", href: "#", icon: "微", action: "wechat" },
  { name: "微信公众号", href: "#", icon: "公", action: "link" },
  { name: "抖音", href: "#", icon: "抖", action: "link" },
  { name: "简历", href: "/resume/resume.pdf", icon: "简", action: "link" },
];

export const news = [
  { date: "2026.06", text: "开始搭建个人网站" },
  { date: "2026.05", text: "启动无线大模型位置编码项目" },
  { date: "2026.04", text: "系统学习 Deep Learning 与 PyTorch" },
];
