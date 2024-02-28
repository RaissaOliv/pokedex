import { useState } from "react"
import styles from './styles.module.css'
import pokeball from './pokeball.png'
export default function SignUp(){
    const[nome, setnome] = useState("")
    const[cpf, setCpf] = useState("")
    const[email, setEmail] = useState("")
    const[telefone, setPhonenum] = useState("")
    const[sexo, setGender] = useState("")
    const[nascimento, setBirthdate] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault(); /*para a tela não recarregar sem necessidade*/
        let values = [nome, cpf, email, telefone, sexo, nascimento]
        try{
            for(let i = 0; i < values.length; i++){
                if(isEmpty(values[i])) throw new Error("Um dos inputs está vazio.")
            }
            console.debug(JSON.stringify({ nome, cpf, email, telefone, sexo, nascimento }));
        } 
        
        catch (e){
            console.debug(e)
        }
    }

    function isEmpty(value) {
        return !value; 
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.cadastro}>
                    <div className={styles.loginHeader}>
                        <img src={pokeball} alt="pokeball" className={styles.img}/>
                        <h2 className={styles.title}>Pokédex</h2>
                    </div>
                    <h1 className={styles.subtitle}>Faça seu cadastro</h1>
                    <input className={styles.inputs}
                        type="text" placeholder="nome" id="nome" value={nome} onChange={(e) => setnome(e.target.value)}/>
                    <input className={styles.inputs}
                        type="text" id="cpf" placeholder="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    <input className={styles.inputs} 
                        type="text" placeholder="e-mail" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className={styles.inputs}
                        type="number" id="phonenum" value={telefone} placeholder="telefone" onChange={(e) => setPhonenum(e.target.value)}/>
                    <input className={styles.inputs}
                        type="text" placeholder="sexo" id="gender" value={sexo} onChange={(e) => setGender(e.target.value)}/>
                    <p>Data de nascimento</p>
                    <input className={styles.inputs}
                          type="date" id="birthdate" placeholder="data de nascimento"value={nascimento} onChange={(e) => setBirthdate(e.target.value)}/>
                    <br/>
                    <button type="submit" className={styles.button}>Enviar</button>
                </div>
            </form>
        </div>
    )
}