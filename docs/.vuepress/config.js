module.exports = {
    base: '/Flutter-Manual-zh/',
    title: 'Flutter 中文手册',
    head: [
        ['link', {rel: 'icon', href: '/favicon.png'}]
    ],
    description: 'Flutter 中文手册',
    themeConfig: {
        nav: [],
        sidebar: [
            ['/', '说明'],
            ['/Widgets', '组件'],
            ['/InteractionModels', '交互模型'],
            ['/Cupertino', 'iOS 风格组件'],
        ],
        sidebarDepth: 1,
        lastUpdated: '最后更新于',
        serviceWorker: {
            updatePopup: {
                message: "内容更新了！",
                buttonText: "刷新"
            }
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                return timestamp.toLocaleString();
            }
        }]
    ]
};