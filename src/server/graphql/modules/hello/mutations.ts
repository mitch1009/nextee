import { appName } from "./types";

export const HelloMutation = {
    hello: (_:unknown, args: {name: string}) => `Hello ${args.name} from ${appName} platform`
}