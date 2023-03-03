export default function useForm()
{
  const formList = useState('formList', () => [])

  function addForm( payload ){
    const index = formList.value.findIndex( item => item.path == payload.path )
    if( index ){
      formList.value = [...formList.value, payload]
    } else {
      formList.value[index] = payload
    }

    console.log(formList.value);
  }

  return {formList, addForm}
}
