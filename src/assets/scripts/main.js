/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import { render } from './render';

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
      });
  });
});


const handleSubmit = event => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  const btn = document.getElementById("submitForm");
  btn.disabled = true;
  showToast("Enviando datos", "secondary", ['top-0','end-0']);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => {    
      showToast("Formulario enviado correctamente", "success", ['top-0','end-0']);
      btn.disabled = false;
    })
    .catch(error => {
      console.error("ERROR", error);
      showToast("Ha ocurrido un error, vuelva a intentarlo", "danger", ['top-0','end-0']);
      btn.disabled = false;
    });
};

document.addEventListener("submit", function (event) {
  if (event.target.matches("form")) {
    handleSubmit(event);
  }
});

document.addEventListener("change", function (event) {
  if (event.target.matches("input[name=politicaCH]")) {
    const btn = document.getElementById("submitForm");
    if(event.target.checked == false) btn.disabled = true;
    else btn.disabled = false;
  }
});

function showToast(content, type, position) {
    var delay = 15000;
    position.forEach((el) => {
        document.querySelector("#toast-container").classList.add(el);
    });
    var html = `<div class="toast align-items-center text-white bg-${type} border-0" role="alert" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body h6 p-3 m-0">${content}</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div></div>`;
    var toast = htmlToElement(html);
    var toastContainer = document.querySelector("#toast-container");
    toastContainer.appendChild(toast);
    var toast = new bootstrap.Toast(toast, {delay:delay, animation:true});
    toast.show();
    //setTimeout(() => toast.remove(), delay + 15000);
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}


