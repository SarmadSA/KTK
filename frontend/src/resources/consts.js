export const CARD_PER_ROW = 4;
export const CARD_PER_P_ROW = 3;
export const AUTHENTICATION_JWT = "token";

//Pages
export const EXPLORE_PAGE = '/explore';
export const SIGNUP_PAGE = '/signup';
export const PROFILE_PAGE = '/profile';

//API
const HOST = "http://localhost:8080";
export const AUTHENTICATION_API = HOST + '/api/authentication';
export const GET_LISTINGS_API = HOST + '/listing/list';
export const UPLOAD_FILE_API = HOST + '/listing/uploadFile';
export const CREATE_LISTING_API = HOST + '/listing/create';
export const CREATE_USER_API = HOST + '/user/add';