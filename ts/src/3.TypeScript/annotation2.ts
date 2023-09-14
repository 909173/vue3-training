/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */

const user: {
  name: string
  id: number
  age: number
} = {
  name: "suehiro",
  id: 12,
  age: 31
}

function numOrBool(): number | boolean {
  return Math.random() < 0.5 ? 10 : false
}

function numOrBool2(): boolean | number {
  const randomNumber = Math.random()
  if (randomNumber < 0.5) return 10
  else return false
}

const tuple: [string, number, boolean] = ["suehiro", 12, true]
