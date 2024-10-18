// Quote
const quotes = [
  "I LOVE YOU RAFFY ROSS QUIJANO MWAH MWAH ",
  "Mahal ko ikaw Raffy ",
  "KIss ko babs bi  ",
  "Ang Babskie ng BUHAY ko",
  "TARA S3GGS",
  "WAG KA NA AMG OVERTHINK MAHAL NANDITO KA SA ISIP AT PUSO KO UWUUU ",
  "Ikaw aking Pangarap ",
  "Dito Ka Lang sa Tabi ko. kaog buko ",
];
const authors = ["Harry Fritz"];

function newQuote() {
  let randomQuotes = Math.floor(Math.random() * quotes.length);
  let randomAuthors = Math.floor(Math.random() * authors.length);
  let randomQuote = quotes[randomQuotes];
  let randomAuthor = authors[randomAuthors];

  document.getElementById("quoteText").innerHTML = "“" + randomQuote + "”";
  document.getElementById("author").innerHTML = "– " + randomAuthor;
}

// Github Account
function gitHub() {
  window.location.href = "https://github.com/CoderHarry738";
}
