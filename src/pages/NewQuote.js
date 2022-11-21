import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
	const { sendRequest, status } = useHttp(addQuote);
	const history = useHistory();

	useEffect(() => {
		if (status === "completed") {
			// history has two ways of adding a page to the routing stash: push and replace
			// push allows users to go back
			// replace doesn't allow users to go back to previous page
			history.push("/quotes");
		}
	}, [status, history]);

	const addQuoteHandler = (quoteData) => {
		sendRequest(quoteData);
	};
	return (
		<QuoteForm
			isLoading={status === "pending"}
			onAddQuote={addQuoteHandler}
		></QuoteForm>
	);
};

export default NewQuotes;
