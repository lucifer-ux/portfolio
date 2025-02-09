import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import "./header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img height={60} width={150} src = "https://lucifer-ux.github.io/trial-image/luciferLogo.png" alt="logoImage" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github />
            </Link>
          </li>
          <li className="header__nav-item">
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </Link>
          </li>
          <li className="header__nav-item">
            <Link href="mailto:your.email@example.com">
              <Mail />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

