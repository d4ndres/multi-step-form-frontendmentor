<script setup>
  const {form} = useForm()
  console.log(form);
</script>

<template>
<FormKit type="form" submit-label="Next Step">
    <h2>Select your plan</h2>
    <p>You have the option of monthly or yearly billing.</p>
</FormKit>
</template>

<style scoped></style>
