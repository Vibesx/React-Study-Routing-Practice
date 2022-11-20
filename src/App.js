import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

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
					<Route path="/quotes/:quoteId" exact>
						<QuoteDetail></QuoteDetail>
					</Route>
					<Route path="/new-quote">
						<NewQuotes></NewQuotes>
					</Route>
					{/* switch component works like a regular switch: if no case is matched, it defaults to the last "case" (route in our case)
					by setting path to * we tell React that all other paths other than the ones declared above should lead to what is inside this Route */}
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
			</div>
		</Layout>
	);
}

export default App;
