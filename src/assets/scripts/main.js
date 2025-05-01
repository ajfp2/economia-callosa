/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import { render } from './render.js';

/**
 * Write any other JavaScript below
*/
const approot = document.getElementById("approot");

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
      link.addEventListener('click', event => {
          event.preventDefault();            
          const name = link.getAttribute('data-url');
          load(name)  
      });
  });
});


async function load(name) {
  const ruta = './render.js';
  const page = await import(ruta);
  // Render page
  console.log('page', page);
  page.render(name);
}


+( function() {
  console.log("hola");
} )();


