const localStorageMiddleware = () => (next) => (action) => {
    if (action.type === 'LOGOUT') {
        localStorage.removeItem('persist:root');
        localStorage.removeItem('roles');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
    return next(action);
};

export default localStorageMiddleware;

