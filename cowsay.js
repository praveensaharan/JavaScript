const cowsay = require("cowsay");
const Quote = require("inspirational-quotes");
//console.log(Quote.getQuote());
const text = Quote.getQuote().text;
console.log(
  cowsay.say({
    text: text,
    e: "XX",
    T: "U ",
  })
);
