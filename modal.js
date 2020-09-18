//open modal
var openModal = document.getElementById('modalBtn');
//Close Modal
var closeModal = document.querySelector('.closeBtn');
//modal page
var modal = document.getElementById('simpleModal');

//Event Listener for Open Modal
openModal.addEventListener('click', clickOpen);

function clickOpen(){
    modal.style.display = 'block';

}

//Event Listener for Close modal
closeModal.addEventListener('click', closed);

function closed(){
    modal.style.display = 'none';
}

//Event Listener for closing modal when outside the modal is clicked
window.addEventListener('click', outSide);

function outSide(e){
   if (e.target == modal){
       modal.style.display = 'none';
   }
}