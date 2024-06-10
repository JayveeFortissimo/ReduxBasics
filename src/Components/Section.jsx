import './style.css';
import {useSelector,useDispatch} from 'react-redux';

const Section = () => {

    const dispatch = useDispatch();
    const numberCount = useSelector(state => state.count);

    const handleIncrement = () => dispatch({type:'Increment'})
    const handleDeccrement = () => dispatch({type:'Decrement'})
    const Reset = () => dispatch({type:'Reset'})

  return (
   <section>
    <h1>Incre/Decre</h1>
   <h1>{numberCount}</h1>
    <div className='btn'>
        <button onClick={handleIncrement}>+</button>
        <button  onClick={handleDeccrement}>-</button>
    </div>

    <div className='rrs'>
        <button onClick={Reset}>Reset</button>
    </div>
   </section>
  )
}

export default Section