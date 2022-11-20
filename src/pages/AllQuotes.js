import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
	{ id: "q1", author: "Ion", text: "Learning React is awesome!" },
	{ id: "q2", author: "Maria", text: "Learning React is great!" },
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default AllQuotes;
