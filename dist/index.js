"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var get_max_min_1 = require("@writetome51/get-max-min");
var get_sum_average_product_1 = require("@writetome51/get-sum-average-product");
var get_median_1 = require("@writetome51/get-median");
var array_get_shuffled_1 = require("@writetome51/array-get-shuffled");
var get_in_numeric_order_1 = require("@writetome51/get-in-numeric-order");
var in_numeric_order_1 = require("@writetome51/in-numeric-order");
var public_array_content_1 = require("@writetome51/public-array-content");
var NumberArray = /** @class */ (function (_super) {
    __extends(NumberArray, _super);
    function NumberArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NumberArray.prototype, "max", {
        get: function () {
            return get_max_min_1.getMax(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberArray.prototype, "min", {
        get: function () {
            return get_max_min_1.getMin(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberArray.prototype, "difference", {
        get: function () {
            return (this.max - this.min);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberArray.prototype, "sum", {
        get: function () {
            return get_sum_average_product_1.getSum(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberArray.prototype, "average", {
        get: function () {
            return get_sum_average_product_1.getAverage(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberArray.prototype, "product", {
        get: function () {
            return get_sum_average_product_1.getProduct(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberArray.prototype, "median", {
        get: function () {
            return get_median_1.getMedian(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberArray.prototype, "areOrdered", {
        get: function () {
            return in_numeric_order_1.inNumericOrder(this.data);
        },
        enumerable: true,
        configurable: true
    });
    NumberArray.prototype.allInRange = function (range) {
        if (range[0] > range[1]) {
            throw new Error('In the range array, the first number must be less than or' +
                ' equal to the second number');
        }
        return (range[0] <= this.min && range[1] >= this.max);
    };
    NumberArray.prototype.order = function () {
        this.set(get_in_numeric_order_1.getInNumericOrder(this.data));
    };
    NumberArray.prototype.shuffle = function () {
        this.set(array_get_shuffled_1.getShuffled(this.data));
    };
    return NumberArray;
}(public_array_content_1.PublicArrayContent));
exports.NumberArray = NumberArray;
