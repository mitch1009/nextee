import { name as appName } from '@/root/package.json'
import { IHelloSchema } from './types'
export class HelloService {
    static hello(input: IHelloSchema) {
        return `Hello ${input.name}, welcome to  ${appName} platform`
    }
}