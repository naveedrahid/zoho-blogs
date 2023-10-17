import { ApiServices } from "../utils/api.services"

const userServiceUrl = {
    login: '/login',
}

const login = (data) => {
    const response = ApiServices.post(userServiceUrl.login, data);
    return response;
}

export const UserServices = {
    login,
}