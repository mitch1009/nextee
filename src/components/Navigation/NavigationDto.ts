export declare interface INavigationLinks {
    title: string
    href: string
    icon: any
    submenu?: INavigationLinks[]
    action?:any
}

export declare type TNavigatonItems = "user"| "admin"|any
export declare type INavigationProps = Record<TNavigatonItems, Record<TNavigatonItems,INavigationLinks>>
