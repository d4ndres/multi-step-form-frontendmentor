<script setup>
const errorForm = useState('errorForm', () => false)
const formList = useState('formList', () => [])

</script>

<template>
  <div class="app" :class="{ 'active': errorForm}">
    <aside class="aside">
      <ol>
        <NuxtLink to="/personalInfo">

          <li>
            <div class="olli">1</div>
            <div>
              <p>setp 1</p>
              <h3>your info</h3>
            </div>
          </li>
        </NuxtLink>
        <NuxtLink to="/selectPlan">

          <li>
            <div class="olli">2</div>
            <div>
              <p>setp 2</p>
              <h3>select plan</h3>
            </div>
          </li>
        </NuxtLink>
        <NuxtLink to="/addOns">

          <li>
            <div class="olli">3</div>
            <div>
              <p>setp 3</p>
              <h3>add-ons</h3>
            </div>
          </li>
        </NuxtLink>
        <NuxtLink to="/finishingUp">

          <li>
            <div class="olli">4</div>
            <div>
              <p>setp 4</p>
              <h3>summary</h3>
            </div>
          </li>
        </NuxtLink>

      </ol>
    </aside >
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.app.active{
  background-color: red;
}
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
  width: min(800px, 80%);
  margin: 0 auto;
}


main :deep(.formkit-wrapper){
  min-width: 100%;
}
main :deep(.formkit-input){
  font-weight: 500;
}

main :deep( .formkit-input.mysubmit-input) {
  background-color: var(--Marine-blue);
}

main :deep( .formkit-form){
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}
main :deep( .formkit-outer){
  margin: 0;
}

main :deep( .formkit-outer.mysubmit-outer) {
  position: absolute;
  right: 0;
  bottom: 0;
}
.olli {
  transition: .4s;
}

.router-link-active .olli{
  background-color: var(--Light-blue);
  color: var(--Marine-blue);
}

</style>
