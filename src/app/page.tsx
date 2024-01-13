import { UrlForm } from "@/components/url-form"

export default function Home() {
  return (
    <section className="flex w-full flex-col gap-8">
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_140%)]" />

      <div>
        <h1 className="mb-3 bg-gradient-to-t from-zinc-950 to-zinc-800/70 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
          IvanoShort URL
        </h1>

        <UrlForm />
      </div>

      <div>result</div>
    </section>
  )
}
