export interface IProduct {
	id: string;
	title: string;
	price: number;
};

export interface IProductButton extends IProduct {
	clickHandler: (price: number) => void;
};