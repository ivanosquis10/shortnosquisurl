"use client"

import { Files } from "lucide-react"
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
            className="font-medium transition-all hover:underline"
            href={newUrl}
            target="_blank"
            title="Go to your shortened URL"
          >
            {`${defaultUrl}/${newUrl}`}
          </Link>
          <Button
            className="flex gap-1 font-bold"
            size="sm"
            title="Copy your shortened URL"
            // variant="ghost"
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
