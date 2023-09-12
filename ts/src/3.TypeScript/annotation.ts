/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */

var numberVal: number = 123
function toNumber(arg: string): number {
  // Number(引数)→引数をNumber型にして返す。
  return Number(arg)
}
var numberVal2: number = toNumber("123")

var numbers: number[]
numbers = [1, 2, 3]
