function Home() {
    return (
        <div>
            <h1>Olá, vem sempre por aqui, gata?</h1>
            <img src="/images/gato.png" alt="Hagrid" height={700} />
            <p>Me passe seu ZAP agora mesmo!</p>

            <input placeholder="Insira seu ZAP aqui"
                onKeyUp={evento => {
                    const numero = evento.target.value
                    if (Number(numero) && numero.length === 9) {
                        alert("Que delícia")
                        evento.target.value = "" 
                    }if (!Number(numero) || numero.length > 13) {
                        alert("Não colocou um número. Já era =(")
                        evento.target.value = "" 
                    }
                }}>
            </input>
        </div>
    )
}

export default Home;