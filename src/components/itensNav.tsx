"use client"
import { Route } from "next"
import Link from "next/link"

export default function ItensNav() {
  const navItems = [
    {
      href: "#home",
      title: "Home",
    },
    {
      href: "#sobre",
      title: "Sobre",
    },
    {
      href: "#solucoes",
      title: "Soluções",
    },
    {
      href: "#contato",
      title: "Contato",
    }
  ] satisfies { href: Route; title: string }[]

  const alterState = () => {
    const input = document.getElementById("my-drawer") as HTMLInputElement
    if (input) {
      input.checked = false
    }
  }
  return (
    <div className="drawer-side  z-50  inset-0 fixed">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="p-4 w-full min-h-full bg-white text-base-content justify-center">
        <div className="mb-40 flex justify-end">
          <svg
            viewBox="0 0 50 50"
            width="30px"
            height="30px"
            onClick={alterState}
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </div>
        {navItems.map((item, id) => (
          <Link
            onClick={alterState}
            className="w-full flex text-center justify-center text-2xl font-semibold mb-2"
            href={item.href}
            key={`${item.href}-${id}`}
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
