import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
	const history = useHistory();

	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);

		// history has two ways of adding a page to the routing stash: push and replace
		// push allows users to go back
		// replace doesn't allow users to go back to previous page
		history.push("/quotes");
	};
	return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
};

export default NewQuotes;
