const rutaBase = window.location.pathname.includes("/paginas/") ? "../" : "";

function inyectarFooter(){
    document.getElementById("footer").innerHTML = "<p>Copyright © 2026 SwamperTcg, Todos los derechos reservados.</p>";
}

function inyectarHeader(){
    document.getElementById("header").innerHTML = 
        `<section class="header-logo">
            <a href="${rutaBase}index.html">
                <img src="${rutaBase}imagenes/logo.jpg" alt="Logo SwamperTCG">
            </a>
        </section>
        <section class="header-nav">
            <a href="${rutaBase}index.html">inicio</a>
            <a href="${rutaBase}paginas/catalogo.html">catalogo</a>
            <a href="${rutaBase}paginas/info.html">información</a>
            <a href="${rutaBase}paginas/contacto.html">contacto</a>
        </section>
        <section class="header-icons">
            <a href="${rutaBase}paginas/carrito.html" id="icono-carrito">🛒</a>
            <a href="${rutaBase}paginas/usuario.html">👤</a>
        </section>`
}
inyectarFooter();
inyectarHeader();
