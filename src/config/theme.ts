import { INexteeConfig } from './types'

export const themeConfig = (): Partial<INexteeConfig> => {
    return {
        auth: {
            layout: "image-right"
        }
    }
  
}
