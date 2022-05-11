import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage"
import SyntaxPage from "./pages/Syntax/SyntaxPage";
import SemanticPage from "./pages/Semantic/SemanticPage";
import SyntaxCard from "./pages/Syntax/SyntaxCard";
import MorphPage from "./pages/Morph/MorphPage";
import {AuthContext} from "./index";
import LoginPage from "./pages/Login/LoginPage";
import SemanticCard from "./pages/Semantic/SemanticCard";
import NotActivated from "./pages/NotActivated";

export const useRoutes = () => {
    const {authStore} = useContext(AuthContext);

    if (authStore.isAuth && !authStore.user.isActivated) {
        return (
            <Routes>
                <Route path="/" element={<NotActivated email={authStore.user.email}/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        );
    }

    if (authStore.isAuth && authStore.user.isActivated) {
        return (
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/syntax" element={<SyntaxPage/>}/>
                <Route path="/syntax/:id" element={<SyntaxCard/>}/>
                <Route path="/semantic" element={<SemanticPage/>}/>
                <Route path="/semantic/:id" element={<SemanticCard/>}/>
                <Route path="/morph" element={<MorphPage/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
    );
};