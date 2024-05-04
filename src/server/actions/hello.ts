'use server'

export const helloAction = (name: string) => `Hello ${name} from ${process.env.APP_NAME} platform`