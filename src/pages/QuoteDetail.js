import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
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
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className='centered'>
          <Link to={`${match.url}/comments`} className='btn--flat'>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
