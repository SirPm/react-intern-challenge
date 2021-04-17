import React from "react";
import { Switch, Route } from "react-router-dom";
import Activity from "./components/activity/Activity";
import Earn from "./components/earn/Earn";
import Home from "./components/home/Home";
import Market from "./components/market/Market";
import Wallet from "./components/wallet/Wallet";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/activity" exact component={Activity} />
				<Route path="/wallet" exact component={Wallet} />
				<Route path="/market" exact component={Market} />
				<Route path="/earn" exact component={Earn} />
			</Switch>
		</div>
	);
}

export default App;
