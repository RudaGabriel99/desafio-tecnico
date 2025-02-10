import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Lê os cookies da requisição
  const cookieHeader = request.headers.get("cookie");
  const hasAuthToken = cookieHeader?.includes("authToken=");

  // Se for uma rota privada e o usuário não estiver autenticado, redireciona para login
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/profile")) {
    if (!hasAuthToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Aplica o middleware somente para rotas privadas
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Defina as rotas privadas aqui
};
