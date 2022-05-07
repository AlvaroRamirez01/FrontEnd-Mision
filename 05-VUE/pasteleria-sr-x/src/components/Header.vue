<template>
    <div class="container-fluid bg-black">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img class="me-3" width="40" height="40" src="../assets/LogoSeñorX.png" alt="Pasteleria del señor X">
        <span class="fs-4">Pasteleria del señor X</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Inicio</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Historia</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Precios</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contacto</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Ingresar</a></li>
      </ul>
    </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props:{}
}
</script>