import axios from "../utils/CustomizeAxios";

const postNewuser = (email, Password, userName, Role, image) => {
    const form = new FormData();
    form.append('email', email);
    form.append('password', Password);
    form.append('username', userName);
    form.append('role', Role);
    form.append('userImage', image);
    return axios.post('api/v1/participant', form);
}
const getallUser = () => {
    return axios.get('api/v1/participant/all');
}
const putUpdateUser = (id, userName, Role, image) => {
    const form = new FormData();
    form.append('id', id);
    form.append('username', userName);
    form.append('role', Role);
    form.append('userImage', image);
    return axios.put('api/v1/participant', form);
}
const DeleteUser = (id) => {
    return axios.delete('api/v1/participant', { data: { id: id } });//data => truyen data gi len sv //{ id: id } data gui di
}
export { postNewuser, getallUser, putUpdateUser, DeleteUser };
