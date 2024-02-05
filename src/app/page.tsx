import { UrlForm } from "@/components/url-form"

export default function Home() {
  return (
    <section className="mx-auto mt-20 flex w-full max-w-6xl flex-col gap-8 md:mt-20">
      <div className="custom_background" />

      <div className="text-center">
        <div className="flex items-center justify-center gap-1">
          <h1 className="mb-3 bg-gradient-to-t from-zinc-950 to-zinc-800/70 bg-clip-text text-6xl font-extrabold text-transparent md:text-7xl">
            YokoCut
          </h1>
          <img
            alt="yokocut logo"
            className="h-10 w-10 rounded-lg md:h-[50px] md:w-[50px]"
            height={50}
            loading="lazy"
            src="/yokocut.webp"
            width={50}
          />
        </div>

        <UrlForm />
      </div>
    </section>
  )
}
