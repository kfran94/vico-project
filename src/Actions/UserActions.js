export const loginSuccess = (token, roles) => {

    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            token,
            roles
        }
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};
