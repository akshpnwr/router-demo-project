import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  return (
    <>
      <h1>Quote detail</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
