import './index.scss';
import Cabecario from '../../components/cabeçario';
import Carousel from 'react-multi-carousel';
import Carrossel from '../../components/carrssel';
import 'react-multi-carousel/lib/styles.css';





export default function Home(){
    

    return(
        <main className='page-home'>

        <Cabecario/>
        <Carrossel/>
       
  

        </main>
    )
}