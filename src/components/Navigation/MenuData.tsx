import {
    UserIcon, HomeIcon, AdjustmentsHorizontalIcon,
    BellAlertIcon, PencilSquareIcon, ShareIcon, WrenchIcon,
    NewspaperIcon, Cog6ToothIcon
} from '@heroicons/react/24/outline'
import { INavigationProps } from './NavigationDto'

export const userNavigation = [
    { title: 'Your profile', href: '/uzar/profile' },
    { title: 'Sign out', href: '#' },
]


const ProfileData = [
    { title: "Edit Profile", href: '/uzar/profile/edit-profile ', icon: PencilSquareIcon },
    { title: "Social Media", href: '/uzar/profile/social-media', icon: ShareIcon },
    { title: "Change Password", href: '/uzar/profile/change-password', icon: WrenchIcon },
    { title: "Change Language", href: '/uzar/profile/change-language', icon: AdjustmentsHorizontalIcon },
    { title: "Notification Settings", href: '/uzar/profile/notification-settings', icon: BellAlertIcon },
]


export const MAIN_NAVIGATION_DATA: INavigationProps = {
    user: {
        home: { href: "/uzar", title: "News Feed", icon: HomeIcon },
        profile: { href: "/uzar/profle", title: "Profile", icon: UserIcon, submenu: ProfileData },

    },
    admin: {
        home: { href: "/uzar", title: "News Feed", icon: NewspaperIcon },
        settings: { href: "/uzar/settings", title: "News Feed", icon: Cog6ToothIcon },
        users: { href: "/uzar/users", title: "Profile", icon: UserIcon, submenu: ProfileData },
    }

}

export interface IMenuLinks {
    title: string
    href: string
    [key: string]: any
}
