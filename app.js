const datos = [
    {
        categoria: "🧊 CONSERVACIÓN",
        titulo: "¿Congelar mata las bacterias?",
        texto: "Congelar generalmente detiene o ralentiza el crecimiento de muchos microorganismos, pero no significa que todos mueran."
    },

    {
        categoria: "🦠 MICROBIOLOGÍA",
        titulo: "¿Qué es la contaminación cruzada?",
        texto: "Es la transferencia de microorganismos desde un alimento, superficie o utensilio hacia otro alimento."
    },

    {
        categoria: "🥩 ALIMENTOS",
        titulo: "¿Por qué cambia de color la carne?",
        texto: "El color de la carne está relacionado, entre otros factores, con los cambios que experimentan sus pigmentos y con la exposición al oxígeno."
    },

    {
        categoria: "🥫 CONSERVACIÓN",
        titulo: "¿Qué pasa con una lata hinchada?",
        texto: "Una lata hinchada puede indicar una alteración del alimento o del envase y es una señal para no consumirlo."
    },

    {
        categoria: "🏷️ ETIQUETADO",
        titulo: "¿Qué significa 'consumir preferentemente antes de'?",
        texto: "Es una indicación relacionada principalmente con la calidad del alimento, y no debe confundirse automáticamente con una fecha de vencimiento."
    }
];
const categoriaDato = document.getElementById("categoriaDato");
const tituloDato = document.getElementById("tituloDato");
const textoDato = document.getElementById("textoDato");
const botonDato = document.getElementById("botonDato");

if (botonDato) {

    botonDato.addEventListener("click", function() {

        const numeroAleatorio = Math.floor(Math.random() * datos.length);

        categoriaDato.textContent = datos[numeroAleatorio].categoria;
        tituloDato.textContent = datos[numeroAleatorio].titulo;
        textoDato.textContent = datos[numeroAleatorio].texto;

    });

}

// =========================
// NOVEDADES / BLOG
// =========================

const listaNoticias = document.getElementById("listaNoticias");

if (listaNoticias) {

    fetch("noticias/noticias.json")
        .then(response => response.json())
        .then(noticias => {

            noticias.forEach(noticia => {

                const tarjeta = document.createElement("article");

                tarjeta.classList.add("tarjeta-noticia");

                tarjeta.innerHTML = `
                    <a href="noticia.html?id=${noticia.id}" class="enlace-noticia">

                        <span class="etiqueta-noticia">
                            ${noticia.categoria}
                        </span>

                        <h3>
                            ${noticia.titulo}
                        </h3>

                        <div class="fecha-noticia">
                            ${noticia.fecha}
                        </div>

                        <p class="resumen-noticia">
                            ${noticia.resumen}
                        </p>

                        <span class="leer-noticia">
                            Leer artículo →
                        </span>

                    </a>
                `;

                listaNoticias.appendChild(tarjeta);

            });

        })
        .catch(error => {
            console.error("No se pudieron cargar las noticias:", error);
        });

}

// =========================
// NOTICIA INDIVIDUAL
// =========================

const noticiaCompleta = document.getElementById("noticiaCompleta");

if (noticiaCompleta) {

    const parametros = new URLSearchParams(window.location.search);
    const idNoticia = Number(parametros.get("id"));

    fetch("noticias/noticias.json")
        .then(response => response.json())
        .then(noticias => {

            const noticia = noticias.find(item => item.id === idNoticia);

            if (!noticia) {
                noticiaCompleta.innerHTML = `
                    <h2>Noticia no encontrada</h2>
                    <p>
                        La noticia que buscás no existe.
                    </p>
                `;

                return;
            }

            noticiaCompleta.innerHTML = `
                <span class="etiqueta-noticia">
                    ${noticia.categoria}
                </span>

                <h1>
                    ${noticia.titulo}
                </h1>

                <div class="fecha-noticia">
                    ${noticia.fecha}
                </div>

                <p class="bajada-noticia">
                    ${noticia.resumen}
                </p>

                <div class="contenido-noticia">
                    ${noticia.parrafos.map(parrafo => `
                        <p>${parrafo}</p>
                    `).join("")}
                </div>

                <a href="index.html#buzon" class="final-noticia">
                    💌 <strong>¿Tenés una duda sobre este tema?</strong>
                    <br>
                    Mandanos tu pregunta en el buzón →
                </a>
            `;

            document.title = `${noticia.titulo} | BromatologyArg`;

        })
        .catch(error => {

            console.error("No se pudo cargar la noticia:", error);

            noticiaCompleta.innerHTML = `
                <h2>Ocurrió un error</h2>
                <p>
                    No pudimos cargar esta noticia.
                </p>
            `;
        });
}