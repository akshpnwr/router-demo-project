import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    // localStorage.setItem(quoteData.author, quoteData.text);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
