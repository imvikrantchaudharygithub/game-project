// tokenService.js

let localStorageAvailable = false;

if (typeof window !== 'undefined' && window.localStorage) {
  localStorageAvailable = true;
}

const setToken = (token:any) => {
  if (localStorageAvailable) {
    localStorage.setItem('accessToken', token);
  }
};

const getToken = () => {
  if (localStorageAvailable) {
    return localStorage.getItem('accessToken');
  }
  return null;
};
const clearTokenlocal = () => {
  if (localStorageAvailable) {
    localStorage.removeItem('accessToken');
  }
};
export default {setToken,getToken,clearTokenlocal};
