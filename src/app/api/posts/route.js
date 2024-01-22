import Post from "@/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET=async(req)=>{

    const url= new URL(req.url)

    const username=url.searchParams.get("username")

    try{
            connect()
            const posts= await Post.find(username && {username})
            return new NextResponse(JSON.stringify(posts),{status:200})

    }
    catch(err){
        console.log(err);
        return new NextResponse(JSON.stringify({msg:"Server Error"}),{status:500})

    }

}

export const POST=async(req)=>{

    const body=await req.json()
    const newPost=new Post(body)

    try{
            connect()
            await newPost.save()
        return new NextResponse("Post Created",{status:200})

    }
    catch(err){
        console.log(err);
        return new NextResponse(JSON.stringify({msg:"Server Error"}),{status:500})

    }

}