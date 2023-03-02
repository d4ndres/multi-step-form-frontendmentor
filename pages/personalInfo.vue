<script setup>
    const form = useState('info', () => {})
    function handleSubmit( submitted  ){
        form = submitted
        return navigateTo({
            path: '/selectPlan'
        })
    }
</script>
<template>
<FormKit type="form" submit-label="Next Step" @submit="handleSubmit">
    <h2>Personal Info</h2>
    <p>please provide your name, email, address, and phone number.</p>
    <FormKit type="text" name="name" validation="required|length:3" label="Name" placeholder="e.g. Stephen King" />
    <FormKit type="email" name="email" validation="required|email" label="Email Address" placeholder="e.g. StephenKing@lorem.com" />
    <FormKit type="tel" name="tel" validation="required|length:10" label="Phone Number" placeholder="e.g. +1 234 567 890" />
</FormKit>
</template>
