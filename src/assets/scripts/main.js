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


+( function() {
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();            
            const name = link.getAttribute('data-url');
            render(name)  ;
        });
    });
  });
  
  console.log("hola");
} )();


