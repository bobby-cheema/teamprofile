// import Employee from "../lib/employeeClass.js";

export const createCard = (data) => {
  let Template = ` <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <style>
    #main {
     
    }
    #header {
      width: calc(100% - 30px);
      height: 300px;
      background-color: chartreuse;
      border: 1px solid black;
    }
  </style>
  </head>

  
  <body>
    <div id="main" class="container-fluid">
      <div id="header" class="container-fluid text-center p-5 fs-1"> My Team </div>
      <div class="container d-flex flex-wrap justify-content-between my-5" id="start">  `;
  data.forEach((element) => {
    const { name, id, email, role, office, github, school } = element;
    console.log(name, id, email, role);
    let third = "";
    if (role === "Manager") {
      third = `Office Number: ${office}`;
    } else if (role === "Intern") {
      third = `School: ${school}`;
    } else {
      third = `GitHub: ${github}`;
    }

    Template += `<div class="card shadow-lg" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title text-center"> Role: ${role}</h5>
        <ul class="list-group list-group-flush">
        <h6 class="list-group-item"> Name: ${name}</h6>
     
      
        <li class="list-group-item"> ID:  ${id}</li>
        <li class="list-group-item">Email:   <a href="mailto:${email}">${email}</a> </li>
        <li class="list-group-item">${third}</li>
      </ul>
     </div>
     </div>
     
    
     
    
    
    `;
  });
  Template += `  
  </div>
  </div>
  

  </body>
  </html>`;
  return Template;
};
