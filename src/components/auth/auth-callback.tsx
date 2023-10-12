"use client"

import { trpc } from '@/app/_trpc/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Icons } from '@/components/icons'

export default function AuthCallback() {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')
    trpc.authCallback.useQuery(undefined, {
        onSuccess: ({ success }) => {
            if (success) {
                router.push(origin ? `${origin}` : '/')
            }
        },
        onError: (err) => {
            if (err.data?.code === 'UNAUTHORIZED') {
                router.push('/signin')
            }
        },
        retry: false,
    })

    return (
        <div className='flex flex-col items-center gap-2  justify-center'>
            <Icons.spinner className="mr-2 h-9 w-9 animate-spin" aria-hidden="true" />
            <h3 className='font-semibold text-xl '>
                Setting up your account
            </h3>
            <p className='text-muted-foreground'>you will be redirect soon</p>
        </div>
    )
}
