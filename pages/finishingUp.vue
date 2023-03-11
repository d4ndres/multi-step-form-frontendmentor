<script setup>
	  const {formList} = useForm()
  	const route = useRoute()

  	function wareForm(){
		const item = formList.value.find( item => item.path = '/addOns')
		if( !item ){
			return navigateTo({
				path: '/addOns'
			})
		}
	}
	// wareForm()

	const plan = formList.value.find( item => item.path == '/selectPlan')
	const addOns = formList.value.find( item => item.path == '/addOns')
	const useSanitizerText = (text ) => text.substring(0,1).toUpperCase() + text.substring(1, text.length )
	const priceUS = ( price, frecuency) => frecuency ? `$${price}/yr` : `$${price}/mo`

</script>
<template>
<FormKit type="form" submit-label="Next Step" @submit="handleSubmit">
    <h2>Finishing yp</h2>
    <p>Double-check everything looks OK before confirming</p>

	<div class="resument">
		<div class="plan">
			<div class="plan__about">
				<h3>
					{{ useSanitizerText( plan.title ) }} (
					<span v-if="plan.frecuency">Yearly</span>
					<span v-else>Monthly</span> )
				</h3>
				<NuxtLink :to="{path: plan.path}">
					<p class="link">
						Change
					</p>
				</NuxtLink>
			</div>
			<div class="price">
				<p>{{priceUS( plan.price, plan.frecuency )}}</p>
			</div>
		</div>
		<hr class="divSections">
		<div class="add-ons">
			<div class="add-on" v-for="addOn in addOns.addOns" :key="addOn.title">
				<p>{{ addOn.title }}</p>
				<div class="price">
					<p>{{ priceUS( addOn.price, frecuency) }}</p>
				</div>
			</div>
		</div>
	</div>
	<div class="total">

	</div>
	<div class="goBack" @click="handleBack">
		<p>
			Go Back
		</p>
	</div>
</FormKit>
</template>

<style scoped>
.resument{
	background-color: var(--Magnolia);
	padding: 1rem 2rem;
	border-radius: 11px;
}
.divSections{
	border: solid 1px var(--Light-gray);
	margin: 1rem 0;
}
.plan, .add-on{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.plan__about{
	display: flex;
	flex-direction: column;
	gap: .5rem;
}
.add-ons{
	display: flex;
	flex-direction: column;
	gap: 1rem;
} 
.price p {
	color: var(--Marine-blue);
	font-weight: 700;
}
.link {
	text-decoration: underline;
	transition: .4s;
}
.link:hover {
	text-decoration: underline;
	color: var(--Purplish-blue);
}
</style>
