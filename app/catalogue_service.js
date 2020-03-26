// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length;
}

function checkBook(book) {
  return catalogue.some(title => title === book);
}

function countBooksByFirstLetter(letter) {
  const x = catalogue.map(x => x[0]).join("");
  let total = 0;
  for (let k = 0; k < x.length; k++) {
    if (x.charAt(k) === letter) {
      total += 1;
    }
  }
  return total;
}

function countBooksByKeyword(keyword) {
  return (
    catalogue
      .join("")
      .toLowerCase()
      .split(keyword).length - 1
  );
}

function getBooksByAuthor(author) {
  const newArr = [];
  //split a string on two parts before "by" and after
  for (let i = 0; i < catalogue.length; i++) {
    let toSaveHere = catalogue[i].split(" by ");
    //make an object key-value pairs with title: "" and author: ""
    newArr.push(toSaveHere);
  }

  let resultArr = [];

  for (var j = 0; j < newArr.length; j++) {
    if (newArr[j][1] === author) {
      resultArr.push(`${newArr[j][0]} by ${author}`);
    }
  }
  return resultArr;
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
