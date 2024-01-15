"use client"

import { Files, LinkIcon } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

import { defaultUrl } from "@/config"

import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

export function Result({ newUrl }: { newUrl: string }) {
  const copyUrl = () => {
    navigator.clipboard.writeText(`${defaultUrl}/${newUrl}`)
    toast.success("URL copied to clipboard")
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
          <Button
            className="flex gap-1 font-bold"
            size="sm"
            title="Copy your shortened URL"
            onClick={copyUrl}
          >
            Copy
            <Files className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
