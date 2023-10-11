"use client"

import React from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useWindow from '@/hooks/use-window'
import { UserButton, useAuth } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

export default function SiteHeader() {
  const { isDesktop } = useWindow()
  const path = usePathname()
  const user = useAuth();
  return (
    <header className="md:container md:max-w-6xl px-4">
      <nav className='md:py-8 py-4 flex w-full justify-between items-center z-50'>
        <h2 className="text-2xl font-semibold tracking-wide flex gap-2.5 items-center">
          {isDesktop
            ? <>
              <span>{'<'}</span>
              <Link href={'/'}>
                CoDox
              </Link>
              <span>{'/>'}</span>
            </>
            : <span>{'</>'}</span>
          }
        </h2>
        <div className="flex justify-center items-center gap-2" >
          <ThemeToggle />
          {
            user?.userId ? (
              path === "/dashboard" ? (
                <UserButton />
              ) : (
                <Button className="flex" variant="outline" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              )
            ) : (
              <Button className="flex" asChild>
                <Link href="/signin">Sign in</Link>
              </Button>
            )
          }
        </div>
      </nav>
    </header>
  )
}
