/* eslint-disable react/jsx-no-leaked-render */
"use client"

import type { SubmitHandler } from "react-hook-form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
// import { toast } from "sonner"
import { useTransition } from "react"

import { cn } from "@/lib/utils"
import { generateUrl } from "@/actions"

import { Button } from "./ui/button"

const formSchema = z.object({
  url: z.string().url("Invalid URL"),
})

type FormSchemaType = z.infer<typeof formSchema>

export function UrlForm() {
  const [isPending, startTransition] = useTransition()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    const { url } = data

    startTransition(async () => {
      await generateUrl({ url })

      // console.log(data)
      reset()
    })
  }

  return (
    <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)}>
      <input
        className={cn(
          "relative flex-1 rounded border border-zinc-900/25 bg-stone-100 p-2 shadow-xl focus:outline-none",
          errors.url && "border-rose-500",
        )}
        id="url"
        placeholder="https://example.com..."
        type="text"
        {...register("url", { required: true })}
      />
      <Button>{isPending ? "Generating..." : "Generate"}</Button>
    </form>
  )
}
