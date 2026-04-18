import './style.css'

export default function FaleConosco (){
    function handleSubmit(e) {
        e.preventDefault()
        alert ("Mensagem enviada!")
    }

    return (
        <section>
            <h1>Fale conosco</h1>
            <p>
                Tire dúvidas e peça um  orçamento sem compromisso.</p>

            <form> onSubmit={handleSubmit}
                <div>
                    <label>
                        <span>Nome</span>
                        <input> type="text" required placeholde="Seu nome" />
                    </label>
                    <label>
                        <spa>E-mail</spa>
                        <input> type="text" required placeholde="seu@email.com"/>
                    <label>
                    </label>
                        <spa>Telefone</spa>
                        <input> type="text" required placeholde="(00) 90000-0000"/>
                </div>
                <label>
                    <spa>Telefone</spa>
                        <input> type="text" required placeholde="(00) 90000-0000"/></input>
                </label>
                        </input>
                    </label>
                </div>
            </form>
        </section>
    )
}