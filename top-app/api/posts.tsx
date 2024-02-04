import {API} from "@/api/api";
import {PostsModel} from "@/interfaces/post.interface";


export const getPosts = async (): Promise<PostsModel[]> => {
    const resp = await fetch(API.posts.find, {
        next: {revalidate: 30}
    });
    if (!resp.ok) throw new Error()
    return resp.json();
}

export const getPost = async (postId: string): Promise<PostsModel> => {
    const resp = await fetch(API.posts.find + '/' + postId, {
        next: {revalidate: 30}
    });
    if (!resp.ok) throw new Error()
    return resp.json();
}