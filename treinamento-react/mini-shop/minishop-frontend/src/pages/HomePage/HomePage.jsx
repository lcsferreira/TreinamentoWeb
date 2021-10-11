const HomePage = () => {
    return ( 
        <div className="container">
            <div>
                <h2>Bem vindo ao minishop!</h2>
                <h3>O que você deseja fazer agora?!</h3>
                <p>Utilize as opções abaixo para acessar rapidamente as guias de gerenciamento, ou navegue pelo menu lateral.</p>
                <div className="container-buttons">
                <button>
                    VERIFICAR PRODUTOS
                </button>
                <button>
                    VERIFICAR CLIENTES
                </button>
                <button>
                    VERIFICAR FORNECEDORES
                </button>
            </div>
            </div>
        </div>
     );
}
 
export default HomePage;