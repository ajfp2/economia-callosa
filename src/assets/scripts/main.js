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


+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);

  const container = document.getElementById("loadViews");
  if(!container){
    console.error("Error no existe el div");
    return;
  }

  const view = async (nompage) => {
    console.log('name',nompage);
    try{
      const ruta = `./views/pages/${ nompage }.html`;
      const response = await fetch(ruta);
      console.log('res',response);
      if(!response.ok) throw new Error('ERROR- No se ha podido cargar la página');
      const htmlTXT = await response.content;
      container.html( htmlTXT );
    } catch (err){
      console.error(err);
    }    
  };
} )();
