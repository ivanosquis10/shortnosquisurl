"use client"

import { Eraser, Files, LinkIcon } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

import { defaultUrl } from "@/config"
import { useCopyToClipboard } from "@/hooks"

import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { LinkQR } from "./link-qr"

type ResultProps = {
  newUrl: string
  cleanResult: () => void
}

export function Result({ newUrl, cleanResult }: ResultProps) {
  const [, copy] = useCopyToClipboard()
  const fullUrl = `${defaultUrl}/${newUrl}`
  const handleCopy = () => {
    copy(fullUrl)
      .then(() => toast.success("URL copied to clipboard"))
      .catch(() => toast.error("Failed to copy URL"))
  }

  return (
    <Card className="animate-fade-down shadow-lg">
      <CardHeader>
        <CardTitle>Your Shortened URL</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Link
            className="flex items-center text-lg font-semibold transition-all hover:underline"
            href={newUrl}
            target="_blank"
            title="Go to your shortened URL"
          >
            <LinkIcon className="mr-2 h-5 w-5 text-emerald-500" strokeWidth={3} />
            {`${newUrl}.com`}
          </Link>
          <div className="flex items-center gap-2">
            <Button
              className="flex gap-1 font-bold"
              size="sm"
              title="Copy your shortened URL"
              onClick={handleCopy}
            >
              Copy
              <Files className="h-4 w-4" />
            </Button>
            <Button
              className="hover:bg-rose-400"
              size="icon"
              title="Delete result"
              variant="outline"
              onClick={cleanResult}
            >
              <Eraser className="h-5 w-5" strokeWidth={2} />
              <span className="sr-only">clean result</span>
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <LinkQR url={fullUrl} />
      </CardFooter>
    </Card>
  )
}
