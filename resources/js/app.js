import './bootstrap';

import { createApp } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import pages from './pages/**/*.vue';

createInertiaApp({
    resolve: name => {
        const parts = name.split('/');
        let page, part;

        while (part = parts.shift()) {
            page = (page || pages)[part];
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        const app = window.app = createApp(App, props);

        app.use(plugin);
        app.mixin({ methods: { route } });
        app.mount(el);
    },
});
