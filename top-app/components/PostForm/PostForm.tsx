"use client"
import {PostFormProps} from "@/components/PostForm/PostForm.props";
import {JSX, useState} from "react";
import {Button, Input, Textarea} from "@/components";
import {IPostFormInterface} from "@/interfaces/postForm.interface";
import {useForm} from "react-hook-form";
import {patchPost} from "@/api/posts";


export const PostForm = ({postId, className, ...props}: PostFormProps): JSX.Element => {
    const {register, control, handleSubmit, formState: {errors}, reset} = useForm<IPostFormInterface>();
    const [commentResp, setCommentResp] = useState<{name:string, comment:string}>({name:'', comment:''})
    const onSub = async (formData: IPostFormInterface) => {
        try {
            const resp = await patchPost(postId, formData);
            if (resp) setCommentResp({name:resp.name, comment:resp.comment})
            console.log(resp)
            reset();
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <>
            <form
                onSubmit={handleSubmit(onSub)}
                className={className} {...props}>
                <Input
                    placeholder={'Имя'}
                    error={errors.name}
                    {...register('name', {required: {value: true, message: 'Введите свое имя'}})}
                />
                <Textarea
                    placeholder={'Комментарий'}
                    error={errors.comment}
                    {...register('comment', {required: {value: true, message: 'Введите комментарий'}})}
                />
                <Button appearance={"black"}>Отправить</Button>
            </form>
        </>

    )
}