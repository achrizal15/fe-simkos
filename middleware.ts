
// export { default } from 'next-auth/middleware'

// export const config = { matcher: ['/rgpanel/:path*'] }

import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request })
    if (request.nextUrl.pathname.startsWith('/login')) {
        if(token!=null){
            return NextResponse.redirect(new URL('/rgpanel', request.url))
        }
    }
    if (request.nextUrl.pathname.startsWith('/rgpanel')) {
        if(token==null){
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
}