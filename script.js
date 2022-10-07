const ADD_BUTTON = document.querySelector('.add');
const MODAL_BACKGROUND = document.querySelector('.modal-background');

/*upon clicking the addbutton, the modal appears on the screen*/
ADD_BUTTON.addEventListener("click", () => {
  MODAL_BACKGROUND.style.display = "block";
}); 

