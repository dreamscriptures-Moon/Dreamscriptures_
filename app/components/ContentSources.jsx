export function normalizeSources(sources) {
  if (!Array.isArray(sources)) return [];

  return sources.filter((source) => source && source.title).map((source) => ({
    title: source.title,
    author: source.author || "",
    publication: source.publication || "",
    url: source.url || "",
    sourceType: source.sourceType || "",
    publicationDate: source.publicationDate || "",
    citationNote: source.citationNote || source.context || "",
  }));
}

export default function ContentSources({ sources, title = "Sources and further reading" }) {
  const items = normalizeSources(sources);
  if (!items.length) return null;

  return (
    <section className="border-t border-[#ded7cd] py-16" aria-labelledby="content-sources-heading">
      <h2 id="content-sources-heading" className="font-serif text-3xl">{title}</h2>
      <ol className="mt-7 space-y-5">
        {items.map((source, index) => (
          <li key={`${source.title}-${index}`} className="border-l border-[#b89b62] pl-5 leading-7 text-[#686159]">
            <p>
              {source.author && <span>{source.author}. </span>}
              {source.url ? <a href={source.url} target="_blank" rel="noreferrer" className="text-[#735f35] underline underline-offset-4">{source.title}</a> : <cite className="not-italic">{source.title}</cite>}
              {source.publication && <span>. {source.publication}</span>}
              {source.publicationDate && <span>, {source.publicationDate}</span>}.
            </p>
            {(source.sourceType || source.citationNote) && <p className="mt-1 text-sm">{[source.sourceType, source.citationNote].filter(Boolean).join(" · ")}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}
