<template>
  <svg class="spinner" viewBox="0 0 50 50">
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
  </svg>
</template>

<style lang="scss">
@import '../styles/vars';

.spinner {
  animation: spinner-rotate 2s linear infinite;
  z-index: 2;
  width: 50px;
  height: 50px;

& .path {
    stroke: $green;
    stroke-linecap: round;
    animation: spinner-dash 1.5s ease-in-out infinite;
  }
}
</style>
