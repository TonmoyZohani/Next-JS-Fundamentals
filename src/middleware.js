import { NextResponse } from "next/server";

export function middleware(request) {
  const dummyUserData = {
    role: "user", // 👈 change to "admin" to allow access
    email: "test@admin.com",
  };

  const pathname = request.nextUrl.pathname;

  const isServicesPage = pathname.startsWith("/services");
  const isAdmin = dummyUserData.role === "admin";

  console.log("Requested Path:", pathname);
  console.log("Is Services Page:", isServicesPage);

  if (isServicesPage && !isAdmin) {
    // Redirect non-admins to home
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
