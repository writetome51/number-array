import { PublicArrayContent } from '@writetome51/public-array-content';


export declare class NumberArray extends PublicArrayContent {

	constructor(data?: number[]);


	readonly max: number;
	readonly min: number;
	readonly difference: number;
	readonly sum: number;
	readonly average: number;
	readonly product: number;
	readonly median: number;
	readonly areOrdered: boolean;


	allInRange(range: [number, number]): boolean;


	order(): void;


	shuffle(): void;

}
