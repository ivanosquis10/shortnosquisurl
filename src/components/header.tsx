import { GithubIcon } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="container absolute top-0 m-auto flex w-full items-center justify-between py-2">
      <p className="bg-white text-sm opacity-70">© {new Date().getFullYear()} YokoCut</p>
      <ul className="flex items-center gap-2">
        <li>
          <Link
            className="bg-white text-sm font-medium underline underline-offset-4 opacity-70"
            href="https://github.com/ivanosquis10"
            rel="noreferrer"
            target="_blank"
          >
            Built by Ivan😻
          </Link>
        </li>
        <li className="rounded-md bg-white">
          <Link
            href="https://github.com/ivanosquis10/shortnosquisurl"
            rel="noreferrer"
            target="_blank"
            title="Link of the project on GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </header>
  )
}
