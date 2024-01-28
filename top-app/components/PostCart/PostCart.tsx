import {JSX} from "react";
import Image from "next/image";
import {Like} from "@/components";
import styles from './PostCart.module.css';
import {PostCartText} from "@/components/PostCart/components/PostCartText";
import {PostCartProps} from "@/components/PostCart/PostCart.props";

export const PostCart = ({tag, title, text, last_change}: PostCartProps): JSX.Element => {

    return (
        <div className={styles.post_cart}>
            <Image
                src={'/cart_img.png'}
                alt={'cart image'}
                width={330}
                height={200}
                className={styles.post_img}
            />
            <div>
                <div className={styles.tag}>
                    <PostCartText size={12}>{tag}</PostCartText>
                    <Like/></div>
                <div className={styles.post_text}>
                    <PostCartText size={18}>{title}</PostCartText>
                    <PostCartText size={14}>{text}</PostCartText>
                </div>
                <div className={styles.post_footer}>
                    <PostCartText size={12}>{last_change}</PostCartText>
                    <a href={'/'}><span className={styles.post_btn}>Читать<Image
                        src={'/arrow.svg'}
                        alt={'cart image'}
                        width={20}
                        height={20}
                    /></span></a>
                </div>
            </div>
        </div>)

}