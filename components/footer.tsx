import Link from "next/link"
import { Email, GitHub, Twitter } from "./icons"

export const Footer = () => {
  return (
    <footer className="py-3 px-2 text-sm text-slate-300">
      <ul className="flex justify-center ">
        <li className='mr-3'>
          Made with <span className="mr-2">❤️</span> by Artem Pakk
        </li>

        <li className='mr-3'>

        </li>

        <li className='mr-5'>
          <Link href="https://twitter.com/defeed">
            <a className="hover:text-slate-100">
              <Twitter className="w-5 h-5" />
            </a>
          </Link>
        </li>

        <li className='mr-5'>
          <Link href="https://github.com/defeed">
            <a className="hover:text-slate-100">
              <GitHub className="w-5 h-5" />
            </a>
          </Link>
        </li>

        <li className='mr-3'>
          <Link href="mailto:apakk@me.com?subject=Doors of Tallinn">
            <a className="hover:text-slate-100">
              <Email className="w-5 h-5" />
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
