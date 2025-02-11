<template>
    <Head :title="title" />
    <header>
        <nav>
            <ul><li><Link href="/">Home</Link></li></ul>
            <ul>

                <template v-if="$page.props.auth.user">
                    <li><a v-if="route().has('logout')" :href="route('logout')" @click.prevent="$inertia.post(route('logout'))">Logout</a></li>
                </template>
                <template v-else>
                    <li><Link v-if="route().has('login')" :href="route('login')">Login</Link></li>
                    <li><Link v-if="route().has('register')" :href="route('register')">Register</Link></li>
                </template>
            </ul>
        </nav>
    </header>
    <main>
        <slot />
    </main>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { Head, Link } from '@inertiajs/vue3';

    defineProps({
        title: String,
    });
</script>
