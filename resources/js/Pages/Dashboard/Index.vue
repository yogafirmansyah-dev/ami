<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';

// Import Sub-Dashboard
import AdminDashboard from './Partials/AdminDashboard.vue';
import AuditorDashboard from './Partials/AuditorDashboard.vue';
import AuditeeDashboard from './Partials/AuditeeDashboard.vue';

const props = defineProps({
    stats: Object, // Data statistik dari DashboardController
    activities: Array,
    myAssignments: Array
});

const page = usePage();
const role = computed(() => page.props.auth.user.role);

// Menentukan komponen mana yang harus tampil
const dashboardComponent = computed(() => {
    if (role.value === 'admin') return AdminDashboard;
    if (role.value === 'auditor') return AuditorDashboard;
    if (role.value === 'auditee') return AuditeeDashboard;
    return null;
});
</script>

<template>
    <AppLayout title="Dashboard Overview">
        <template #header>Dashboard {{ role.toUpperCase() }}</template>
        <template #subHeader>Selamat Datang kembali, {{ $page.props.auth.user.name }}</template>

        <component :is="dashboardComponent" :stats="stats" :activities="activities" :my-assignments="myAssignments" />
    </AppLayout>
</template>
