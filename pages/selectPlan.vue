<script setup>
  let radioPlan = useState('plan', () => 'arcade')
  let frecuency = useState('frecuency', () => false)

  function handleSubmit( submitted ) {
    console.log(submitted);
  }

  const plans = [
    {title: 'arcade', icon: 'icon-arcade.svg', priceMo: 9, priceYr: 90},
    {title: 'advanced', icon: 'icon-advanced.svg', priceMo: 12, priceYr: 120},
    {title: 'pro', icon: 'icon-pro.svg', priceMo: 15, priceYr: 150},
  ]
</script>

<template>
<FormKit type="form" submit-label="Next Step" @submit="handleSubmit">
    <h2>Select your plan</h2>
    <p>You have the option of monthly or yearly billing.</p>
    
    <div class="plans" >

      <div class="plan" :class="{ 'active': plan.title == radioPlan}" v-for="plan in plans" @click="radioPlan = plan.title">
        <img :src="plan.icon" :alt="plan.title">
        <div class="plan__descrition">
          <h3>{{ plan.title }}</h3>
          <p v-show="!frecuency">${{plan.priceMo}}/mo</p>
          <p v-show="frecuency">${{plan.priceYr}}/yr</p>
        </div>
      </div>

    </div>
    <div class="hidden">
      <FormKit v-model="radioPlan" type="radio" name="plan" :options="['arcade', 'advanced', 'pro']"/>
    </div>
    <div class="frecuency">
      <p :class="{ 'active': !frecuency }" @click="frecuency = false">Monthly</p>
      
      <toggle/>
      <FormKit type="checkbox" name="frecuencyYearly" :value="frecuency" v-model="frecuency" />
      <p :class="{ 'active': frecuency }" @click="frecuency = true">Yearly</p>
    </div>
    
  
</FormKit>
</template>

<style scoped>
.plans{
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat( 3, 1fr);
  grid-template-rows: 160px;
}
.plan {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 11px;
  border: solid 1px var(--Light-gray);
  transition: .4s;
}
.plan.active{
  background-color: var(--Alabaster);
  border: solid 1px var(--Purplish-blue);
}
.plan img{
  width: 40px;
}
.plan h3 {
  text-transform: capitalize;
  padding-bottom: .2rem;
}
.frecuency{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 50px;
  width: 100%;
  background-color: var(--Alabaster);
}
.frecuency p{
  width: 58px;
  cursor: pointer;
}
.frecuency p:first-child{
  text-align: right;
}
.frecuency p:last-child{
  text-align: left;
}

.frecuency .active {
  font-weight: 700;
  color: var(--Marine-blue)
}



/* .hidden :deep(.formkit-outer){
  display: none;
} */
</style>
