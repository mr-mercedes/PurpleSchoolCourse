"use client";
import {JSX, useEffect} from "react";
import styles from './Up.module.css';
import UpIcon from '@/public/up.svg';
import {useScrollY} from "@/hooks/useScrollY";
import {useAnimation, motion} from "framer-motion";
export const Up = ():JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();
    useEffect(() => {
        controls.start({opacity: y / document.body.scrollHeight});
    }, [y, controls]);
    const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
    }
    return (
        <motion.button
            animate={controls}
            initial={{opacity:0}}
            className={styles.up}
            onClick={scrollToTop}>
            <UpIcon/>
        </motion.button>
    )
}