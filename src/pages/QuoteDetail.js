import { Link, Route, useParams } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
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
      <Route path={`/quotes/${quoteId}`} exact>
        <div className='centered'>
          <Link to={`/quotes/${quoteId}/comments`} className='btn--flat'>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
