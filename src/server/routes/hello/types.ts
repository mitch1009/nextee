import { z } from "zod";
import { HelloSchema } from "./schema";

export declare type IHelloSchema =  z.infer<typeof HelloSchema>