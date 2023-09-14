export class User {
  public name: number
  public id: number
  constructor(name: number, id: number) {
    this.name = name
    this.id = id
  }
}

export const main = (bool: boolean, bool2: boolean) => {
  if (bool) {
    console.log("bool is true")
  } else if (bool2) {
    console.log("bool is false, but bool2 is ture")
  }
}
