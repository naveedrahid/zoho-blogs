import { ApiServices } from "../utils/api.services"

const getPostUrl = {
    postUrl: '/posts',
}

const getPostsdata = () => {
    const response = ApiServices.get(getPostUrl.postUrl);
    return response;
}

export const postServices = {
    getPostsdata,
}