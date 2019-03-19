import { PublicArrayContent } from '@writetome51/public-array-content';
import { getMax, getMin } from '@writetome51/get-max-min';
import { getAverage, getProduct, getSum } from '@writetome51/get-sum-average-product';
import { getMedian } from '@writetome51/get-median';
import { getShuffled } from '@writetome51/array-get-shuffled';
import { inRange } from '@writetome51/in-range';
import { getInAscendingOrder } from '@writetome51/get-in-ascending-order';
import { inAscendingOrder } from '@writetome51/in-ascending-order';


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
		return inAscendingOrder(this.data);
	}


	allInRange(range: [number, number]): boolean {
		return this.allPass((num) => inRange(range, num));
	}


	order(): void {
		this.set(getInAscendingOrder(this.data));
	}


	shuffle(): void {
		this.set(getShuffled(this.data));
	}

}
