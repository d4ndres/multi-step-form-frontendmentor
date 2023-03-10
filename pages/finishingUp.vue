<script setup>
	  const {formList, addForm} = useForm()
  	const route = useRoute()

  	function wareForm(){
		const item = formList.value.find( item => item.path = '/addOns')
		if( !item ){
			return navigateTo({
				path: '/addOns'
			})
		}
	}
	wareForm()

</script>

<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>
