import {router} from "../routers";
import React from "react";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {router.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component />}/>
            )}
        </Routes>
    );
};

export default AppRouter;