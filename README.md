<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <title>Sentido Contrario</title>
</head>
<body>
    <header class="header" id="inicio">
        <img src="img/bx-menu.svg" alt="" class="hamb"> 
        <nav class="menu-navegation">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Sobre Nosotros</a>
            <a href="#galeria">Galeria</a>
            <!-- <a href="#expertos">Expertos</a> -->
            <a href="#contacto">Contacto</a>
        </nav>
        <div class="contenedor head">
            <h1>SENTIDO CONTRARIO </h1>
            <p class="copy">EN RADIO 
               
            </p>
        </div>
    </header>
    <main>
        <section class="services contenedor" id="nosotros">
            <h2 class="subtitulo">Sobre Nosotros</h2>
            <div class="contenedor-servicio">
            <img src="img/Podcast_Isometric.svg" alt="">
            <div class="checklist-servicio">
                <div class="service">
                    <!-- <h3 class="n-service"><span class="number">1</span>Noticias y Novedades</h3> -->
                    <p> Somos un equipo de jovenes cristianos, que realizamos un programa de radio. En donde
                        compartimos info, noticias, música y algo de Dios. Podés escucharnos todos los miércoles a las 18:00 Hs en Radio Hope FM 90.3 
                        y en SentidoContrario en Twitch.</div>
                <!-- <div class="service">
                    <h3 class="n-service"><span class="number">2</span>Humor y Música</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dicta,
                         repellat officiis quis illum dolore optio. Alias a cumque odio.</p>
                </div>
                <div class="service">
                    <h3 class="n-service"><span class="number">3</span>Palabra de Dios</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dicta,
                         repellat officiis quis illum dolore optio. Alias a cumque odio.</p>
                </div> -->
            </div>
        </div>
        </section>
        <section class="gallery" id="galeria">
            <div class="contenedor">
                <h2 class="subtitulo">Galeria</h2>
                <div class="contenedor-galeria">
                    <img src="img/uno.jpg" alt="" class="img-galeria">
                    <img src="img/dos.jpg" alt="" class="img-galeria">
                    <img src="img/tres.jpg" alt="" class="img-galeria">
                    <img src="img/cuatro.jpg" alt="" class="img-galeria">
                    <img src="img/cinco.jpg" alt="" class="img-galeria">
                    <img src="img/seis.jpg" alt="" class="img-galeria">
             
                </div>
            </div>
        </section>
        <section class="imagen-light">
            <img src="img/bx-x.svg" alt="" class="close">
            <img src="" alt="" class="agregar-imagen">
        
        
        <!-- <section class="contenedor" id="expertos">
            <h2 class="subtitulo">Expertos en :</h2>
            <section class="experts">
                <div class="cont-expert">
                    <img src="img/Pie Chart_Isometric.svg" alt="">
                    <h3 class="n-expert">Analytics</h3>
                </div>
                <div class="cont-expert">
                    <img src="img/Pie Chart_Isometric.svg" alt="">
                    <h3 class="n-expert">SEO</h3>
                </div>
                <div class="cont-expert">
                    <img src="img/Pie Chart_Isometric.svg" alt="">
                    <h3 class="n-expert">Security</h3>
                </div>
            </section>
        </section> -->
    </main>
    <footer class="contacto" id="contacto">
        <div class="contenedor footer-content">
            <div class="contact-us">
                <h2 class="brand">Sentido Contrario<br> En Radio</h2>
                <p>Somos un programa de radio</p>
            </div>
            <div class="social-media">
                <a href="https://www.facebook.com/sentidoenradio" class="social-media-icon" target = _blank>
                    <i class='bx bxl-facebook'></i>
                </a>
                <a href="https://twitter.com/sentidoenradio" class="social-media-icon" target = _blank>
                    <i class='bx bxl-twitter'></i>
                </a>
                <a href="https://www.instagram.com/sentidoenradio/" class="social-media-icon" target = _blank>
                    <i class='bx bxl-instagram'></i>
                </a>
                <a href="https://www.twitch.tv/sentidocontrario" class="social-media-icon" target = _blank>
                    <i class='bx bxl-twitch'></i><box-icon type='logo' name='twitch'></box-icon>
                </a>
            </div>
        </div>
        <div class="line"></div>
    </footer>
    <script src="menu.js"></script>
    <script src="lightbox.js"></script>
</body>
</html>
