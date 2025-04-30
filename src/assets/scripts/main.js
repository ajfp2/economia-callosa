/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


const approot = document.getElementById("app");
/*
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.submenu');
  
  links.forEach(link => {
      link.addEventListener('click', event => {
          event.preventDefault();            
          const url = new URL(window.location.href);
          // console.log('url', url.protocol);
          const contentUrl = link.getAttribute('data-url');
          // console.log("URL", contentUrl);
          window.location = `${ url.protocol }//${ url.host }/detalle.html?det=${contentUrl}`;
      });
  });
});
*/


+( function() {


  if(!approot){
    console.error("Error no existe el div");
    return;
  }

//   document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('.menuJS');
//     console.log(links);
    
//     links.forEach(link => {
//         link.addEventListener('click', event => {
//             event.preventDefault();            
//             const contentUrl = link.getAttribute('data-url');
//             console.log("URL", link);
//             // window.location = `${ url.protocol }//${ url.host }/detalle.html?det=${contentUrl}`;
//         });
//     });
// });

const menu = document.querySelector('.menuJS').children;

console.log(menu);

    menu.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();            
            const contentUrl = link.getAttribute('data-url');
            console.log("URL", link);
            // window.location = `${ url.protocol }//${ url.host }/detalle.html?det=${contentUrl}`;
        });
    });

} )();


export async function render(nompage) {
  // Renderiza la página
  console.log('exposr', nompage);

  try{
      const ruta = `./views/pages/${ nompage }.html`;
      const response = await fetch(ruta);
      console.log('res',response);
      if(!response.ok) throw new Error('ERROR- No se ha podido cargar la página');
      const htmlTXT = await response.text();
      console.log(htmlTXT);
      
      app.innerHTML = htmlTXT;
  } catch (err){
      console.error(err);
  }            
}