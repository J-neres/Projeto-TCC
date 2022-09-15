import './index.scss';
import Cabecario from '../../components/cabeçario';
import Carousel from 'react-multi-carousel';
import Carrossel from '../../components/carrssel';
import 'react-multi-carousel/lib/styles.css';
import CategoriaDestaque from '../../components/CategoriaDestaque';





export default function Home(){
    

    return (
        <main className='page-home'>

        <Cabecario/>
            <Carrossel />
            <h1 className='titulo-landing'> Ofertas Diárias</h1>

            Carrossel de produtos


            <h1 className='titulo-landing'> Categorias Em destaque</h1>

            <div className='categoria-destaques'>
                <CategoriaDestaque nome="Acessórios" img="" />
                <CategoriaDestaque nome="Tenis" img=""/>
                <CategoriaDestaque nome="Calças" img="" />
                <CategoriaDestaque nome="Blusas" img="" />
            </div>

       
            <h1 className='titulo-landing'> Item mais procurado</h1>
  
            Carrossel de produtos

            <h1 className='titulo-landing'> Melhores Marcas</h1>

            Carrossel de Marcas

            Rodapé
        </main>
    )
}