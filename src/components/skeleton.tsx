import { Link, Files } from "lucide-react"

import { defaultUrl } from "@/config"

import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

export function Skeleton() {
  return (
    <Card className="animate-pulse">
      <CardHeader className="rounded-t-lg bg-gray-300">
        <CardTitle className="rounded-lg bg-gray-400 p-4">
          {/* Skeleton for title */}
          <span className="h-4 w-16 rounded-full bg-gray-400" />
          <span className="ml-4 h-4 w-4 rounded-full bg-gray-800" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          {/* Skeleton for link */}
          <div className="h-8 w-64 rounded-full bg-gray-300 text-justify text-sm font-medium text-transparent">
            <span className="h-4 w-24 rounded-full bg-gray-400" />
            <span className="ml-4 h-4 w-16 rounded-full bg-gray-400" />
            <span className="ml-4 h-4 w-16 rounded-full bg-gray-400" />
          </div>
          {/* Skeleton for button */}
          <Button
            className="flex h-8 w-40 items-center justify-center gap-4 rounded-full bg-gray-300 text-transparent"
            size="sm"
            variant="ghost"
          >
            <span className="h-4 w-4 rounded-full bg-gray-400" />
            <span className="ml-2 h-4 w-6 rounded-full bg-gray-400" />
            <span className="ml-2 h-4 w-4 rounded-full bg-gray-400" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
