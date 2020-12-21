export default {
    css: ['~/assets/css/main.css'],
    dev: process.env.NODE_ENV !== 'production',
    env: {
        baseUrl: process.env.BASE_URL
    },
    head: {
        title: 'Warren',
        meta: [
            { charset: 'utf-8' }
        ]
    },
    target: 'static',
    serverMiddleware: [
        {
            path: '/', handler: '~/middleware/index.js'
        }
    ]
}