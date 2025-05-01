

export async function render(name) {
    try{
        const approot = document.getElementById("approot");
        if(!approot){
            console.error("Error no existe el div");
            throw new Error('ERROR- No existe el div (approot)');
        }
        const ruta2 = `../../views/pages/speakers.html`;
        const ruta = `../views/blog.html`;
        console.log("RUTA", ruta);
        console.log("RUTA2", ruta2);

        const response = await fetch(ruta).then(resp => {
            if(!resp.ok) throw new Error('ERROR- No se ha podido cargar la página');

            return resp.text();
           
        });
        approot.innerHTML = response;

        const response2 = await fetch(ruta2);
        approot.innerHTML = await response2.text();

        
        approot.innerHTML += '<h3>Hola Mundo!</h3>';

    } catch (err){
        console.error(err);
        return;
    }
}