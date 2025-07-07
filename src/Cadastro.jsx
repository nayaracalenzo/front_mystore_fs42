import { useState } from "react";
import axios from "axios";

const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState("")

    async function handleCadastro(event) {
        event.preventDefault()

        try {
            const resposta = await axios.post('http://localhost:3000/api/auth/register', {

                nome,
                email,
                senha

            })
            setNome("")
            setEmail("")
            setSenha("")
            setMensagem(`Usuário ${resposta.data.resposta?.nome || nome} cadastrado com sucesso!`)

        } catch (error) {
            setMensagem(error.response?.data?.erro)
        }
    }
    return (
        <>
            <div className="h-screen flex flex-col items-center mt-[60px] ">
                <h1 className="text-center text-2xl font-bold">Cadastro</h1>
                <form onSubmit={handleCadastro} className="p-4 flex flex-col items-center gap-4 w-[20%] mx-auto">
                    <input onChange={(e) => { setNome(e.target.value) }} value={nome} className="border rounded p-2 w-full" type="text" placeholder="Usuário" required />
                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} className="border rounded p-2 w-full" type="email" placeholder="Email" required />
                    <input onChange={(e) => { setSenha(e.target.value) }} value={senha} className="border rounded p-2 w-full" type="password" placeholder="Senha" required />
                    <button className="bg-emerald-400 p-2 rounded cursor-pointer hover:bg-emerald-400/80 w-full" type="submit">Cadastrar</button>
                </form>
                {mensagem && <p className="text-center">{mensagem}</p>}
            </div>
        </>
    )
}

export default Cadastro



