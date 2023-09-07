export class User {
  constructor(public name: number, public id: number) {
    this.createUser()
  }

  createUser() {
    console.log("user created!")
  }
}

export const main = (bool: boolean, bool2: boolean) => {
  if (bool) {
    console.log("bool is true")
  } else if (bool2) {
    console.log("bool is false, but bool2 is true")
  }
}
