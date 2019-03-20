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