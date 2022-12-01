import express from "express"
import { Employee } from "@/types/employee"
const app = express()

const employees: Employee[] = [
  {
    department: "OpenSystemManagement",
    employeeNumber: 49011,
    joinedDate: "2017/04/01",
    name: "Tsuranuki Suehiro"
  }
]

app.get("/api/v1/employees", (_, res) => {
  res.send(employees)
})

app.post<{}, {}, Employee>("/api/v1/employees", (req, res) => {
  const body = req.body
  // TODO: DB接続
  employees.push(body)
  res.send("OK")
})
if (process.env.NODE_ENV === "production") {
  app.listen(process.env.PORT ? parseInt(process.env.PORT, 10) : 3000)
}
export const viteNodeApp = app
