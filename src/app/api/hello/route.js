import { NextResponse } from "next/server";



export async function GET(){

    return new NextResponse(JSON.stringify("hello world"),{status: 201});
}