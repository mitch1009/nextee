import {
    UserIcon, HomeIcon, AdjustmentsHorizontalIcon,
    BellAlertIcon, PencilSquareIcon, ShareIcon, WrenchIcon,
    NewspaperIcon, Cog6ToothIcon,
    BriefcaseIcon,
    ChatBubbleLeftRightIcon,
    CircleStackIcon,
    ExclamationCircleIcon,
    LightBulbIcon,
    MagnifyingGlassPlusIcon,
    PhotoIcon,
    SpeakerWaveIcon
} from '@heroicons/react/24/outline'
import { INavigationLinks, INavigationProps } from './NavigationDto'

export const userNavigation = [
    { title: 'Your profile', href: '/uzar/profile' },
    { title: 'Sign out', href: '#' },
]


export const ProfileData = [
    { title: "Edit Profile", href: '/uzar/profile/edit-profile ', icon: PencilSquareIcon },
    { title: "Social Media", href: '/uzar/profile/social-media', icon: ShareIcon },
    { title: "Change Password", href: '/uzar/profile/change-password', icon: WrenchIcon },
    { title: "Change Language", href: '/uzar/profile/change-language', icon: AdjustmentsHorizontalIcon },
    { title: "Notification Settings", href: '/uzar/profile/notification-settings', icon: BellAlertIcon },
]


export const AdminData: INavigationLinks[]|any = [
    { title: "Getting Started", icon: NewspaperIcon, href: '' },
    { title: "Documentation", icon: PhotoIcon, href: '' },
    { title: "Campaigns", icon: BriefcaseIcon, href: '' },
    { title: "Translation", icon: CircleStackIcon, href: '' },
    { title: "Integrations", icon: ExclamationCircleIcon, href: '' },
    { title: "Platform Setup", icon: SpeakerWaveIcon, href: '' },
    { title: "Pre-fund", icon: LightBulbIcon, href: '' },
    { title: "Users & Roles", icon: MagnifyingGlassPlusIcon, href: '' },
    { title: "Reported Content", icon: ChatBubbleLeftRightIcon, href: '' },
]

export const MAIN_NAVIGATION_DATA: INavigationProps = {
    user: {
        home: { href: "/uzar", title: "News Feed", icon: HomeIcon },
        profile: { href: "/uzar/profle", title: "Profile", icon: UserIcon, submenu: ProfileData },

    },
    admin: {
        home: { href: "/uzar", title: "News Feed", icon: NewspaperIcon },
        settings: { href: "/uzar/settings", title: "News Feed", icon: Cog6ToothIcon },
        users: { href: "/uzar/users", title: "Profile", icon: UserIcon, submenu: AdminData },
    }

}

export interface IMenuLinks {
    title: string
    href: string
    [key: string]: any
}
