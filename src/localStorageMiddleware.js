const localStorageMiddleware = () => (next) => (action) => {
    if (action.type === 'LOGOUT') {
        localStorage.removeItem('persist:root');
        localStorage.removeItem('roles');
        localStorage.removeItem('token');
    }
    return next(action);
};

export default localStorageMiddleware;

