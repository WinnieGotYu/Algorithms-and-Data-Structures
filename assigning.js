function employeeAssign() {
  let mostAvailableEmployee;
  let availableEmployeeIdx;
  let notOnVaccay;
  let leastTasks;
  
  //iterate through tasks
  for(let idx in tasks){
      //find least task
     if(tasks[idx] < leastTasks || leastTasks === undefined){
         //skip if on vacation
          if(statuses[idx]){
              continue;              
          }
          leastTasks = tasks[idx];
          mostAvailableEmployee = names[idx];
          availableEmployeeIdx = idx; 
      }
      //find least number of projects
      if(tasks[idx] === leastTasks){
          if(projects[idx] < projects[availableEmployeeIdx]){
            mostAvailableEmployee = names[idx];
            availableEmployeeIdx = idx;  
          } 
      }
  }
  return mostAvailableEmployee;    
}