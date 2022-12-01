type DepartmentType =
  | "OpenSystemManagement"
  | "SuperNet"
  | "General"
  | "InternationalPlanning"
export type Employee = {
  name: string
  employeeNumber: number
  department: DepartmentType
  joinedDate: string
}
