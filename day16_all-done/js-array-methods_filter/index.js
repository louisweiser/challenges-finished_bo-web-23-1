console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((cards) => {
  return cards.id === "2";
});

const allCardsWith3Tags = cards.filter((cards) => {
  return cards.tags.length === 3;
});

const allCardsThatAreNotBookmarked = cards.filter((cards) => {
  return !cards.isBookmarked;
});

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((cards) => {
  return cards.tags === "html" || cards.isBookmarked;
});

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
