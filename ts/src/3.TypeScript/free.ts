console.log("Hello World")

// let foo: any = 123
// foo = "123"

type Model = {
  userid: number
  username: string
}

function drawPoint(arg: Model) {
  return console.log(arg)
}

const hogehoge: Model = {
  userid: 1,
  username: "A"
}

drawPoint(hogehoge)
