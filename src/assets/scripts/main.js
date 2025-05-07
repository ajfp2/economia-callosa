/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import { render } from './render';
import { contactJS } from './contact';

/**
 * Write any other JavaScript below
*/





document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navmenu');        
  links.forEach(link => {
      link.addEventListener('click', event => {
        links.forEach(li => {
          li.classList.remove('active');
        });
        const name = link.getAttribute('data-url');
        event.preventDefault();                        
        link.classList.add('active');
        render(name);
        //if(name == 'contact') contactJS();
      });
  });

});


const handleSubmit = event => {
  event.preventDefault();
  console.log("Form Contact", event);

  const myForm = event.target;
  const formData = new FormData(myForm);

  const toastLiveExample = document.getElementById('liveToast');

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => {
      alert("Thank you for your submission")       
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastBootstrap.show();                        
    })
    .catch(error => {
      alert(error)
    });
};

// const form = document.querySelector("form");
// console.log("Contact JS", form);
// form.addEventListener("submit", handleSubmit);



