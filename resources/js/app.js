import './bootstrap';

import { createApp } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';

createInertiaApp({
    resolve(name) {
        const pages = import.meta.glob('./pages/**/*.vue');

        return pages[`./pages/${name}.vue`]();
    },
    setup({ el, App, props, plugin }) {
        const app = window.app = createApp(App, props);

        app.use(plugin);
        app.mixin({ methods: { route } });
        app.mount(el);
    },
});
