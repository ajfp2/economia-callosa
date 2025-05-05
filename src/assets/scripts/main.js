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
  const links = document.querySelectorAll('.nav-link');        
  links.forEach(link => {
      link.classList.remove('active');
      link.addEventListener('click', event => {
        const name = link.getAttribute('data-url');
        event.preventDefault();                        
        link.classList.add('active');
        render(name);
      });
  });
});

// const myCarouselElement = document.querySelector('#carouselExampleAutoplaying')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// });


+( function() {


  
  console.log("hola");
} )();


