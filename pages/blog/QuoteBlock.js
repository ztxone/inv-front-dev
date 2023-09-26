import React from "react";
import ReactMarkdown from "react-markdown";

export const QuoteBlock = (quote) => {
  return quote?.quote ? (
    <ReactMarkdown>{quote.quote}</ReactMarkdown>
  ) : (
    <ReactMarkdown>{quote}</ReactMarkdown>
  );
};

export default QuoteBlock;
