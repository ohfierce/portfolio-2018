<template>
  <div class="section section--intro">

    <div class="intro">
      <vue-typed-js :strings="['Hi!', 'Ich bin Matthias', 'Full-Stack Entwickler<br>aus Berlin']" :typeSpeed="80">
        <h1><span class="typing"></span></h1>
      </vue-typed-js>
      <div class="intro__scroller">
        <a><span></span></a>
      </div>
    </div>

  </div>
</template>

<script src="./intro.js"></script>
<style src="./intro.sass" lang="sass" scoped></style>