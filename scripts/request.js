export const consomePokeAPI = async () => {
    const loading = document.querySelector(".loading")
    const erro = document.querySelector(".erro")

    
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const pokemonsDaAPI = await response.json()
        return pokemonsDaAPI
    } catch (error) {
        console.error(error)
        erro.innerText = `${error}`
        erro.classList.remove('hidden')
    } finally {
        // // Independente da requisição ser um sucesso, ou um erro, o loading será removido da tela.
        loading.classList.add('hidden')
    }
}