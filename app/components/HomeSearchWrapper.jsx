import HomeSearch from "./HomeSearch";

export default function HomeSearchWrapper({ showSuggestions = true }) {
  return <HomeSearch showSuggestions={showSuggestions} />;
}
