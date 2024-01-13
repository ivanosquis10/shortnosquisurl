import { redirect } from "next/navigation"

import { redirectUrl } from "@/actions"

export default async function Page({ params }: { params: { shorturl: string } }) {
  const originalUrl = await redirectUrl({ shorturl: params.shorturl })

  if (originalUrl !== "/") redirect(originalUrl)

  redirect("/")

  return <p>Loading....</p>
}
