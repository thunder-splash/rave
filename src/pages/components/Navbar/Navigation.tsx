import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', top: 20, right: 20 }}>Меню</button>
            <nav className={isOpen ? 'open' : ''}>
                <ul>
                    <li>
                        <Link href="/">
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link href="/music">
                            Музыка
                        </Link>
                    </li>
                    <li>
                        <Link href="/artists">
                            Исполнители
                        </Link>
                    </li>
                </ul>

                <style jsx>{`
          nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 200px;
            height: 100%;
            background-color: rebeccapurple;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
          }
          nav.open {
            transform: translateX(0);
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          li {
            margin: 10px 0;
          }
          a {
            text-decoration: none;
            color: #333;
          }
          a.active {
            color: #000;
            font-weight: bold;
          }
        `}</style>
            </nav>
        </>
    )
}

export default Navigation