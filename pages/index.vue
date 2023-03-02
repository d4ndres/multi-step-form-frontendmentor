<script lang="ts" setup></script>

<template>
  <div class="div-container">
    <NuxtLink to="personalInfo">
      <button>start</button>
    </NuxtLink>
  </div>
</template>

<style scoped>
  .div-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  button{
    font-size: 3rem;
    letter-spacing: 7px;
    font-weight: 400;
    border-radius: 11px;
    border: solid 1px var(--Marine-blue);
    padding: .5rem 2rem;
    background-color: var(--Pastel-blue);
    color: var(--White);
    cursor: pointer;
    box-shadow: 0 0 10px 3px rgba(0,0,0,.5);
    transition: .4s;
  }
  button:hover{
    background-color: var(--Marine-blue);
  }
  button:active{
    box-shadow: 0 0 0 0 rgba(0,0,0,.2);
    border-color: var(--Pastel-blue);
  }
</style>
