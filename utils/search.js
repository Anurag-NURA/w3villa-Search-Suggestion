export const suggestedWords = (searchWord, dbwords, k = 3) => {
  dbwords.sort();

  const answer = [];
  let prefix = "";

  for (let char of searchWord) {
    prefix += char;

    const suggestions = [];

    for (let word of dbwords) {
      if (word.startsWith(prefix)) {
        suggestions.push(word);
      }

      if (suggestions.length === 3) break;
    }

    answer.push(suggestions);
  }

  //but the answer will have multiple objects (anwers) inside it
  //and we want the best one so

  return answer[answer.length - 1];
};
