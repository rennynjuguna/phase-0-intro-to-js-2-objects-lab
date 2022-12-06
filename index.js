const employee={
    name:"Sam",
    streetAddress:"New York"
  }
  function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key=employee.name){
    const newObj = {...employee };
    delete newObj[key];
    return newObj;
  }
  deleteFromEmployeeByKey(employee,employee.name)
  function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
  }
