document.querySelector('.menu-icon').addEventListener('click', function() {
    // Agrega aquí el código para mostrar/ocultar el menú desplegable
    document.querySelector('.menu-items').classList.toggle('show');
  });

  $(document).ready(function() {
    $('.gallery').slick({
      slidesToShow: 4, // Número de elementos visibles en el carrusel
      slidesToScroll: 1, // Número de elementos a desplazar por vez
      autoplay: true, // Reproducir automáticamente el carrusel
      autoplaySpeed: 2000, // Velocidad de reproducción automática en milisegundos
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3 // Número de elementos visibles en pantallas medianas
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1 // Número de elementos visibles en pantallas pequeñas
          }
        }
      ]
    });
  });