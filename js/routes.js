import homePage from "./pages/home-page.cmp.js"
import emailPage from "./app/mister-email/pages/email-app.cmp.js"
import keepPage from "./app/mister-keep/pages/keep-app.cmp.js"

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: emailPage
    },
    {
        path: '/keep',
        component: keepPage
    },
]


export const myRouter = new VueRouter({ routes })