import Navigation from './components/Navbar/Navigation'
import { Inter } from 'next/font/google'
import Head from "next/head";
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
            </Head>
            <main>
                <h1>Домашняя страница</h1>
            </main>
        </>
    )
}