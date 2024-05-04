import { z } from "zod";

export const HelloSchema = z.object({
    name: z.string()
})