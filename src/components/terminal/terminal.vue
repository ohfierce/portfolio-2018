<template>
  <div class="section section--terminal">
    <div class="terminal">
      <div class="terminal__top">
        {{username}}@8.8.8.8: ~ (zsh) (git: {{isGit}})
        <div class="terminal__ball terminal__ball--left"></div>
        <div class="terminal__ball terminal__ball--middle"></div>
        <div class="terminal__ball terminal__ball--right"></div>
      </div>
      <div class="terminal__window">
        <newline v-for="(command, index) in sent_commands" :key="index" :command="command"></newline>
      </div>
    </div>
  </div>
</template>
<script src="./terminal.js"></script>
<style src="./terminal.sass" lang="sass" scoped></style>