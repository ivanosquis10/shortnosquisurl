import { z } from "zod"

export const formSchema = z.object({
  url: z.string().url("Invalid URL"),
})

export type FormSchemaType = z.infer<typeof formSchema>
