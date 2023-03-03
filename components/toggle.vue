<script setup></script>

<template>
  <div id="toggle" class="btn-toggle__wrapper" >
    <div class="btn-toggle__circle"></div>
  </div>
</template>

<style scoped>

.btn-toggle__wrapper{
  width: var(--wrapper-width);
  height: var(--wrapper-height);
  transition: .4s;
  background: hsl(213, 96%, 18%);
  position: relative;
  border-radius: var(--size-circle);
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.2), 0 -3px 4px rgba(0, 0, 0, 0.15);
  border: 0.5px solid rgba(117, 117, 117, 0.31);
  cursor: pointer;
}

.btn-toggle__circle {
  transition: .4s;
  display: block;
  border-radius: 50%;
  height: var(--size-circle); 
  width: var(--size-circle);
  background: #fff;
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  left: 5%;
}

.btn-toggle__wrapper.active  .btn-toggle__circle{
  left: calc(95% - var(--size-circle));
}

</style>
