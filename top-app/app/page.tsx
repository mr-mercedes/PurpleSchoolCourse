import { PostCart } from '@/components';
import { withLayout } from '@/layout/Layout';
import styles from './Home.module.css';
import { getPosts } from '@/api/posts';

const Home = async () => {
    const posts = await getPosts();
    return (
        <div className={styles.content}>
            {posts.map((p) => (
                <PostCart
                    key={p.id}
                    tag={'Front - end · 1 месяц назад'}
                    title={p.title}
                    text={p.body}
                    last_change={'3 минуты'}
                    post_id={p.id}
                />
            ))}
        </div>
    );
};
export default withLayout(Home);
