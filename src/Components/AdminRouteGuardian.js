import React from "react";
import { Outlet, Navigate } from 'react-router-dom';
import jwtDecode from "jwt-decode";

const AdminRouteGuardian = ({ children: Component, ...rest }) => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const isAdmin = decodedToken.roles.includes('ROLE_ADMIN');


        if (isAdmin) {
            return <Outlet/>;
        } else {
            return <Navigate to="/login"/>;;
        }

};

export default AdminRouteGuardian;
