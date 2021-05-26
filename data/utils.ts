import json from "./sales.json";

function getEmployees(): Employee[] {
    return json.employees;
}

function getSales(): DailySales[] {
    return json.sales;
}

export function getEmployeeSales(): EmployeeWithSales[] {
    const sales = getSales();
    return getEmployees()
      .map((employee) => ({
        ...employee,
        sales: sales
          .filter((sale) => sale.employeeUid === employee.uid)
          .sort((s1, s2) => (s1.date < s2.date ? -1 : 1)),
      }))
      .sort((e1, e2) => (e1.name > e2.name ? -1 : 1));
}

export function getSaleDates() {
    const employeeSales = getEmployeeSales();
    return employeeSales[0].sales.map((sale) => sale.date);
}
  
  