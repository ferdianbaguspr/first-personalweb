import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Styles.css'
import Image1 from '../img/Layer1.png';


function Introduction() {
return (
    <div className='wrapper'>
        <div>
            <img className='img' src={Image1} alt='3d character'></img>
        </div>
        <div>
            <h5 className='intro'>Hola, Let me introduce myself. My name is Ferdian. I'm from East Java, Indonesia. Pleased to meet you. Thank you!</h5>
        </div>
    </div>
);
}

export default Introduction;