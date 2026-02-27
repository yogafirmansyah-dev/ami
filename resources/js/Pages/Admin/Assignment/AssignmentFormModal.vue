<script setup>
import { computed, watch } from 'vue';
import { useForm, usePage } from '@inertiajs/vue3';
import TInputSelect from '@/Components/Form/Inputs/TInputSelect.vue';

const props = defineProps({
    show: {
        type: Boolean,
        required: true
    },
    periods: Array,
    standards: Array,
    auditors: Array,
    prodis: Array,
    faculties: Array,
});

const emit = defineEmits(['update:show', 'closed']);

const form = useForm({
    period_id: '',
    master_standard_id: '',
    auditor_id: '',
    assignable_type: 'prodi',
    assignable_id: '',
});

const filteredStandards = computed(() => {
    if (!form.assignable_type) {
        return [];
    }
    return props.standards.filter(s => {
        // Handle Laravel Enums which might be serialized as a string or an object with a 'value' property
        const targetTypeStr = typeof s.target_type === 'object' ? s.target_type.value : s.target_type;
        return targetTypeStr === form.assignable_type;
    });
});

watch(() => form.assignable_type, (newType, oldType) => {
    if (newType !== oldType) {
        form.master_standard_id = '';
        form.assignable_id = '';
    }
});

const submit = () => {
    form.post(route('admin.assignments.store'), {
        onSuccess: () => {
            closeModal();
        },
        onError: () => {
            usePage().props.flash.toastr = {
                type: 'error',
                content: 'Terdapat kesalahan validasi, mohon cek kembali form anda.',
                position: 'top-right'
            };
        }
    });
};

const closeModal = () => {
    emit('update:show', false);
    form.reset();
    form.clearErrors();
    emit('closed');
};

</script>

<template>
    <transition name="modal">
        <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div class="fixed inset-0 bg-slate-900/80 dark:bg-slate-950/90 backdrop-blur-md transition-opacity"
                @click="closeModal"></div>

            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300">
                <div class="p-10 border-b border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                    <h3
                        class="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none">
                        Inisialisasi AMI
                    </h3>
                    <p class="text-[10px] font-bold text-rose-500 uppercase tracking-[0.3em] mt-4 italic">
                        Buat Penugasan & Snapshot Data Baru
                    </p>
                </div>

                <form @submit.prevent="submit" class="p-10 space-y-8 bg-white dark:bg-slate-900">

                    <!-- STEP 1: PILIH KATEGORI UNIT -->
                    <div class="space-y-3">
                        <label
                            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Kategori
                            Unit Target</label>
                        <div class="flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-3xl">
                            <button type="button" @click="form.assignable_type = 'prodi'"
                                :class="form.assignable_type === 'prodi' ? 'bg-white dark:bg-slate-700 text-rose-600 shadow-sm' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'"
                                class="flex-1 py-4 text-[10px] font-black uppercase rounded-2xl transition-all duration-300">
                                Program Studi
                            </button>
                            <button type="button" @click="form.assignable_type = 'faculty'"
                                :class="form.assignable_type === 'faculty' ? 'bg-white dark:bg-slate-700 text-rose-600 shadow-sm' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'"
                                class="flex-1 py-4 text-[10px] font-black uppercase rounded-2xl transition-all duration-300">
                                Fakultas
                            </button>
                        </div>
                    </div>

                    <!-- STEP 2: DETAIL PENUGASAN -->
                    <div class="grid grid-cols-2 gap-8">
                        <div class="space-y-3">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Periode
                                AMI</label>
                            <TInputSelect v-model="form.period_id" :options="periods" options-value-key="id"
                                options-label-key="name" place-holder="Pilih Periode" :search="true"
                                search-place-holder="Cari periode..." :radius="5" class="w-full"
                                :class="form.errors.period_id ? 'ring-2 ring-rose-500 rounded-xl' : ''" />
                            <p v-if="form.errors.period_id" class="text-xs text-rose-500 font-bold ml-1">{{
                                form.errors.period_id }}</p>
                        </div>

                        <div class="space-y-3">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Target
                                Unit ({{ form.assignable_type === 'prodi' ? 'Prodi' : 'Fakultas' }})</label>
                            <TInputSelect v-model="form.assignable_id"
                                :options="form.assignable_type === 'prodi' ? prodis : faculties" options-value-key="id"
                                options-label-key="name"
                                :place-holder="form.assignable_type === 'prodi' ? 'Pilih Program Studi' : 'Pilih Fakultas'"
                                :search="true" search-place-holder="Cari unit..." :radius="5" class="w-full"
                                :class="form.errors.assignable_id ? 'ring-2 ring-rose-500 rounded-xl' : ''" />
                            <p v-if="form.errors.assignable_id" class="text-xs text-rose-500 font-bold ml-1">{{
                                form.errors.assignable_id }}</p>
                        </div>

                        <div class="space-y-3">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Standard
                                Mutu ({{ form.assignable_type === 'prodi' ? 'Prodi' : 'Fakultas' }})</label>
                            <TInputSelect v-model="form.master_standard_id" :options="filteredStandards"
                                options-value-key="id" options-label-key="name" place-holder="Pilih Instrumen"
                                :search="true" search-place-holder="Cari instrumen..." :radius="5" class="w-full"
                                :class="[form.errors.master_standard_id ? 'ring-2 ring-rose-500 rounded-xl' : '', !form.assignable_type ? 'opacity-50 cursor-not-allowed pointer-events-none' : '']" />
                            <p v-if="form.errors.master_standard_id" class="text-xs text-rose-500 font-bold ml-1">{{
                                form.errors.master_standard_id }}</p>
                        </div>

                        <div class="space-y-3">
                            <label
                                class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Lead
                                Auditor</label>
                            <TInputSelect v-model="form.auditor_id" :options="auditors" options-value-key="id"
                                options-label-key="name" place-holder="Pilih Auditor" :search="true"
                                search-place-holder="Cari auditor..." :radius="5" class="w-full"
                                :class="form.errors.auditor_id ? 'ring-2 ring-rose-500 rounded-xl' : ''">
                                <template #label="{ props: optionProps }">
                                    <div class="flex items-center gap-2">
                                        <div
                                            class="w-6 h-6 rounded bg-rose-100 text-rose-600 flex items-center justify-center text-[8px] font-black uppercase">
                                            {{ optionProps.name.substring(0, 2) }}</div>
                                        <span>{{ optionProps.name }}</span>
                                    </div>
                                </template>
                            </TInputSelect>
                            <p v-if="form.errors.auditor_id" class="text-xs text-rose-500 font-bold ml-1">{{
                                form.errors.auditor_id }}</p>
                        </div>
                    </div>

                    <button type="submit" :disabled="form.processing"
                        class="w-full py-6 mt-4 bg-slate-900 dark:bg-rose-600 text-white text-xs font-black uppercase tracking-[0.3em] rounded-[2.5rem] shadow-2xl hover:bg-rose-600 dark:hover:bg-rose-500 transition-all active:scale-95 disabled:opacity-50">
                        {{ form.processing ? 'Membuat Snapshots...' : 'Inisialisasi Siklus AMI Baru' }}
                    </button>
                </form>
            </div>
        </div>
    </transition>
</template>

<style scoped>
/* High-Performance Transitions */
.modal-enter-active,
.modal-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.9) translateY(40px);
    filter: blur(4px);
}
</style>
