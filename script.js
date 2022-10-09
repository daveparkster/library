const ADD_BUTTON = document.querySelector('.add');
const MODAL_BACKGROUND = document.querySelector('.modal-background');

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

