<template>
    <AppLayout title="Register">
        <form @submit.prevent="submit()">
            <fieldset>
                <label>
                    Name
                    <input v-model="form.name" type="text">
                    <span v-if="form.errors.name" class="text-red-600">{{ form.errors.name }}</span>
                </label>
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
                <label>
                    Confirm Password
                    <input v-model="form.password_confirmation" type="password">
                    <span v-if="form.errors.password_confirmation" class="text-red-600" >{{ form.errors.password_confirmation }}</span>
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
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function submit() {
        form.post(route('register.store'));
    }
</script>
