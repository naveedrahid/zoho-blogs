import { create } from "apisauce";

const apiSauceInstance = create({
    baseURL: process.env.REACT_APP_API_URL,
});

const get = (url, queryParams) => {
    const response = apiSauceInstance.get(url,queryParams);
    return response;
}
const post = (url, data) => {
    const response = apiSauceInstance.post(url, data);
    return response;
}
const put = (url, data) => {
    const response = apiSauceInstance.put(url,data);
    return response;
}
const patch = (url, data) => {
    const response = apiSauceInstance.patch(url,data);
    return response;
}
const deleteRequest = (url, data) => {
    const response = apiSauceInstance.delete(url,data);
    return response;
}

export const ApiServices = {
    get,
    post,
    put,
    patch,
    delete: deleteRequest,
}