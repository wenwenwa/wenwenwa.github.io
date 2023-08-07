const web = {
    text: '前端',
    link: '/web/',
    items: [
        // link的值对于的是相应md文件中定义的连接
        {
            text: '基础学习',
            items: [
                { text: 'HTML', link: '/pages/HTML/', },
                { text: 'CSS', link: '/pages/CSS/', },
                { text: 'JavaScript', link: '/pages/JavaScript/', },
            ]
        },
        {
            text: '进阶学习',
            items: [
                { text: 'ES6', link: '/pages/ES6/' },
                { text: 'TypeScript', link: '/pages/TypeScript/' },
            ]
        }

    ]
}


export default web