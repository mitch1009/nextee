import { IHelloSchema } from './types'
export class HelloService {
    static helloMutation(name: IHelloSchema) {
        return `Hello from ${name.name} API server`
    }
    static hello(input: IHelloSchema) {
        return `Hello from ${input.name} API server`
    }
}