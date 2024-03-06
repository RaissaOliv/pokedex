import styles from './styles.module.css'
import { useState } from 'react'
import getPokemon from '../../api/pokeRequests'
export default function Pokedex(){
    const[nome, setnome] = useState("")
    const[found, setFound] = useState(false)
    const[data, setData] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        if(nome){
        saveData()
        }else{
            alert("Campo vazio. Por favor, digite um nome.")
        }
    }
    async function saveData(){
        setData(await getPokemon(nome))
        setFound(true)
        console.log(data)
    }
    return(
    <form onSubmit={handleSubmit}>
    <div className={styles.mainScreen}>
        <div className={styles.main}>
        <header className={styles.header}>
            <h1 className={styles.title}>Pokédex</h1>
        </header>
        {found ? <Response response={data}/> : <></>}
            <div className={styles.searchDiv}>
                    <h3 className={styles.pokeName}>Pesquise um pokémon</h3>
                    <input placeholder='digite o nome'
                    className={styles.inputs} onChange={(e) => setnome(e.target.value)}/>
                    <button type='submit' className={styles.button}>Enviar</button>
                </div>
        </div>
    </div>
    </form>
    )
}

export function Response({response}){
    if(!response){
        return(
            <div className={styles.pokentry}>
            <div className={styles.imgDiv}>
                <h1 className={styles.error}>404</h1>
                <h2> pokemon não encontrado :/ </h2>
            </div>
        </div>
        )
    }

    const { name, abilities, sprites } = response;
    return(
        <div className={styles.pokentry}>
                <div className={styles.imgDiv}>
                    <img src={sprites.front_default} className={styles.pokeImg}></img>
                    <h4 className={styles.abilities}>{name} - habilidades: {abilities.length} </h4>
                    <ul className={styles.pokelist}>
                    {abilities.map(result => (
                    <li key={result.ability.name}>{result.ability.name}</li>
                    ))}
                    </ul>
                </div>
            </div>
    )
}
