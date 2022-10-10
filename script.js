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
  let read = document.querySelector('#read').value;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

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

