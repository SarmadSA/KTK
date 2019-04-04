import History from '../utils/History';


export const goToPage = (path) =>{
    History.push(path);
};

export const getJWT = (jwtName) =>{
    return localStorage.getItem(jwtName);
};

export const removeJWT = (jwtName) =>{
    return localStorage.removeItem(jwtName);
};

export const isExpiredToken = (token) =>{
    return (getTokenExpirationDate(token) < (Date.now() / 1000));
};

const getTokenExpirationDate = (token) =>{
    return parseJwt(token).exp;
};

const parseJwt = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
};