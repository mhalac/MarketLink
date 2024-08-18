import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
// This function can be marked `async` if using `await` inside
export  async function middleware(request: NextRequest) {
    const client = await getKindeServerSession();
    if(!(await client.isAuthenticated())){
      return NextResponse.redirect(new URL('/', request.url))
    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/account/:path*',
}