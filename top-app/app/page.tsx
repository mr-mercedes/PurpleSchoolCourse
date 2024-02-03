import {PostCart} from "@/components";
import {withLayout} from "@/layout/Layout";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.content}>
            <PostCart
                tag={'Front - end · 1 месяц назад '}
                title={'Как работать с CSS Grid'}
                text={'Грид-раскладка(CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'}
                last_change={'3 минуты'}
            />
            <PostCart
                tag={'Front - end · 1 месяц назад '}
                title={'Как работать с CSS Grid'}
                text={'Грид-раскладка(CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'}
                last_change={'3 минуты'}
            />
            <PostCart
                tag={'Front - end · 1 месяц назад '}
                title={'Как работать с CSS Grid'}
                text={'Грид-раскладка(CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'}
                last_change={'3 минуты'}
            />
        </div>
    );
};
export default withLayout(Home);