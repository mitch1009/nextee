import { name as appName } from '@/root/package.json'
import { IHelloSchema } from './types'
export class HelloService {
    static helloMutation(name: IHelloSchema) {
        return `Hello ${name.name}, welcome to  ${appName} platform API with mutations`
    }
    static hello(input: IHelloSchema) {
        return `Hello ${input.name}, welcome to  ${appName} platform`
    }
}