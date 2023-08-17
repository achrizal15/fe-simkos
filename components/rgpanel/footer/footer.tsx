import Image from "next/image";
import Link from "next/link";
import styles from './footer.module.scss'
import { ALBERT_SANS } from "constant/fonts";
import { FronEndMenu } from "constant/menu";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
    return (
        <footer className={styles.footer}>
         <p className="flex items-center gap-1 font-semibold"> Copyright <AiOutlineCopyright/> 2023</p>
         <p className="flex justify-between gap-1">
            Powered by
            <b>
                CV. Renggani Karya Semesta
            </b>
         </p>
        </footer>
    );
};

export default Footer;
