
export async function render(nompage) {
    // Renderiza la página
    const app = document.getElementById("approot");
    console.log('exposr', nompage);

    try{
        const ruta = `./views/pages/${ nompage }.html`;
        const response = await fetch(ruta);

        if(!response.ok) throw new Error('ERROR- No se ha podido cargar la página');
        const htmlTXT = await response.text();

        app.innerHTML = htmlTXT;
    } catch (err){
        console.error(err);
    }            
}
