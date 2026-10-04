export function SourceBadges({ sources }: { sources: string[] }) {
  return <div className="source-row" aria-label="Nguồn">{sources.map((source) => <span className="source-badge" key={source}>{source}</span>)}</div>;
}
