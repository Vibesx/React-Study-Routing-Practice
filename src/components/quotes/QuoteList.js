import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
};

const QuoteList = (props) => {
	//const match = useRouteMatch();
	const history = useHistory();
	const location = useLocation();

	// this is a built-in constructor in the browser, not dependent on JS/React/etc
	// location will be an object with different properties and search will hold the query params
	// the below code will create an object with key-value pairs, in which the key will be the name of the query param and value will be its value
	// ex: ?sort=asc will result in { sort: 'asc' }
	const queryParams = new URLSearchParams(location.search);

	const isSortingAscending = queryParams.get("sort") === "asc";

	const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

	const changeSortingHandler = () => {
		// we can also use location.pathname here
		// history.push(
		// 	`${match.path}?sort=${(isSortingAscending ? "desc" : "asc")}`
		// );

		// alternative to string locations:
		history.push({
			pathname: location.pathname,
			search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
		});
	};

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>
					Sort {isSortingAscending ? "Descending" : "Ascending"}
				</button>
			</div>
			<ul className={classes.list}>
				{sortedQuotes.map((quote) => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
