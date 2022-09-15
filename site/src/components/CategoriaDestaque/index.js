import './index.scss';

        export default function CategoriaDestaque(props){
            return(
    
                <section className='Card'>
                    <div className='direcao'>
                        {props.img}
                        {props.nome}
                    </div>
                </section>
            )
            }
    