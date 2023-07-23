'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ALBERT_SANS_400, ALBERT_SANS_500 } from 'constant/fonts';
import { FiMenu } from 'react-icons/fi';
import styles from './navbar.module.scss';
interface MenuItem {
    title: string;
    url: string;
    sub_menu: MenuItem[] | null;
}
const menu: MenuItem[] = [
    {
        title: 'Home',
        url: '/',
        sub_menu: null,
    },
    {
        title: 'Rooms',
        url: '/rooms',
        sub_menu: null,
    },
    {
        title: 'Reservation',
        url: '/reservation',
        sub_menu: null,
    },
    {
        title: 'Features',
        url: '/features',
        sub_menu: null,
    },
    {
        title: 'About',
        url: '/about',
        sub_menu: null,
    },
    {
        title: 'Contact',
        url: '/contact',
        sub_menu: null,
    },
];

const Navbar = () => {
    const pathname = usePathname();
    const [toggle, settoggle] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [textColor, setTextColor] = useState<string>('text-white');

    useEffect(() => {
        const handleBackgroundDetection = () => {
            const navbar = document.querySelector(`.${styles.navbar}`);

            if (navbar) {
                const styles = getComputedStyle(navbar);
                const backgroundColor = styles.backgroundColor;
                const rgb = backgroundColor.match(/\d+/g);
                if (rgb) {
                    const [red, green, blue] = rgb.map((color) =>
                        parseInt(color, 10)
                    );

                    // Calculate the brightness using the formula
                    const brightness =
                        (red * 299 + green * 587 + blue * 114) / 1000;

                    setTextColor(
                        brightness < 128 ? 'text-white' : 'text-gray-600'
                    );
                }
            }
        };
        handleBackgroundDetection();
        // Add a scroll event listener when the component mounts
        const handleScroll = () => {
            // Get the vertical scroll position
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
            handleBackgroundDetection();
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`${styles.navbar} ${
                isScrolled || toggle ? styles.active : ''
            }`}
        >
            <div className={styles.content}>
                <div className={styles['section-one']}>
                    <div className={styles['logo-content']}>
                        <Link href='/'>
                            <Image
                                className={styles.logo}
                                src='/rg.png'
                                width={36}
                                height={36}
                                alt='logo'
                            />
                        </Link>
                        <span
                            className={`${ALBERT_SANS_500.className} ${styles['logo-title']}`}
                        >
                            {/* Renggani Group */}
                        </span>
                    </div>
                    <menu>
                        <button
                            className={styles['toggle-button']}
                            onClick={() => settoggle((state) => !state)}
                        >
                            <FiMenu />
                        </button>
                        <ul
                            className={`${styles['list-menu']}
                            ${toggle ? styles.active : ''}`}
                        >
                            {menu.map((e, k) => {
                                return (
                                    <li
                                        key={k}
                                        className={`${
                                            styles.item
                                        } ${textColor} ${
                                            pathname == e.url
                                                ? styles['item-active']
                                                : ''
                                        } ${ALBERT_SANS_400.className}`}
                                    >
                                        <Link href={e.url}> {e.title}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </menu>
                </div>
                <div className={`${styles['section-two']} ${textColor}`}>
                    Call Us.
                    <a href='tel:+6282234104446'>
                        <b className={`${ALBERT_SANS_500.className}`}>
                            +62 82 234 104 446
                        </b>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
