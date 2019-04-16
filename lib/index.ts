import { getMax, getMin } from '@writetome51/get-max-min';
import { getAverage, getProduct, getSum } from '@writetome51/get-sum-average-product';
import { getMedian } from '@writetome51/get-median';
import { getShuffled } from '@writetome51/array-get-shuffled';
import { getInNumericOrder } from '@writetome51/get-in-numeric-order';
import { inNumericOrder } from '@writetome51/in-numeric-order';
import { PublicArrayContent } from '@writetome51/public-array-content';


export class NumberArray extends PublicArrayContent {


	constructor(data: number[] = []) {
		super(data);
	}


	get max(): number {
		return getMax(this.data);
	}


	get min(): number {
		return getMin(this.data);
	}


	get difference(): number {
		return (this.max - this.min);
	}


	get sum(): number {
		return getSum(this.data);
	}


	get average(): number {
		return getAverage(this.data);
	}


	get product(): number {
		return getProduct(this.data);
	}


	get median(): number {
		return getMedian(this.data);
	}


	get areOrdered(): boolean {
		return inNumericOrder(this.data);
	}


	allInRange(range: [number, number]): boolean {
		if (range[0] > range[1]) {
			throw new Error('In the range array, the first number must be less than or' +
				' equal to the second number');
		}
		return (range[0] <= this.min && range[1] >= this.max);
	}


	order(): void {
		this.set(getInNumericOrder(this.data));
	}


	shuffle(): void {
		this.set(getShuffled(this.data));
	}

}
