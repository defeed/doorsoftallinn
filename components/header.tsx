import Link from "next/link"
import { Logo } from "./icons"

export const Header = () => {
  return (
    <header className="px-2 my-3 flex items-center justify-center">
      <Logo className="w-8 h-8 mr-3" alt="Doors of Tallinn" />

      <Link href="/">
        <a className="text-slate-300 hover:text-slate-100">
          <h1 className="text-3xl font-medium uppercase">
            Doors of Tallinn
          </h1>
        </a>
      </Link>
    </header>
  )
}
