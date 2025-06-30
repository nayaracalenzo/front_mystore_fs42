
const Cadastro = () => {
    return (
        <>
            <h1 className="text-center text-2xl font-bold">Cadastro</h1>
            <form className="flex flex-col ">
                <input type="text" placeholder="Usuário" value={"nome"} required />
                <input type="email" placeholder="Email" value={"email"} required />
                <input type="password" placeholder="Senha" value={"senha"} required />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}

export default Cadastro



