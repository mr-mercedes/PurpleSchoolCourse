import {API} from "@/api/api";
import {PostsModel} from "@/interfaces/post.interface";
import {CommentsModel} from "@/interfaces/comments.interface";
import {IPostFormInterface} from "@/interfaces/postForm.interface";


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

export const patchPost = async (postId: string, formData: IPostFormInterface): Promise<PostsModel> => {
    const resp = await fetch(API.posts.find + '/' + postId, {
        next: {revalidate: 30},
        method: 'PATCH',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({...formData})
    });
    if (!resp.ok) throw new Error()
    return resp.json();
}