import { NextRequest, NextResponse } from "next/server";
import { appRouter } from "@/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { auth ,db} from "@/lib";

/**
 * Handles the incoming request and returns the response from the fetchRequestHandler.
 *
 * @param {NextRequest} req - The incoming request object.
 * @return {Promise<NextResponse>} The response from the fetchRequestHandler.
 */
const handler = async (req: NextRequest): Promise<NextResponse> => {
  const session = await auth();
  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => ({
      session: await auth(),
      user: session?.user,
      db: db,
    }) as any,
  }) as any;

  return response;
};

export { handler as GET, handler as POST };
