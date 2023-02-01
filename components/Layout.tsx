import {type FC} from 'react';
import { useRouter } from "next/router";
import Nav from './Nav';

interface LayoutProps {
    children: any;
}

const Layout: FC<LayoutProps> = ({children}) => {
    const router = useRouter();
    return (
        <main className='w-full min-h-screen text-barlow'>
            <Nav/>
            {children}
            <footer className="">
            </footer>
        </main>
    )
}

export default Layout