<script setup>
import { ref, watch, computed } from 'vue';
import { router } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import debounce from 'lodash/debounce';

const props = defineProps({
    documents: Object,
    filters: Object
});

const search = ref(props.filters.search);

watch(search, debounce((value) => {
    router.get(route('library.index'), { search: value }, { preserveState: true, replace: true });
}, 500));

// Helper untuk ikon file berdasarkan ekstensi
const getFileIcon = (ext) => {
    const e = ext.toLowerCase();
    if (e === 'pdf') return '📄';
    if (['doc', 'docx'].includes(e)) return '📝';
    if (['xls', 'xlsx'].includes(e)) return '📊';
    return '📁';
};

const emptyStateMessage = computed(() => {
    return search.value
        ? `Tidak ada hasil untuk kata kunci "${search.value}"`
        : 'Database dokumen saat ini masih kosong.';
});
</script>

<template>
    <AppLayout title="Pusat Referensi">
        <template #header>Pusat Referensi & Dokumen</template>

        <div class="space-y-8">
            <div class="flex flex-col md:flex-row justify-between items-end gap-4">
                <div class="space-y-1">
                    <p class="text-[10px] font-black text-rose-600 uppercase tracking-[0.3em] italic">Digital Asset
                        Management
                    </p>
                    <h2
                        class="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                        Pustaka Dokumen <span class="text-emerald-600 dark:text-emerald-400">AMI</span>
                    </h2>
                </div>

                <div class="relative w-full md:w-96 group">
                    <input v-model="search" type="text" placeholder="Cari regulasi atau pedoman..."
                        class="w-full pl-12 pr-4 py-4 text-xs bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-[1.5rem] shadow-sm focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 transition-all placeholder:font-bold placeholder:uppercase placeholder:tracking-widest" />
                    <svg class="w-5 h-5 absolute left-4 top-3.5 text-slate-400 group-focus-within:text-rose-500 transition-colors"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <div
                class="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50/50 dark:bg-slate-800/50 border-b dark:border-slate-800">
                                <th
                                    class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-center">
                                    No
                                </th>
                                <th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Info
                                    Dokumen
                                </th>
                                <th
                                    class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-center">
                                    Tipe</th>
                                <th
                                    class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-center">
                                    Format</th>
                                <th class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">
                                    Metadata</th>
                                <th
                                    class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-right">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr v-for="doc in documents.data" :key="doc.id"
                                class="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all duration-300">
                                <td
                                    class="p-8 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-center">
                                    <span
                                        class="font-mono text-sm font-black text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-2 py-1 rounded-md border border-rose-100 dark:border-rose-500/20">
                                        {{ documents.from + documents.data.indexOf(doc) }}
                                    </span>
                                </td>

                                <td class="p-8">
                                    <div class="flex items-center gap-5">
                                        <div
                                            class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                                            {{ getFileIcon(doc.extension) }}
                                        </div>
                                        <div>
                                            <h3
                                                class="font-black text-slate-900 dark:text-white uppercase text-sm tracking-tight leading-none mb-2">
                                                {{ doc.name }}
                                            </h3>
                                            <p
                                                class="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">
                                                ID: #AMI-DOC-{{ String(doc.id).padStart(4, '0') }}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <td class="p-8 text-center">
                                    <span :class="[
                                        'px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.1em] border shadow-sm',
                                        doc.type === 'public'
                                            ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                                            : 'bg-rose-50 text-rose-600 border-rose-100'
                                    ]">
                                        {{ doc.type }}
                                    </span>
                                </td>

                                <td class="p-8 text-center">
                                    <span
                                        class="text-[10px] font-black text-slate-800 dark:text-slate-300 uppercase bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                                        .{{ doc.extension }}
                                    </span>
                                </td>

                                <td class="p-8">
                                    <div class="space-y-1">
                                        <div class="flex items-center gap-2">
                                            <span
                                                class="text-[8px] font-black text-slate-400 uppercase">Uploader:</span>
                                            <span class="text-[10px] font-bold text-slate-700 dark:text-slate-400">{{
                                                doc.uploader.name }}</span>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span class="text-[8px] font-black text-slate-400 uppercase">Tanggal:</span>
                                            <span class="text-[10px] font-bold text-slate-500">{{ new
                                                Date(doc.created_at).toLocaleDateString('id-ID') }}</span>
                                        </div>
                                    </div>
                                </td>

                                <td class="p-8 text-right">
                                    <a :href="route('library.download', doc.id)" target="_blank"
                                        class="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-slate-900/20 hover:bg-rose-600 hover:translate-x-1 transition-all active:scale-95">
                                        Buka Berkas
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </td>
                            </tr>

                            <tr v-if="documents.data.length === 0">
                                <td colspan="5" class="p-12 text-center">
                                    <div
                                        class="flex flex-col items-center justify-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-700/50 rounded-[2.5rem]">
                                        <div
                                            class="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                            <icon :icon="search ? 'fa-solid fa-search' : 'fa-solid fa-folder'"
                                                class="text-3xl text-slate-300 dark:text-slate-600" />
                                        </div>
                                        <h4
                                            class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest">
                                            {{ search ? 'Tidak Ditemukan' : 'Belum Ada Dokumen' }}
                                        </h4>
                                        <p class="text-[10px] font-bold text-slate-400 uppercase mt-2 max-w-xs px-4">
                                            {{ emptyStateMessage }}
                                        </p>
                                        <button v-if="search" @click="search = ''"
                                            class="mt-6 px-6 py-2 bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                            Reset Pencarian
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- PAGINATION -->
                <div
                    class="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-8 py-6 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm">
                    <div
                        class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest italic text-center md:text-left flex items-center gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Data {{ documents.from }} - {{ documents.to }} dari total {{ documents.total }}
                    </div>
                    <div class="flex flex-wrap justify-center gap-1.5">
                        <template v-for="(link, k) in documents.links" :key="k">
                            <Link v-if="link.url" :href="link.url" :class="[
                                'px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all cursor-pointer',
                                link.active
                                    ? 'bg-slate-900 dark:bg-rose-600 text-white border-slate-900 dark:border-rose-600 shadow-lg shadow-slate-900/20'
                                    : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:text-rose-500'
                            ]" v-html="link.label" />

                            <span v-else :class="[
                                'px-3 md:px-4 py-2 text-[10px] font-black rounded-xl border transition-all opacity-30 cursor-not-allowed',
                                'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800'
                            ]" v-html="link.label" />
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped>
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
