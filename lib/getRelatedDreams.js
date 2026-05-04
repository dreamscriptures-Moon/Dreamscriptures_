export function getRelatedDreams(currentDream, dreams) {
  if (!currentDream) return [];

  const currentCategories = (currentDream.categories || []).map(c => c.toLowerCase());
  const currentWords = currentDream.slug.split("-");

  const scored = dreams
    .filter(d => d.slug !== currentDream.slug)
    .map(dream => {
      let score = 0;

      const dreamCategories = (dream.categories || []).map(c => c.toLowerCase());

      // 🔥 Strong signal
      const sharedCategories = dreamCategories.filter(cat =>
        currentCategories.includes(cat)
      );

      score += sharedCategories.length * 4;

      // 🔥 Smarter keyword match
      const words = dream.slug.split("-");
      const sharedWords = words.filter(word =>
        currentWords.includes(word) && word.length > 3
      );

      score += sharedWords.length * 2;

      return { dream, score };
    });

  const strongMatches = scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(item => item.dream);

  if (strongMatches.length === 0) {
    return dreams
      .filter(d => d.slug !== currentDream.slug)
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
  }

  return strongMatches;
}