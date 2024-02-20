import {JSX} from "react";
import {getPost, getPosts} from "@/api/posts";
import Image from "next/image";
import {Like} from "@/components";
import {withLayout} from "@/layout/Layout";
import styles from "./Post.module.css";

export const generateStaticParams = async () => {
    const posts = await getPosts()
    return posts.map(post => ({id: post.id.toString()}));
};

const Poster = async ({params}: { params: { id: string } }): Promise<JSX.Element> => {
    const post = await getPost(params.id)
    return (
        <div className={styles.wrapper}>
            <h1>{post.title}</h1>
            <div className={styles.tag}>
                <div><span>Front - end</span></div>
                <div><span>·</span></div>
                <div><span>1 месяц назад</span></div>
                <div><span>·</span></div>
                <div><span>3 минуты</span></div>
                <div><span>·</span></div>
                <Like/></div>
            <Image
                src={'/cart_img.png'}
                alt={'cart image'}
                width={687}
                height={440}
            />
            <div className={styles.post_body}>
                <p className={styles.post_text}>{post.body}</p>
            </div>
            <div className={styles.post_body}>
                <h2>Что такое грид?</h2>
                <span
                    className={styles.post_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, fugit.</span>
            </div>
            <div className={styles.post_middle}>
                <span>Понравилось? Жми</span>
                <Like showCircle={true}/>
            </div>
            <div>
                <h2>Комментарйи</h2>
                <div className={styles.post_comment_text}>
                    <span>Василий Пупкин</span>
                    <span>·</span>
                    <span>pupkin@gmail.com</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ducimus nobis odio quos
                    tempora!</p>
            </div>

            <form>
                <input type="text" placeholder={'Имя'}/>
                <input type="text" placeholder={'Комментарий'}/>
                <button>Отправить</button>
            </form>

        </div>)
}

export default withLayout(Poster);