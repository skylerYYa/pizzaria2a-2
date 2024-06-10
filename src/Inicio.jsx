const Inicio = () => {

    return (
        <>
            <h2>Página de Início</h2>
            <p>Aula de ReactJS</p>
            <input type="text" id="texto" />
            <input type="button" id="botao"
            value="CLIQUE AQUI"
            onClick={()=>alert('Olá Mundo')}
            />
        </>
    )
}
export default Inicio