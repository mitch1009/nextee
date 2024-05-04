export declare interface  INexteeConfig {
    auth: Partial<IAuthConfig>
    landingPage: string
}

export declare interface IAuthConfig {
    logo: string | Partial<ILogoOptions>
    background: string
    layout: "image-left"|"image-right" | "no-image"|any
    providers: IProvider[]

}
export declare interface ILogoOptions {
    width: number
    height: number
    url: string
    alt: string
    backgroundColor: string
    textColor: string
    text: string
}

export declare type IProvider = 'google'|"github"|'discord'|"entra"|"email"|"credentials"|"linkedin"