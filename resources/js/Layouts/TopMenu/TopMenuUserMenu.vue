<template>
    <t-dropdown align="right" trigger-type="rich">
        <template #trigger>
            <div class="user-menu-trigger">
                <span class="staff-info">
                    <span class="staff-name text-sm font-semibold text-slate-800 dark:text-white">
                        {{ $page.props.auth.user.name }}
                    </span>

                    <span class="staff-title text-[10px] font-bold text-rose-500 uppercase tracking-tighter">
                        {{ $page.props.user_extra.unit_name }}
                    </span>
                </span>

                <t-avatar v-if="$page.props.jetstream.managesProfilePhotos" :alt="$page.props.auth.user.name"
                    :indicator="{
                        color: 'green',
                        label: '',
                        position: 'rb'
                    }" :radius="8" :size="3" :src="$page.props.auth.user.profile_photo_url" />
            </div>
        </template>

        <template #default>
            <div class="top-menu-dropdown-content-wrapper-transparent min-w-[15rem] bg-white">
                <div class="p-4 border-b dark:bg-slate-800/50">
                    <p class="text-xs text-slate-500 italic">Login sebagai:</p>
                    <p class="text-sm font-bold text-slate-700 dark:text-slate-200">
                        {{ $page.props.user_extra.unit_name }}
                    </p>
                </div>

                <Link :href="route('profile.show')">
                <div class="top-menu-dropdown-item" v-text="tm('profile')" />
                </Link>

                <div class="dropdown-item-separator" />
                <span class="logout-button border-b rounded-b" @click="logout">
                    <span v-text="tm('logout')" />
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </span>
            </div>
        </template>
    </t-dropdown>
</template>

<script>
/*Main Functions*/
import { defineComponent, inject, ref } from "vue";
import { Link } from "@inertiajs/vue3";
import { router } from "@inertiajs/vue3";

/*Components*/
import TDropdown from "@/Components/Dropdown/TDropdown.vue";
import TAvatar from "@/Components/Avatar/TAvatar.vue";

/*Multi Language*/
import { useI18n } from "vue-i18n";
import { userMenuTranslates } from "@/Lang/languages";

export default defineComponent({
    name: "TopMenuUserMenu",
    components: { TAvatar, TDropdown, Link },
    setup() {
        /*Multi Language*/
        const { tm } = useI18n({
            inheritLocale: true,
            messages: userMenuTranslates
        });

        /*Switch Team Action*/
        const showTeamSelector = ref(false);
        const switchToTeam = (team) => {
            router.put(
                route("current-team.update"),
                {
                    "team_id": team.id
                }, {
                preserveState: false
            });
        };

        /*Logout Function*/
        const logout = () => {
            router.post(
                route("logout")
            );
        };

        return {
            logout,
            switchToTeam,
            showTeamSelector,
            tm
        };
    }
});
</script>

<style scoped>
.darkModeTitle-enter-active,
.darkModeTitle-leave-active {
    transition: 500ms ease-in-out;
}

.darkModeTitle-enter-from,
.darkModeTitle-leave-to {
    opacity: 0;
    max-width: 0;
}

.darkModeTitle-enter-to,
.darkModeTitle-leave-from {
    opacity: 1;
    max-width: 5rem;
}
</style>
