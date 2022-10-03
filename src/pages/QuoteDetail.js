import { useParams } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Max',
    text: 'Learning react is fun',
  },
  {
    id: 'q2',
    author: 'Maximillian',
    text: 'Learning react is great',
  },
];

const QuoteDetail = () => {
  const { quoteId } = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
    </>
  );
};

export default QuoteDetail;
