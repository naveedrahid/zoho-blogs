import moment from "moment/moment";

const convertDateFormate = (date) =>{
    if (!date) {
        return null;
    }
    return moment(date).format("MMMM D, [at] YYYY h:mm a");
}

export const UtilServices = {
    convertDateFormate,
}