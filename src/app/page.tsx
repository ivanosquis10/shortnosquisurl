import { UrlForm } from "@/components/url-form"

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-8">
      <div className="custom_background" />

      <div className="text-center">
        <h1 className="mb-3 bg-gradient-to-t from-zinc-950 to-zinc-800/70 bg-clip-text text-6xl font-extrabold text-transparent md:text-7xl">
          YokoCut
        </h1>

        <UrlForm />
      </div>

      <div>result</div>
    </section>
  )
}
