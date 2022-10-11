const ADD_BUTTON = document.querySelector('.add');
const MODAL_BACKGROUND = document.querySelector('.modal-background');
const FORM = document.querySelector('form');


/*upon clicking the addbutton, the modal appears on the screen*/
ADD_BUTTON.addEventListener("click", () => {
  MODAL_BACKGROUND.style.display = "flex";
}); 

/*when the user clicks outside of form, the form 
  disappears*/
window.addEventListener("click", (event) => {
  if(event.target == MODAL_BACKGROUND) {
    MODAL_BACKGROUND.style.display = "none";
  }
});

/*where user input will be stored*/
let myLibrary = [];

FORM.addEventListener('submit', getForm);

function getForm(e) {
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked; // change to checked property

  console.log(read);

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  /*save the currentBook into the variable */
  let currentBook = myLibrary[myLibrary.length -1]; 

  /*creates a new book into the dom*/
  addBookToLibrary(currentBook);

  MODAL_BACKGROUND.style.display = "none";
  FORM.reset();
}

/*Object constructor*/
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/*adds the book onto the page*/
function addBookToLibrary(object) {
  const CARDS = document.querySelector('.cards');
  let bookContainer = document.createElement('div');

  CARDS.appendChild(bookContainer).classList.add('sub-books'); //adds the div and attaches class Name
  
  let currentBook = document.querySelectorAll('.sub-books')[document.querySelectorAll('.sub-books').length - 1];

  /*creates section for books*/
  let titleDom = document.createElement('div'); 
  let authorDom = document.createElement('div');
  let pagesDom = document.createElement('div');
  let readButtonDom = document.createElement('button');
  let removeButtonDom = document.createElement('button');

  /*adds the sections and class name to the current book*/
  currentBook.appendChild(titleDom).classList.add('title');
  currentBook.appendChild(authorDom).classList.add('author');
  currentBook.appendChild(pagesDom).classList.add('pages');
  currentBook.appendChild(readButtonDom).classList.add('read-button');
  currentBook.appendChild(removeButtonDom).classList.add('deletion');

  /*extracts dom title,author,pages, read, and deletion*/
  let currentTitle = currentBook.querySelector('.title');
  let currentAuthor = currentBook.querySelector('.author');
  let currentPages = currentBook.querySelector('.pages');
  let currentRead = currentBook.querySelector('.read-button');
  let currentDeletion = currentBook.querySelector('.deletion');

  /*insert text*/
  currentTitle.textContent = `'${object['title']}'`;
  currentAuthor.textContent = object['author'];
  currentPages.textContent = object['pages'];
  currentRead.textContent = readBook(object);
  currentDeletion.textContent = 'Remove';
}

/*helper function to determine read button's status*/
function readBook(object) {
  if(object['read'] === true) {
    return 'Read';
  } else {
    return 'Not Read';
  }
}

