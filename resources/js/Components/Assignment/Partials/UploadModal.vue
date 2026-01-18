<script setup>
defineProps({
    show: Boolean,
    indicator: Object,
    form: Object
});

defineEmits(['close', 'submit']);
</script>

<template>
    <transition name="modal">
        <div v-if="show" class="fixed inset-0 z-[999] flex items-center justify-center p-6">
            <div class="fixed inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity" @click="$emit('close')">
            </div>
            <div
                class="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in duration-300">
                <form @submit.prevent="$emit('submit')" class="flex flex-col max-h-[90vh]">
                    <div
                        class="p-12 border-b dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-between items-center">
                        <div>
                            <h3
                                class="text-3xl font-black uppercase tracking-tighter italic text-slate-900 dark:text-white leading-none">
                                Upload Bukti</h3>
                            <p
                                class="text-[10px] font-bold text-sky-600 font-mono mt-3 uppercase tracking-widest italic">
                                {{ indicator?.snapshot_code }}</p>
                        </div>
                        <button type="button" @click="$emit('close')"
                            class="text-4xl text-slate-300 hover:text-sky-600 transition-colors">&times;</button>
                    </div>

                    <div class="p-12 space-y-10 overflow-y-auto custom-scrollbar flex-1 text-center">
                        <div
                            class="p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-inner border border-slate-50 dark:border-slate-700 italic text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                            "{{ indicator?.snapshot_requirement }}"
                        </div>

                        <div class="space-y-4 text-left">
                            <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Link
                                Penyimpanan (Google Drive/OneDrive)</label>
                            <input v-model="form.evidence_url" type="url" placeholder="https://drive.google.com/..."
                                class="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 border-none rounded-[2rem] text-xs font-bold shadow-inner focus:ring-2 focus:ring-sky-500/20 outline-none" />
                        </div>

                        <div class="space-y-4">
                            <label
                                class="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Atau
                                Upload File Fisik</label>
                            <div class="relative group">
                                <input type="file" @input="form.evidence_file = $event.target.files[0]"
                                    class="w-full text-[10px] text-slate-400 file:mr-6 file:py-4 file:px-10 file:rounded-[1.5rem] file:border-0 file:bg-slate-900 file:text-white file:font-black hover:file:bg-sky-600 transition-all cursor-pointer shadow-lg" />
                            </div>
                            <p class="text-[9px] text-slate-400 font-bold uppercase mt-6 tracking-[0.2em] italic">
                                Mendukung PDF, JPG, PNG (Maks 10MB)</p>
                        </div>
                    </div>

                    <div
                        class="p-12 border-t dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex justify-end gap-6">
                        <button type="button" @click="$emit('close')"
                            class="px-10 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors">Batal</button>
                        <button type="submit" :disabled="form.processing"
                            class="px-16 py-5 bg-sky-600 text-white rounded-[2.5rem] font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl shadow-sky-600/30 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50">
                            {{ form.processing ? 'MENYINKRONKAN...' : 'SIMPAN BUKTI' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>
