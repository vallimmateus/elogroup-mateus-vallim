import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Header from "./components/Header/index";

const Routes = () => {
	return (
		<BrowserRouter>
			<Route component={LoginPage} path="/" exact />
			<Route path="/home">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						width: "100vw",
						height: "100vh",
					}}
				>
					<Header />
					<Home style={{ flex: "1" }} />
				</div>
			</Route>
		</BrowserRouter>
	);
};

export default Routes;
