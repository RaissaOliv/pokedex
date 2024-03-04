import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Signup from './screens/signup/Index'
import Pokedex from './screens/pokedex/Index'

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route Component={ Signup } path='/'exact/>
                <Route Component={ Pokedex } path='/pokedex'/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;