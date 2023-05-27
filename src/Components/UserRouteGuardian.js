import React from "react";
import { Outlet, Navigate } from 'react-router-dom';
import jwtDecode from "jwt-decode";

const UserRouteGuardian = ({ children: Component, ...rest }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/connected" />;
    }

    const decodedToken = jwtDecode(token);
    const isConneted = decodedToken.roles.includes('ROLE_USER');

    if (isConneted) {
        return <Outlet />;
    } else {
        return <Navigate to="/connected" />;
    }
};

export default UserRouteGuardian;
