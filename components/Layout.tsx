import {type FC} from 'react';
import { useRouter } from "next/router";
import Nav from './Nav';
import Link from 'next/link';

interface LayoutProps {
    children: any;
}

const Layout: FC<LayoutProps> = ({children}) => {
    const router = useRouter();
    return (
        <main className='w-full min-h-screen text-barlow'>
            <Nav/>
            {children}
            <footer className="border-t border-gray-300/20 py-6 flex gap-4 justify-center bg-slate-900">
                <p>Made with love ❤️</p>
                <Link href="/">
                    <span className='link'>
                        Back to top
                    </span>
                </Link>
            </footer>
        </main>
    )
}

export default Layout