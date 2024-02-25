import React, {JSX} from "react";
import {getPost, getPostComments, getPosts} from "@/api/posts";
import {withLayout} from "@/layout/Layout";
import styles from "../Post.module.css";
import {Comments, PosterBody, PosterHead, PostForm} from "@/components";

export const generateStaticParams = async () => {
    const posts = await getPosts();
    return posts.map(post => ({id: post.id.toString()}));
};

const Poster = async ({params}: { params: { id: string } }): Promise<JSX.Element> => {
    const post = await getPost(params.id);
    const comments = await getPostComments(params.id);
    return (
        <div className={styles.wrapper}>
            <PosterHead postTitle={post.title}/>
            <PosterBody postBody={post.body}/>
            <Comments comments={comments}/>
            <PostForm postId={params.id}/>
        </div>);
};

export default withLayout(Poster);