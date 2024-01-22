import Post from "@/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET=async(req,{params})=>{
    const {id}=params
        //const id=params.id
    try{
            connect()
            const post= await Post.findById(id)
            return new NextResponse(JSON.stringify(post),{status:200})

    }
    catch(err){
        console.log(err);
        return new NextResponse(JSON.stringify({msg:"Server Error"}),{status:500})

    }

}

export const DELETE=async(req,{params})=>{
    const {id}=params
        //const id=params.id
    try{
            connect()
            await Post.findByIdAndDelete(id)
            return new NextResponse("Post Deleted",{status:200})

    }
    catch(err){
        console.log(err);
        return new NextResponse(JSON.stringify({msg:"Server Error"}),{status:500})

    }

}