module.exports = {
    base:'/Flutter-Manual-zh/',
    title: 'Flutter 中文手册',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    description: 'Flutter 中文手册',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'}
        ],
        sidebar: [
            ['/','说明'],
            ['/Widgets', '组件'],
            ['/InteractionModels', '交互模型'],
        ],
        sidebarDepth: 1,
        lastUpdated: '最后更新于'
    }
};