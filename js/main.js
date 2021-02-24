import appHeader from './cmps/app-header.cmp.js'
import { myRouter } from './routes.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <app-header />
            <router-view />
            <footer><p>&copy; copyrights 2021</p></footer>
        </section>
    `,
    components: {
        appHeader
    }
}

const app = new Vue(options)