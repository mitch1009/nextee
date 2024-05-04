import {name} from '@/root/package.json'
export class HelloService {
    static  hello() {
        return `Hello from ${name}`
    }
}