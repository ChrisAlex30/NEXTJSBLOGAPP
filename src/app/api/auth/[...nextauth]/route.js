import User from "@/models/User"
import connect from "@/utils/db"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/Google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";



const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id:"Credentials",
      name:"Credentials",

      async authorize(credentials){
        try{
          connect()
          console.log(credentials.email);

          const user=await User.findOne({email:credentials.email})
          console.log(user);
          if(user){
              const isPasswordCorrect=await bcrypt.compare(credentials.password,user.password)
              if(isPasswordCorrect){
                return user
              }
              else{
                throw new Error("Wrong User Credentials")      
              }
          }
          else{
            throw new Error("User Not Found")  
          }
         }
         catch(err){
          throw new Error(err)
         }

      }
    })
    // ...add more providers here
  ],
  pages:{
    error:"/dashboard/login"
  }
}

const handler=NextAuth(authOptions)

export {handler as GET,handler as POST}