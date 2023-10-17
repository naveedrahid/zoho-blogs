import { ApiServices } from "../utils/api.services";

const getCatUrl = {
    catUrl:'/categories',
}

const getCatData = () =>{
    const response =  ApiServices.get(getCatUrl.catUrl);
    return response;
}

export const categoriesServices = {
    getCatData,
}