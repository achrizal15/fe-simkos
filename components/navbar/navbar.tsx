'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useState, useEffect } from 'react';
import style from './navbar.module.scss';
import { usePathname } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import Button from '../core/Button';
interface MenuItem {
    title: string;
    url: string;
    icon: ReactNode;
    sub_menu: MenuItem[] | null;
}
const menu: MenuItem[] = [
    {
        title: 'Home',
        url: '/',
        icon: <AiFillHome />,
        sub_menu: null,
    },
    {
        title: 'About',
        url: '/about',
        icon: <AiFillHome />,
        sub_menu: null,
    },
    {
        title: 'Projects',
        url: '/projects',
        icon: <AiFillHome />,
        sub_menu: null,
    },
    {
        title: 'Contact',
        url: '/contact',
        icon: <AiFillHome />,
        sub_menu: null,
    },
];
type NavbarItemProps = {
    menu: MenuItem[];
};
const Navbar = () => {
    const pathname = usePathname();
    const [toggle, settoggle] = useState<boolean>(false);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const targetElement = document.getElementById('desktop-menu');
            if (
                targetElement &&
                !targetElement.contains(event.target as Node) &&
                toggle
            ) {
                settoggle((state) => !state);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggle]);
    const NavbarItem: React.FC<NavbarItemProps> = ({
        menu,
    }: NavbarItemProps) => {
        return menu.map((e, k) => (
            <li
                key={k}
                className={`${style['menu-item']} ${
                    pathname == e.url && style.active
                }`}
            >
                {!toggle ? (
                    pathname == e.url && style.active ? (
                        e.icon
                    ) : (
                        ''
                    )
                ) : (
                    <Link href={e.url}>{e.title}</Link>
                )}
            </li>
        ));
    };
    return (
        <nav className={`${style.nav}`}>
            <div className={`${style.content}`}>
                <div className={`${style.hero}`}>
                    <Image
                        src='/rg-x1.png'
                        fill={true}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 5000vw'
                        alt='Image'
                    />
                </div>
                <div id='desktop-menu' className={`${style['desktop-menu']}`}>
                    <Button
                        variant={'primary'}
                        className={`${style['toggle-button-desktop']} `}
                        onClick={() => settoggle((state) => !state)}
                    >
                        {!toggle ? (
                            <BsFillCaretLeftFill />
                        ) : (
                            <BsFillCaretRightFill />
                        )}
                    </Button>
                    <ul
                        className={`${style.menu} ${
                            toggle ? style['active-toggle'] : ''
                        }`}
                    >
                        <NavbarItem menu={menu} />
                    </ul>
                </div>
                <button
                    className={`${style['toggle-button']}`}
                    onClick={() => settoggle((state) => !state)}
                >
                    {toggle ? <MdClose /> : <FiMenu />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
