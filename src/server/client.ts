import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "./main";

export const trpClient = createTRPCReact<AppRouter>({});