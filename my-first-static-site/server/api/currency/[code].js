export default defineEventHandler(async (event) => {

    const {code} = event.context.params
    const {currencyKey} = useRuntimeConfig()

    const uri = `https://app.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

    const{data} =await $fetch(uri)
    return data
}


)