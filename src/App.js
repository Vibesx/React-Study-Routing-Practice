import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<Layout>
			<div>
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
						<NewQuotes></NewQuotes>
					</Route>
				</Switch>
			</div>
		</Layout>
	);
}

export default App;
