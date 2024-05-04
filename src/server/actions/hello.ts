'use server'
import { HelloService } from "../core/hello"

export const helloAction = (name: string) => HelloService.hello({ name })