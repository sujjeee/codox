"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { event } from "@/lib/gtags";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { toast } from "sonner";

interface CTCProps {
  text: string;
  label: string;
}

export function CopyButton() {
  const [isCopied, setIsCopied] = React.useState(false);

  function copytoclipboard({ text, label }: CTCProps) {
    if (typeof window === "undefined") return;
    setIsCopied(true);
    void window.navigator.clipboard.writeText(text?.toString() ?? "");
    setTimeout(() => setIsCopied(false), 2000);
    toast.success("Copied to clipboard");
    event({
      category: "Copy Clicks",
      action: "clicks",
      label: label
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="absolute right-3 z-30 h-8 w-8 px-0 -translate-y-2/4 top-2/4"
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
          onClick={() =>
            copytoclipboard({
              text: "https://github.com/sujjeee/codox.git",
              label: "https_copy_click"
            })
          }
        >
          Https
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            copytoclipboard({
              text: "gh repo clone sujjeee/codox",
              label: "ghcli_copy_click"
            })
          }
        >
          GitHub CLI
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            copytoclipboard({
              text: "npx codox",
              label: "npx_codox"
            })
          }
        >
          npx
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
