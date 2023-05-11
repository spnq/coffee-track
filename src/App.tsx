import {useState} from 'react';
import './App.css';
import Button from './components/Button';
import {IProduct} from './interfaces';

const products: IProduct[] = [
	{id: 'coffee', title: 'Coffee', price: 480},
	{id: 'tea', title: 'Tea', price: 280},
	{id: 'milk', title: 'Milk', price: 180},
	{id: 'coke', title: 'Coke', price: 190},
	{id: 'beer', title: 'Beer', price: 580},
];

function App() {
	const [ totalBill, setTotalBill ] = useState(0);
	const [ totalProducts, setTotalProducts ] = useState(0);

	const handleProductClick = (price: number) => {
		setTotalProducts(totalProducts + 1);
		setTotalBill(totalBill + price);
	};

	return (
		<div className="App">
			{products.map(({id, title, price}) => {
				return <Button key={id} id={id} title={title} price={price} clickHandler={handleProductClick} />
			})}
			Total: <span id="price">{totalBill}</span>, Products: <span id="count">{totalProducts}</span>
		</div>
	);
};

export default App;