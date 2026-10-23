import { useState, useEffect } from "react"

export default function Lista() {
    const [usuarios, setUsuarios] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        //simular meus dados que seriam puxados da api

        setTimeout(() => {
            const listaUsuarios = [
                {
                    id: 1,
                    nome: "Kaio",
                    email: "Kaio@email.com"
                },
                {
                    id: 2,
                    nome: "William",
                    email: "William@email.com"
                },
                {
                    id: 3,
                    nome: "Yasmim",
                    email: "Yasmim@email.com"
                },
                {
                    id: 4,
                    nome: "Laura",
                    email: "Laura@email.com"
                }
            ]
            setUsuarios(listaUsuarios)
            setCarregando(false)

        }, 4000) //depois 4 segundos vão aparecer os usuários
    }, [])

    return (
        <div>
            <h1>Lista de usuários</h1>
            {carregando ? (
                <p>Carregando dados...</p>
            ) : (
                <ul>
                    {usuarios.map((usuario)=> (
                        <li key={usuario.id}>{usuario.nome}, {usuario.email}</li>
                    ))}
                </ul>
            )
            }
        </div>

    )
}