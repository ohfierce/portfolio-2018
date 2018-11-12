<template>
  <div>
    <div id="menu">

      <li data-menuanchor="intro" class="active"><a href="#intro"></a></li>
      <li data-menuanchor="stack"><a href="#stack"></a></li>
      <li data-menuanchor="terminal"><a href="#terminal"></a></li>

    </div>

    <full-page ref="fullpage" :options="options" id="fullpage">
     
      <!-- <grafental /> -->

      <intro />
      
      <stack />

      <terminal />

    </full-page>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.sass" lang="sass" scoped></style>