const quotes = [
  {
    source: null,
    text: `As you kiss your son good night, remember he may be dead in the morning.`,
  },
];

export default quotes.map((quote) => ({
  ...quote,
  author: "Epictetus",
}));
