import axios from 'axios';

export const SET_USER_CREDENTIALS = 'set_user_credentials';
export const RESET_USER_CREDENTIALS = 'reset_user_credentials';
export const UPLOAD_FILE_TO_SERVER = 'upload_file_to_server';
export const UPLOAD_GAME_TO_SERVER = 'upload_game_to_server';
export const SEND_USER_INFORMATION = 'send_user_information';
export const GET_GAMES_LIST = 'get_games_list';
export const ADD_GAME_TO_CART = 'add_game_to_cart';
export const REMOVE_GAME_FROM_CART = 'remove_game_from_cart';
export const REMOVE_ALL_GAMES_FROM_CART = 'remove_all_games_from_cart';
export const POST_CHECKOUT = 'post_checkout';
export const GET_GAMES_WITH_FILTER = 'get_games_with_filter';

const ROOT_URL = process.env.REACT_APP_API_ROOT_URL;
const PAGSEGURO_CHECKOUT = process.env.REACT_APP_PAGSEGURO_CHECKOUT;
const PAGSEGURO_EMAIL = process.env.REACT_APP_PAGSEGURO_EMAIL;
const PAGSEGURO_TOKEN = process.env.REACT_APP_PAGSEGURO_TOKEN

export function setUserCredentials(params) {
    return {
        type: SET_USER_CREDENTIALS,
        payload: params
    }
}

export function resetUserCredentials() {
    return {
        type: RESET_USER_CREDENTIALS,
        payload: {}
    }
}

export function postUserInformation(user) {
    let request = `${ROOT_URL}/api/Users`
    axios.post(request, user);
    return {
        type: SEND_USER_INFORMATION,
        payload: {}
    }
}

export function uploadGameToServer(gameUploadDto, successHandler, errorHandler) {
    let request = `${ROOT_URL}/api/Games`;
    axios.post(request, gameUploadDto)
        .then(result => successHandler(result))
        .catch(error => errorHandler(error));
    return {
        type: UPLOAD_GAME_TO_SERVER,
        payload: {}
    }
}

export function uploadFileToServer(gameId, file, uploadProgressHandler) {
    let formData = new FormData();
    formData.append('file', file);
    axios(`${ROOT_URL}/api/File/${gameId}`, {
        method: 'POST',
        data: formData,
        onUploadProgress: (progressEvent) => {
            uploadProgressHandler(progressEvent);
        }
    });
    return {
        type: UPLOAD_FILE_TO_SERVER,
        payload: {}
    }
}

export function getGamesList(successHandler, errorHandler) {
    let request = `${ROOT_URL}/api/Games`
    axios.get(request)
        .then(result => successHandler(result.data))
        .catch(error => errorHandler(error));
    return {
        type: GET_GAMES_LIST,
        payload: {}
    }
}

export function addGameToCart(gameId) {
    return {
        type: ADD_GAME_TO_CART,
        payload: gameId
    }
}

export function removeGameFromCart(gameId) {
    return {
        type: REMOVE_GAME_FROM_CART,
        payload: gameId
    }
}

export function removeAllGamesFromCart() {
    return {
        type: REMOVE_ALL_GAMES_FROM_CART,
        payload: []
    }
}

export function getGamesWithFilter(filterDto, successHandler) {
    let request = `${ROOT_URL}/api/Games/Filters`
    axios.post(request, filterDto)
        .then(result => successHandler(result.data));
    return {
        type: GET_GAMES_LIST,
        payload: {}
    }
}

export function postCheckout2() {
    let params = `email=${PAGSEGURO_EMAIL}&token=${PAGSEGURO_TOKEN}&currency=BRL&itemId1=0001&itemDescription1=Produto PagSeguroI&itemAmount1=99999.99&itemQuantity1=1&itemWeight1=1000&shippingAddressRequired=false`;
    let request = `${PAGSEGURO_CHECKOUT}${params}`;
    axios.post(request, params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=ISO-8859-1', "Access-Control-Allow-Origin": "https://sandbox.pagseguro.uol.com.br" } })
        .then(result => console.log(result))
        .catch(error => console.log(error))
    return {
        type: POST_CHECKOUT,
        payload: {}
    }
}

export function postCheckout() {
    let params = new URLSearchParams();
    params.append('email', PAGSEGURO_EMAIL);
    params.append('token', PAGSEGURO_TOKEN);
    params.append('currency', 'BRL');
    params.append('itemId1', '0001');
    params.append('itemDescription1', 'Produto PagSeguro1');
    params.append('itemAmount1', '10.99');
    params.append('itemQuantity1', '1');
    params.append('itemWeight1', '1');
    params.append('shippingAddressRequired', 'false');
    let request = `${PAGSEGURO_CHECKOUT}email=${PAGSEGURO_EMAIL}&token=${PAGSEGURO_TOKEN}`;
    axios.post(request, params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=ISO-8859-1', "Access-Control-Allow-Origin": "https://sandbox.pagseguro.uol.com.br" } })
        .then(result => console.log(result))
        .catch(error => console.log(error))
    return {
        type: POST_CHECKOUT,
        payload: {}
    }
}