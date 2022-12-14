import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
	// useRouteMatch is similar to useLocation, but it returns the path as we define it in the Router
	const match = useRouteMatch();
	const params = useParams();

	const { quoteId } = params;

	const {
		sendRequest,
		status,
		data: loadedQuote,
		error,
	} = useHttp(getSingleQuote, true);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner></LoadingSpinner>
			</div>
		);
	}

	if (error) {
		return <p className="centered">{error}</p>;
	}

	if (!loadedQuote.text) {
		return <p>No quote found!</p>;
	}

	return (
		// alternatively, since we're defining a route here, not a link, you can also use path='/quotes/:quoteId/comments'
		<Fragment>
			<HighlightedQuote
				text={loadedQuote.text}
				author={loadedQuote.author}
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
