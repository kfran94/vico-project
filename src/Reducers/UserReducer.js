const initialState = {
    isAuthenticated: false,
    token: null,
    roles: [],
    isAdmin: false,
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                isAuthenticated: true,
                token: action.payload.token,
                roles: action.payload.roles,
                isAdmin: action.payload.roles.includes('ROLE_ADMIN'),
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default userReducer;