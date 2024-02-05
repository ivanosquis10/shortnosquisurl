import Link from "next/link"

export function Header() {
  return (
    <header className="container absolute top-0 m-auto flex w-full items-center justify-between py-2">
      <p className="bg-white text-sm opacity-70">© {new Date().getFullYear()} YokoCut</p>
      <Link
        className="bg-white text-sm font-medium underline underline-offset-4 opacity-70"
        href="https://github.com/ivanosquis10"
        rel="noreferrer"
        target="_blank"
      >
        Built by Ivan😻
      </Link>
    </header>
  )
}
