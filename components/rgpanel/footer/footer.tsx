import Image from "next/image";
import Link from "next/link";
import styles from './footer.module.scss'
import { ALBERT_SANS } from "constant/fonts";
import { FronEndMenu } from "constant/menu";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            2023
        </footer>
    );
};

export default Footer;
