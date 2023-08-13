import Image from "next/image";
import Link from "next/link";
import styles from './footer.module.scss'
import { ALBERT_SANS } from "constant/fonts";
import { FronEndMenu } from "constant/menu";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <Link href='/'>
                        <Image
                            className={styles.logo}
                            src='/rg.png'
                            width={80}
                            height={90}
                            alt='logo'
                        />
                    </Link>
                </div>
                <div className={`${styles.content} ${ALBERT_SANS.className}`}>
                    <div>
                        <ul>
                            <li className={styles.list}>
                                Call. +62 82 234 104 446
                            </li>
                            <li className={styles.list}>
                                Email. rengganigroup@gmail.com
                            </li>
                            <li className={styles.list}>
                                329 Queensberry Street, North Melbourne VIC 3051, Australia.
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-10">
                        <ul>
                            {FronEndMenu.slice(0, 3).map((menu, index) => (
                                <li key={index} className={styles.list}>
                                    <a href={menu.url}>{menu.title}</a>
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {FronEndMenu.slice(3, 6).map((menu, index) => (
                                <li key={index} className={styles.list}>
                                    <a href={menu.url}>{menu.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <button className={styles.btnLogin}>
                            Login Panel
                        </button>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>SimKos | Sistem Management Kost</p>
                  <div className="flex">
                  <AiOutlineCopyright/> <p> 2023 <b className="font-bold">CV. Renggani Karya Semesta</b></p>
                  </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
