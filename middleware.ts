import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

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
