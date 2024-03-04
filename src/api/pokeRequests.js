import axios from 'axios';
async function getPokemon(name){
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
        console.log(response);
        return response.data
      } catch (error) {
        console.error(error);
        return false;
      }
}

export default getPokemon