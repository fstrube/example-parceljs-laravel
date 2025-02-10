<template>
    <AppLayout title="Login">
        <form @submit.prevent="submit()">
            <fieldset>
                <label>
                    Email Address
                    <input v-model="form.email" type="email">
                    <span v-if="form.errors.email" class="text-red-600">{{ form.errors.email }}</span>
                </label>
                <label>
                    Password
                    <input v-model="form.password" type="password">
                    <span v-if="form.errors.password" class="text-red-600" >{{ form.errors.password }}</span>
                </label>
                <input type="submit" value="Log in">
            </fieldset>
        </form>
    </AppLayout>
</template>

<script setup>
    import { ref, defineProps } from 'vue';
    import { useForm } from '@inertiajs/vue3';
    import AppLayout from '~/layouts/App.vue';

    const form = useForm({
        email: '',
        password: '',
    });

    function submit() {
        form.post(route('login.store'));
    }
</script>
