/* Multi-language */
import { useI18n } from "vue-i18n";
import { mainMenuTranslates } from "@/Lang/languages";
import { computed } from "vue";

export default function ({ role, permissions }) {
    const { tm } = useI18n({
        inheritLocale: true,
        messages: mainMenuTranslates
    });

    const roles = Array.isArray(role) ? role : [role];
    const hasRole = (allowed) => [].concat(allowed).some(r => roles.includes(r));

    /* Main Menu Links */
    const mainMenuLinks = computed(() => {
        return [
            // 1. DASHBOARD (Semua Role)
            // Dashboard tetap muncul
            { id: "dashboard", label: "Dashboard", icon: "chart-pie", link: "dashboard", type: "route", visibleFor: true },

            // 2. MASTER DATA (Hanya Admin)
            {
                id: "masterData",
                label: "Master Data",
                icon: "database",
                type: "dropdown",
                visibleFor: hasRole('admin'),
                links: [
                    { id: "prodis", label: "Program Studi", link: "admin.prodis.index", type: "route" },
                    { id: "faculties", label: "Fakultas", link: "admin.faculties.index", type: "route" },
                    { id: "periods", label: "Periode AMI", link: "admin.periods.index", type: "route" },
                ]
            },

            // 3. STANDAR & INDIKATOR (Hanya Admin)
            {
                id: "standards",
                label: "Standar Mutu",
                icon: "scroll",
                link: "admin.standards.index",
                type: "route",
                visibleFor: hasRole('admin'),
            },

            // 4. PENUGASAN AUDIT (Admin, Auditor, Auditee)
            // {
            //     id: "assignments",
            //     label: "Penugasan Audit",
            //     icon: "tasks",
            //     link: null,
            //     type: "dropdown",
            //     visibleFor: true,
            //     links: [
            //         {
            //             id: "adminAssignments",
            //             label: "Kelola Penugasan",
            //             link: "admin.assignments.index",
            //             type: "route",
            //             visibleFor: hasRole('admin')
            //         },
            //         {
            //             id: "auditorAssignments",
            //             label: "Tugas Auditor",
            //             link: "auditor.assignments.index",
            //             type: "route",
            //             visibleFor: hasRole('auditor')
            //         },
            //         {
            //             id: "auditeeAssignments",
            //             label: "Audit Unit Kerja",
            //             link: "auditee.assignments.index",
            //             type: "route",
            //             visibleFor: hasRole('auditee')
            //         },
            //     ]
            // },
            {
                id: "assignments",
                label: "Penugasan Audit",
                icon: "tasks",
                type: "dropdown",
                visibleFor: true,
                links: [
                    // Admin & Auditor selalu bisa melihat daftar penugasan
                    { id: "adminAssignments", label: "Kelola Penugasan", link: "admin.assignments.index", type: "route", visibleFor: hasRole('admin') },
                    { id: "auditorAssignments", label: "Tugas Auditor", link: "auditor.assignments.index", type: "route", visibleFor: hasRole('auditor') },

                    // AUDITEE: Hanya muncul jika tahapannya adalah 'doc_audit' (Audit Dokumen)
                    {
                        id: "auditeeAssignments",
                        label: "Input Bukti Audit",
                        link: "auditee.assignments.index",
                        type: "route",
                        visibleFor: hasRole('auditee') && activeStage === 'doc_audit'
                    },
                ]
            },

            // 5. MANAJEMEN USER & SECURITY (Hanya Admin)
            {
                id: "settings",
                label: "Pengaturan Sistem",
                icon: "cog",
                type: "dropdown",
                visibleFor: hasRole('admin'),
                links: [
                    { id: "users", label: "Manajemen User", link: "admin.users.index", type: "route" },
                    { id: "auditHistory", label: "Audit Trail", link: "admin.history.index", type: "route" },
                ]
            },
        ];
    });

    /* Main Menu Footer */
    const mainMenuFooterLinks = computed(() => {
        return [
            {
                id: "profile",
                label: "Profil Saya",
                linkType: "route",
                link: "profile.show",
                icon: "user-circle",
            },
        ];
    });

    return { mainMenuLinks, mainMenuFooterLinks };
}
