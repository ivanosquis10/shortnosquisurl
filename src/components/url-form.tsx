"use client"

import type { SubmitHandler } from "react-hook-form"
import type { FormSchemaType } from "@/validations"

import { Unlink } from "lucide-react"
import { useTransition } from "react"

import { cn } from "@/lib/utils"
import { useFormUrl } from "@/hooks/useFormUrl"

import { Button } from "./ui/button"
import { Result } from "./result"

export function UrlForm() {
  const [isPending, startTransition] = useTransition()
  const { newUrl, errors, register, handleSubmit, generateAndSetUrl, resetFormResult } =
    useFormUrl()

  const onSubmit: SubmitHandler<FormSchemaType> = async ({ url }) => {
    startTransition(async () => await generateAndSetUrl(url))
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-5">
      <form className="flex flex-col gap-3 md:flex-row" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={cn(
            "relative flex-1 rounded border border-zinc-900/25 p-2 shadow-xl focus:outline-none",
            errors.url && "border-rose-500",
          )}
          id="url"
          placeholder="https://example.com..."
          type="text"
          {...register("url", { required: true })}
        />
        <Button>
          {isPending ? (
            "Generating..."
          ) : (
            <>
              Generate <Unlink className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
      <div className="h-36">
        {!isPending && newUrl !== "" && <Result cleanResult={resetFormResult} newUrl={newUrl} />}
      </div>
    </div>
  )
}
