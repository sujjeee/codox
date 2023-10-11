"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons"

import { Button, type ButtonProps } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { toast } from "sonner"

export function CopyButton({ value, ...props }: ButtonProps) {
    const [isCopied, setIsCopied] = React.useState(false)

    function copytoclipboard(texttocopy: string) {
        if (typeof window === "undefined") return
        setIsCopied(true)
        void window.navigator.clipboard.writeText(texttocopy?.toString() ?? "")
        setTimeout(() => setIsCopied(false), 2000)
        toast.success('Copied to clipboard')
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="absolute right-3 z-50 h-8 w-8 px-0 -translate-y-2/4 top-2/4"
                >
                    {isCopied ? (
                        <CheckIcon className="h-4 w-4" aria-hidden="true" />
                    ) : (
                        <CopyIcon className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span className="sr-only">Copy</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() => copytoclipboard("https://github.com/sujjeee/codox.git")}>
                    Https
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => copytoclipboard("gh repo clone sujjeee/codox")}>
                    GitHub CLI
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}