var btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_1bojjxi';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
//humbberger show
document.getElementById("humburger").addEventListener("click", function() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show"); // Toggle the 'show' class to control display
});
///scrooll trigger time
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".card", {
//   x: 0, // or y: 0 if it's vertical
//   scrollTrigger: {
//     trigger: ".card",
//     scroller: "body", // Optional if you're scrolling the entire page
//     start: "top 50%", // Adjust the start position if needed
//     end: "top 100%",   // Adjust the end position if needed
//     scrub: 5,         // Smooth scrubbing effect
//   },
// });
// //testing trigger animation
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".strolltrigger3", {
//   x: 0, // or y: 0 if it's vertical
//   scrollTrigger: {
//     trigger: ".strolltrigger3",
//     scroller: "body", // Optional if you're scrolling the entire page
//     start: "top 100%", // Adjust the start position if needed
//     end: "top 100%",   // Adjust the end position if needed
//     scrub: 5,         // Smooth scrubbing effect
//   },
// });
// gsap.to(".card",{
//   x:0,
// })
