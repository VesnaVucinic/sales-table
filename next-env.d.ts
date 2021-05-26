type Employee = {
    name: string;
    uid: string;
  };
  
  type DailySales = {
    employeeUid: string;
    date: string;
    amount: number;
  };
  
  type SalesProp = {
    sales: DailySales[];
  };
  
  type EmployeesAndDates = {
    employees: EmployeeWithSales[];
    dates: string[];
  };
  
  type Value = string | number;
  
  type EmployeeWithSales = Employee & SalesProp;
  