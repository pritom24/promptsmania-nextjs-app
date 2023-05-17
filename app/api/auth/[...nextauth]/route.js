import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"


const Handler = NextAuth({
providers:[
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET
    })
],
async session({session}){

},
async signIn({profile}) {
 try {
    
 } catch (error) {
    
 }
}

})

export {Handler as GET , Handler as POST}
