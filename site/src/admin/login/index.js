import './index.scss'
import '../../common/common.scss'


export default function Login(){



    return(
        <main className='login-admin'>
            <head>
            <meta charset="UTF-8"/>
            </head>

            <div className='container1'>
                <div>
                    <h1>Login</h1>
                </div>

                <div>
                    <h2>Email</h2>
                    <input type="email" placeholder='Digite seu email' />
                </div>

                <div>
                    <h2>Senha</h2>
                    <input type="password" placeholder='Digite sua senha' />
                </div>

                <div>
                    <button>ENTRAR</button>
                </div>
                
                <h2>-Overlend-</h2>



            </div>



        </main>
    )
}