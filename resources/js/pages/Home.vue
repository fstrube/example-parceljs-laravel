<template>
    <AppLayout title="Home">
        <article>
            <p class="text-center">Welcome! You have reached the home page.</p>
            <p v-if="$page.props.auth.user" class="text-center">You are logged in as {{ $page.props.auth.user.name }}.</p>
        </article>
    </AppLayout>
</template>

<script setup>
    import AppLayout from '@/layouts/App.vue';
</script>
