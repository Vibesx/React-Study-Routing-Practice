import React, { Suspense } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
// import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => {
	import("./pages/NewQuote");
});

function App() {
	return (
		<Layout>
			<div>
				<Suspense
					fallback={
						<div className="centered">
							<LoadingSpinner></LoadingSpinner>
						</div>
					}
				>
					<Switch>
						<Route path="/" exact>
							<Redirect to="/quotes"></Redirect>
						</Route>
						<Route path="/quotes" exact>
							<AllQuotes></AllQuotes>
						</Route>
						<Route path="/quotes/:quoteId">
							<QuoteDetail></QuoteDetail>
						</Route>
						<Route path="/new-quote">
							<NewQuote></NewQuote>
						</Route>
						{/* switch component works like a regular switch: if no case is matched, it defaults to the last "case" (route in our case)
					by setting path to * we tell React that all other paths other than the ones declared above should lead to what is inside this Route */}
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
				</Suspense>
			</div>
		</Layout>
	);
}

export default App;
