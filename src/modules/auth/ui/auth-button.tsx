"use client"
import { Button } from '@/components/ui/button'
import { UserCircle } from 'lucide-react'
import React from 'react'
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
const Authbutton = () => {
    return (
        <>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-300 border-blue-500/200 rounded-full shadow-none' variant="outline"><UserCircle />Sign in</Button>
                </SignInButton>
            </SignedOut>

        </>
    )
}

export default Authbutton