export interface PostsModel extends PatchResp{
    userId: string
    id: string
    title: string
    body: string
}

interface PatchResp {
    name:string;
    comment:string;
}