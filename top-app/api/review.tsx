import {API} from "@/api/api";
import {IReviewFormInterface, IReviewResponse} from "@/components/ReviewForm/ReviewForm.interface";

export const sendForm = async (formData:IReviewFormInterface, productId:string): Promise<IReviewResponse> => {
    const res = await fetch(API.review.createDemo, {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({...formData, productId}),
        next: {revalidate: 10}
    });
    return res.json();
}
