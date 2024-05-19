import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import React from "react";

async function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user } = (await auth()) as Session;
  return (
    <div>
      {user.role.includes("ADMIN") ? (
        children
      ) : (
        <h1>
          Sorry you are not allowed on this page. please ask admin to gve you
          acccess
        </h1>
      )}
    </div>
  );
}

export { AdminGuard };
