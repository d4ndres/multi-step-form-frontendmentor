<script lang="ts" setup></script>

<template>
  <div>
    <h2>Personal Info</h2>
    <p>please provide your name, email, address, and phone number.</p>
  </div>
  <FormKit type="form">
    <FormKit type="text" name="name" label="Name" placeholder="e.g. Stephen King"/>
    <FormKit type="email" name="email" label="Email Address" placeholder="e.g. StephenKing@lorem.com"/>
    <FormKit type="mask" mask="+# (####) ### ###" label="Phone number" name="phone" placeholder="e.g. +1 234 567 890"/>

  </FormKit>
</template>

<style scoped>


</style>
