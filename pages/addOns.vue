<script setup>
	const {formList, addForm} = useForm()
  	const route = useRoute()
	let frecuency = useState('frecuency')
  	function wareForm(){
		const item = formList.value.find( item => item.path = '/selectPlan')
		if( !item ){
			return navigateTo({
				path: '/selectPlan'
			})
		}
	}
	wareForm()

	function handleSubmit( submitted ){
		const addOnsSelected = submitted.addOns.map( title => {
			const addOn = addOns.find( item => item.title == title )
			return {
				title: title,
				price: frecuency == true? addOn.priceYr : addOn.priceMo,
			}
		})

		addForm({
			addOns: addOnsSelected,
			path: route.path,
		})

		return navigateTo({
            path: '/finishingUp'
        })
	}

	// Issue memory stable
	const addOns = [
		{ title: 'Online service', description: 'Access to multiplayer games', priceMo: 1, priceYr: 10},
		{ title: 'Larger storage', description: 'Extra 1 TB of cloud save', priceMo: 2, priceYr: 20},
		{ title: 'Customizable profile', description: 'Custom theme on your profile', priceMo: 2, priceYr: 20},
	]
	let addOnsModel = useState('addOnsModel',() => [])
	const isIncludeAddOn = (title) => addOnsModel.value.find( item => item == title )
	

	function toggleAddOnsModel( addOn ){

		const index = addOnsModel.value.findIndex( item => item == addOn.title ) 
		if ( index == -1 ){
			addOnsModel.value.push( addOn.title )
		} else {
			
			addOnsModel.value.splice(index, 1)
		}

	}

	
</script>

<template>
<FormKit 
	type="form" 
	submit-label="Next Step"
	@submit="handleSubmit">
    <h2>Prick add-ons</h2>
    <p>Add-ons help enhance your gamming experience</p>
	<div class="add-ons">
		<div 
		class="add-on"
		:class="{'active': isIncludeAddOn( addOn.title )}" 
		v-for="addOn in addOns" :key="addOn.title" 
		@click="toggleAddOnsModel( addOn )"
		>
			<div class="add-on__description">
				<div class="add-on__check">
					<Icon v-show="!isIncludeAddOn( addOn.title )" size="28" name="material-symbols:check-box-outline-blank" />	
					<Icon v-show="isIncludeAddOn( addOn.title )" size="28" name="material-symbols:check-box-rounded" />	
				</div>
				<div class="add-on__about">
					<h3>{{ addOn.title }}</h3>
					<p>{{ addOn.description }}</p>
				</div>
				
			</div>
			<div class="add-on__frecuency">
				<div v-show="!frecuency" class="add-on__description--month add-on__description--frecuency">
					+${{ addOn.priceMo }}/mo
				</div>
				<div v-show="frecuency" class="add-on__description--year add-on__description--frecuency">
					+${{ addOn.priceYr }}/yr
				</div>
			</div>
		</div>
	</div>
	<div class="hidden">
		<formKit 
			type="checkbox"
			v-model="addOnsModel"
			:options="addOns.map( item => item.title)"
			name="addOns"
		/>
	</div>

	<div class="goBack" @click="handleBack">
		<p>
			Go Back
		</p>
	</div>

</FormKit>
</template>

<style scoped>
.add-on{
	border-radius: 11px;
	border: solid 1px var(--Light-gray);
	margin: 1rem 0;
	padding: 1.4rem;
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	transition: .4s;
}
.add-on:hover{
	border-color: var(--Purplish-blue);
}
.add-on.active {
	border-color: var(--Purplish-blue);
	background-color: var(--Magnolia);
}

.add-on__description{
	display: flex;
	gap: 1rem;
}
.add-on__check, .add-on__frecuency{
	display: flex;
	justify-content: center;
	align-items: center;
}
.add-on__about {
	display: flex;
	flex-direction: column;
	gap: .5rem
}
.add-on__frecuency {
	color: var(--Purplish-blue)
}
.hidden :deep(.formkit-outer){
  display: none;
}
</style>
