import { defineConfig4CustomTheme } from "vuepress/config";
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'


import nav from './nav'

export default defineConfig4CustomTheme<VdoingThemeConfig>({
    //  vuepress-theme-vdoing主题配置
    theme: 'vdoing', // 使用依赖包主题
    // theme: path.resolve(__dirname, '../../theme-vdoing'), // 使用本地主题

    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '文文呀',
            description: 'Vue 驱动的静态网站生成器'
        }
    },

    // 主题配置
    themeConfig: {
        nav: nav, //导航栏
        logo: '/logo.png', //导航栏logo
        bodyBgImg: '/images/OIP-C.jpg',
        repo: 'wenwenwa/wenwenwa.github.io', // 导航栏右侧生成Github链接
        // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    
        // 温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        sidebar: 'structuring', //在所有页面中启用自动生成侧栏

    },
    //  
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], //favicons，资源放在public文件夹
    ],
});