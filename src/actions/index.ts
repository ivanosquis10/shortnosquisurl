"use server"

import { nanoid } from "nanoid"

import prisma from "@/lib/prisma"

type GenerateUrlProps = {
  url: string
}

type RedirectUrlProps = {
  shorturl: string
}

export const generateUrl = async ({ url }: GenerateUrlProps) => {
  // 1# Paso: Verificar si la URL ya existe en la base de datos -> En caso de que exista, devolver la URL existente y sumarle un click
  try {
    const existURL = await prisma.link.findUnique({ where: { url } })

    if (existURL) {
      return existURL
    }

    const newShortUrl = nanoid(6)
    const newDocument = await prisma.link.create({
      data: {
        url,
        shortUrl: newShortUrl,
      },
    })

    return newDocument
  } catch (error) {
    console.log(error)
  }
}

export const redirectUrl = async ({ shorturl }: RedirectUrlProps) => {
  try {
    const link = await prisma.link.findUnique({ where: { shortUrl: shorturl } })

    // Caso de no existe la URL, redireccionar al home
    if (!link) return "/"

    // Caso contrario, redireccionar a la URL original y actualizar los clicks
    const updatedLink = await prisma.link.update({
      where: { shortUrl: shorturl },
      data: { clicks: { increment: 1 } },
      select: { url: true },
    })

    return updatedLink.url
  } catch (error) {
    console.log("Error to redirect: ", error)

    return "/"
  }
}
