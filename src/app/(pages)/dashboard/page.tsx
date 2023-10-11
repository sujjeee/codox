import { currentUser } from '@clerk/nextjs'
import React from 'react'

export async function generateMetadata() {
    const user = await currentUser()
    return {
        title: `${user?.firstName}'s`,
    }
}
export default async function page() {

    const user = await currentUser();
    return (
        <div className="h-[50vh] w-full justify-center items-center flex px-4 flex-col ">
            <h1 className="scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-normal lg:text-5xl text-center space-y-3 justify-center">
                Hello, {user ? user?.firstName : 'Guest'}  👋
            </h1>
        </div>
    )
}
