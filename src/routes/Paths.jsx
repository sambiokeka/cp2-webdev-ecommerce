import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Carrinho from '../pages/Carrinho' 
import App from '../App' 

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,


        children:[
            {
                index: true,
                element: <Home />
            },

            {
                path: "perfil",
                element: <Perfil />
            },
            {
                path: "carrinho",
                element: <Carrinho />
            }
        ]
    }
])


export default router;