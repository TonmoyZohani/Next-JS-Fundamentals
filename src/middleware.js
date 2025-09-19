import { NextResponse } from "next/server";

export function middleware(request) {
  // Read a cookie named "role"
  const role = request.cookies.get("role")?.value || "guest"; // fallback to guest

  const pathname = request.nextUrl.pathname;

  const isServicesPage = pathname.startsWith("/services");
  const isAdmin = role === "admin";

  console.log("Requested Path:", pathname);
  console.log("User Role:", role);

  if (isServicesPage && !isAdmin) {
    // Redirect non-admins to login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// ✅ Match both `/services` and `/services/*`
export const config = {
  matcher: ["/services", "/services/:path*"],
};
