import Head from 'next/head'
import Link from 'next/link'
import Clock from './clock'

export default function Header() {



  return (
    <header>
      <nav>
        <ul>
          <li><Link href={"/"}><a>IT-Sammlung</a></Link></li>
          <li><Link href={"/showcase"}><a>Showcase</a></Link></li>
          <li>Zeit: <Clock /> </li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          border: 1px solid black;
        }
        li {
          display: inline;
          margin-right: 10px;
        }
      `}</style>

      <style jsx global>{`

      `}</style>
    </header>

  )
}
