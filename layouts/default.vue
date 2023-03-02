<script lang="ts" setup></script>

<template>
  <div class="app">
    <aside class="aside">
      <ol>
        <li>
          <div class="olli">1</div>
          <div>
            <p>setp 1</p>
            <h3>your info</h3>
          </div>
        </li>
        <li>
          <div class="olli">2</div>
          <div>
            <p>setp 2</p>
            <h3>select plan</h3>
          </div>
        </li>
        <li>
          <div class="olli">3</div>
          <div>
            <p>setp 3</p>
            <h3>add-ons</h3>
          </div>
        </li>
        <li>
          <div class="olli">4</div>
          <div>
            <p>setp 4</p>
            <h3>summary</h3>
          </div>
        </li>

      </ol>
    </aside >
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>

.app {
  height: 100vh;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
aside {
  grid-column: span 1;
  padding: 2.2rem 2rem;
  background-image: url('@/public/bg-sidebar-desktop.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  border-radius: 11px;
}
.olli{
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-radius: 50%;
  border: solid .5px var(--Pastel-blue);
  color: var(--White)
}
li {
  text-transform: uppercase;
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

li div p {
  color: var(--Light-blue);
}
h3{
  color: var(--White);
}
main{
  grid-column: span 3;
  padding: 40px 100px 0 100px;
}
/* 
main, aside{
  min-height: 100vh;
} */


</style>
