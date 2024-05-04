import { UserIcon, HomeIcon, WrenchScrewdriverIcon, AdjustmentsHorizontalIcon, BellAlertIcon, ChartBarIcon, CircleStackIcon, PencilSquareIcon, ShareIcon, WrenchIcon, BriefcaseIcon, ChartPieIcon, ChatBubbleLeftRightIcon, DocumentArrowUpIcon, DocumentIcon, ExclamationCircleIcon, FireIcon, LightBulbIcon, MagnifyingGlassPlusIcon, NewspaperIcon, PhotoIcon, QuestionMarkCircleIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline'
import { INavigationLinks, INavigationProps } from './NavigationDto'

export const userNavigation = [
    { title: 'Your profile', href: '#' },
    { title: 'Sign out', href: '#' },
]

export const UserData = [
    {
        profileImage: "data:image/jpeg;base64,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",
        firsttitle: "Gideon",
        secondtitle: "Ogongo",
    }
]

export const ProfileData = [
    { title: "Edit Profile", href: '/dashboard/profile/edit-profile ', icon: PencilSquareIcon },
    { title: "Social Media", href: '/dashboard/profile/social-media', icon: ShareIcon },
    { title: "Change Password", href: '/dashboard/profile/change-password', icon: WrenchIcon },
    { title: "Change Language", href: '/dashboard/profile/change-language', icon: AdjustmentsHorizontalIcon },
    { title: "Notification Settings", href: '/dashboard/profile/notification-settings', icon: BellAlertIcon },
    { title: "My Activity", href: '/dashboard/profile/my-activity', icon: ChartBarIcon },
    { title: "My Points", href: '/dashboard/profile/my-points', icon: CircleStackIcon },
]

export const AdminData: INavigationLinks[] = [
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

export const HomeData: IMenuLinks[] | any = [
    { title: "News Feed", icon: NewspaperIcon },
    { title: "Memories", icon: PhotoIcon },
    { title: "Team Budget", icon: BriefcaseIcon },
    { title: "Unit Budget", icon: CircleStackIcon },
    { title: "Pending Approval", icon: ExclamationCircleIcon },
    { title: "Announce", icon: SpeakerWaveIcon },
    { title: "Idea", icon: LightBulbIcon },
    { title: "Poll", icon: MagnifyingGlassPlusIcon },
    { title: "Quiz", icon: ChatBubbleLeftRightIcon },
    { title: "Survey", icon: ChartPieIcon },
    { title: "Wall Of Fame", icon: FireIcon },
    { title: "Reports", icon: DocumentArrowUpIcon },
    { title: "Reward Certificate", icon: DocumentIcon },
    { title: "FAQs", icon: QuestionMarkCircleIcon }
]

export const MainMenudata: IMenuLinks[] = [
    { title: 'Home', href: '/dashboard', icon: HomeIcon, current: true },
    { title: 'Admin', href: '/dashboard/admin', icon: WrenchScrewdriverIcon, current: false },
    { title: 'Profile', href: '/dashboard/profile', icon: UserIcon, current: false },
    // { title: 'Calendar', href: '/dashboard/calendar', icon: CalendarIcon, current: false },
    // { title: 'Documents', href: '/dashboard/documents', icon: DocumentDuplicateIcon, current: false },
    // { title: 'Reports', href: '/dashboard/report', icon: ChartPieIcon, current: false },
]

export const MAIN_NAVIGATION_DATA: INavigationProps = {
    candidate: {
        home: { href: "/dashboard", title: "News Feed", icon: HomeIcon, action: HomeData },
        profile: { href: "/dashboard/profle", title: "Profile", icon: UserIcon, submenu: ProfileData },
        onboarding: { href: "/dashboard/onboarding", title: "Profile", icon: NewspaperIcon },
        jobs: { href: "/dashboard/jobs", title: "Profile", icon: NewspaperIcon },

    },
    admin: {
        home: { href: "/dashboard", title: "News Feed", icon: NewspaperIcon, action: HomeData },
        sessings: { href: "/dashboard/settings", title: "News Feed", icon: NewspaperIcon, action: HomeData },
        candidates: { href: "/dashboard/candidates", title: "Profile", icon: UserIcon, submenu: ProfileData },
        clients: { href: "/dashboard/clients", title: "Profile", icon: UserIcon, submenu: ProfileData },
    },
    client: {
        home: { href: "/dashboard", title: "News Feed", icon: NewspaperIcon, action: HomeData },
        jobs: { href: "/dashboard/jobs", title: "News Feed", icon: NewspaperIcon, action: HomeData },
        profile: { href: "/dashboard/profile", title: "Profile", icon: UserIcon, submenu: ProfileData },
    },
}

export interface IMenuLinks {
    title: string
    href: string
    [key: string]: any
}
