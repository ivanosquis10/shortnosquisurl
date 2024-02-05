/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { formSchema, type FormSchemaType } from "@/validations"
import { generateUrl } from "@/actions"

export const useFormUrl = () => {
  const [newUrl, setNewUrl] = useState<string>("")

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

  const generateAndSetUrl = async (url: string) => {
    const generatedUrl = await generateUrl({ url })

    setNewUrl(generatedUrl?.shortUrl || "")
    reset()
  }

  const resetFormResult = () => {
    setNewUrl("")
    reset()
  }

  return {
    newUrl,
    register,
    handleSubmit,
    reset,
    errors,
    generateAndSetUrl,
    resetFormResult,
  }
}
