// const container = document.getElementsByClassName('scroll')[0];
// const div2 = document.querySelector('.check-container');

// let idArray = JSON.parse(localStorage.getItem('idn')) || [];

// function scrollDiv() {
//   div2.style.display = 'flex';
//   container.style.transition = 'transform 0.5s ease-in-out';
//   container.style.transform = 'translateX(-100vw)';
// }

// Simplified formnew function
// function formnew() {
//   const id = document.getElementById("input-field").value;
// console.log(id);
//   idArray.push(id);   
  // updateLs();           
//   setTimeout(() => {
//     window.location.href = 'form.html'; 
//   }, 600); 
// }

 // Function to update localStorage with the new ID array
// function updateLs() {
//   let idString = JSON.stringify(idArray);
//   localStorage.setItem('idn', idString);
//   const temp = localStorage.getItem('idn');
//   const finalId = JSON.parse(temp);
//   console.log(finalId);  // Optionally log the updated ID array
// }
function formnew() {
    setTimeout(() => {
    window.location.href = 'form.html'; 
  }, 600); 
}