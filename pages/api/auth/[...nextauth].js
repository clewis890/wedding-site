import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        // add more providers here
        Providers.Email({
            server: process.env.MAIL_SERVER,
            from: 'NextAuth.js <clewis890@gmail.com>'
        }),
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options)