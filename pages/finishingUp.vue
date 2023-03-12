<script setup>
	const formList = useState('formList')
    function addForm( obj ){
        const index = formList.value.findIndex( item => item.path == obj.path )
        if( index == -1 ){
            formList.value.push( obj )
        } else {
            formList[index] = obj
        }
    }
  	const route = useRoute()
	const errorForm = useState('errorForm')
	

  	function wareForm(){
		const item = formList.value.find( item => item.path = '/addOns')
		if( !item ){
			errorForm.value = true
			setTimeout( () => {
				errorForm.value = false
			}, 500 )
			return navigateTo({
				path: '/addOns'
			})
		}
	}
	wareForm()

	const plan = formList.value.find( item => item.path == '/selectPlan')
	const addOns = formList.value.find( item => item.path == '/addOns')
	const useSanitizerText = (text ) => text.substring(0,1).toUpperCase() + text.substring(1, text.length )
	const priceUS = ( price, frecuency) => frecuency ? `$${price}/yr` : `$${price}/mo`

	function totalPrice() {
		console.log(formList.value);
		if ( addOns.addOns.length ){
			const prices = addOns.addOns.map( item => item.price)
			return plan.price + prices.reduce( (x,y) => x+y)
		} else {
			return plan.price
		}
	}

	function handleBack(){
		return navigateTo({
            path: '/addOns'
        })
	}

	let endOfForm = ref(false)
	function handleSubmit() {
		endOfForm.value = true
		alert(JSON.stringify(formList.value))
		formList.value = []
	}
</script>
<template>
<FormKit type="form" submit-label="Next Step" @submit="handleSubmit" v-if="!endOfForm && plan " >
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
					<p>+{{ priceUS( addOn.price, frecuency) }}</p>
				</div>
			</div>
		</div>
	</div>
	<div class="total">
		<p>
			Total ( per 
			<span v-if="plan.frecuency">year</span>
			<span v-else>month</span> )
		</p>
		<div class="price">
			<p>+{{priceUS( totalPrice(), plan.frecuency )}}</p>
		</div>
	</div>
	<div class="goBack" @click="handleBack">
		<p>
			Go Back
		</p>
	</div>
</FormKit>
<div v-else class="endOfForm">
	<img src="@/public/icon-thank-you.svg" alt="thank you">
	<h2>
		Thank you!
	</h2>
	<p>
		Thanks for confirming your subscription! We hope you have fun using our platform. 
		If you ever need support, please feel free to email us at support@loremgaming.com.
	</p>
</div>
</template>

<style scoped>
.resument{
	background-color: var(--Magnolia);
	padding: 1rem 2rem;
	border-radius: 11px;
	margin-top: 2rem;
}
.total{
	padding: 1rem 2rem;
	font-size: 1.2rem;
	
}

.divSections{
	border: solid 1px var(--Light-gray);
	margin: 1rem 0;
}
.plan, .add-on, .total{
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
.total .price p{
	color: var(--Purplish-blue);
	font-size: 1.5rem;
}
.link {
	text-decoration: underline;
	transition: .4s;
}
.link:hover {
	text-decoration: underline;
	color: var(--Purplish-blue);
}
.endOfForm{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100%;
	text-align: center;
}
.endOfForm p{
	margin-top: 1rem;
	font-size: 1.5rem;
}
</style>
