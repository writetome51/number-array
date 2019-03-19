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
		return this.max - this.min;
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
