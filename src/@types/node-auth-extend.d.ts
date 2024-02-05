import { AdapterUser as AdapterUserBase } from '@auth/core/adapters'
import { DefaultSession, User as DefaultUser } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

declare module '@auth/core/adapters' {
  interface AdapterUser extends AdapterUserBase {
    companyId: string
  }
}

declare module 'next-auth' {
  interface User extends DefaultUser {
    companyId: string
  }

  interface Session extends DefaultSession {
    user: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    companyId: string
  }
}