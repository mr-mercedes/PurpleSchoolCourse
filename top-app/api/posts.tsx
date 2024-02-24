import {API} from "@/api/api";
import {PostsModel} from "@/interfaces/post.interface";
import {CommentsModel} from "@/interfaces/comments.interface";


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
export const getPostComments = async (postId: string): Promise<CommentsModel[]> => {
    const resp = await fetch(`${API.posts.find}/${postId}/comments`, {
        next: {revalidate: 30}
    });
    if (!resp.ok) throw new Error()
    return resp.json();
}


export const getComment = async (postId: string):Promise<CommentsModel[]> => {
    const resp = await fetch(API.comments.find + '/' + postId, {
        next: {revalidate: 30}
    });
    if (!resp.ok) throw new Error()
    return resp.json();
}

export const getComments = async ():Promise<CommentsModel[]> => {
    const resp = await fetch(API.comments.find, {
        next: {revalidate: 30}
    });
    if (!resp.ok) throw new Error()
    return resp.json();
}