import jwtDecode from "jwt-decode";

const initialState = {
    isAuthenticated: false,
    token: null,
    roles: [],
    isAdmin: false,
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            const {token} = action.payload;
            const decodedToken = jwtDecode(token);

            let isAdmin = false;
            if (decodedToken && decodedToken.roles) {
                const roles = Array.isArray(decodedToken.roles)
                ? decodedToken.roles : [decodedToken.roles];

                isAdmin = roles.includes('ROLE_ADMIN');
            }
            return {
                isAuthenticated: true,
                token,
                roles: decodedToken ? decodedToken.roles : [],
                isAdmin,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default userReducer;