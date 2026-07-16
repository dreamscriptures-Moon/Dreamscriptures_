import quotes from "@/data/quotes";
import RandomQuoteButton from "./RandomQuoteButton";

export default function RandomQuote() {
  const quotesArray = Array.isArray(quotes) ? quotes : quotes?.quotes || [];
  const quote = quotesArray[0] || "Dreams are the whispers of the soul.";

  return (
    <div className="text-center">
      <p
        id="homepage-random-quote"
        aria-live="polite"
        className="font-serif italic text-3xl max-w-3xl mx-auto transition-opacity duration-300"
      >
        {quote}
      </p>
      <RandomQuoteButton initialQuote={quote} />
    </div>
  );
}
