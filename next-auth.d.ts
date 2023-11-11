import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      employeeId: string;
      accessToken: string;
    };
  }
}
