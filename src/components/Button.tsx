import {useState} from 'react';
import {IProductButton} from '../interfaces';

function Button({id, title, price, clickHandler}: IProductButton) {
	const [ counter, setCounter ] = useState(0);
	return (
		<>
			<button onClick={() => {clickHandler(price); setCounter(counter + 1)}} id={id}>{title} <span>{price} yen</span></button>
			<div id={`${id}-count`}>{counter}</div>
		</>
	);
};

export default Button