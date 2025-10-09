
    const imagen = document.getElementById("imagen");
    const imagenes =["imagenes/cesar.jpg","imagenes/PerroChido.png"];
    let indice = 0;

    imagen.addEventListener("click", () => {
        imagen.classList.add("cambiando");
        setTimeout(() => {
            indice = (indice + 1) % imagenes.length
            imagen.src = imagenes[indice];
            setTimeout(() => {
                imagen.classList.remove("cambiando");
            }, 100);
        }, 300);
    });
