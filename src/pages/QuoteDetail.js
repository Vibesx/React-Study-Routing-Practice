import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
const DUMMY_QUOTES = [
	{ id: "q1", author: "Ion", text: "Learning React is awesome!" },
	{ id: "q2", author: "Maria", text: "Learning React is great!" },
];

const QuoteDetail = () => {
	// useRouteMatch is similar to useLocation, but it returns the path as we define it in the Router
	const match = useRouteMatch();
	const params = useParams();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
	console.log(quote);
	if (!quote) {
		return <p>No quote found!</p>;
	}

	return (
		// alternatively, since we're defining a route here, not a link, you can also use path='/quotes/:quoteId/comments'
		<Fragment>
			<HighlightedQuote
				text={quote.text}
				author={quote.author}
			></HighlightedQuote>
			<Route path={`${match.path}`} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}comments`}>
						Load Comments
					</Link>
				</div>
			</Route>

			<Route path={`${match.path}/comments`}>
				<Comments></Comments>
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
