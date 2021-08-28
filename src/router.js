import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

const Routes = () => {
	return (
		<BrowserRouter>
			<Route component={LoginPage} path="/" exact />
			<Route component={Home} path="/home" />
		</BrowserRouter>
	);
};

export default Routes;
