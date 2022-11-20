import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
const DUMMY_QUOTES = [
	{ id: "q1", author: "Ion", text: "Learning React is awesome!" },
	{ id: "q2", author: "Maria", text: "Learning React is great!" },
];

const QuoteDetail = () => {
	const params = useParams();

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

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
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments></Comments>
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;
