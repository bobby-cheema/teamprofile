//const inquirer = require("inquirer");
import inquirer from "inquirer";
import fs from "fs";
//const Employee = require("./lib/employeeClass.js");
//import Manager from "./lib/managerClass.js";
import Employee from "./lib/employeeClass.js";
import { Manager } from "./lib/manager.js";
import { createCard } from "./src/functions";
let cardData = [];
let person = " ";
// export class Manager extends Employee {
//   constructor(name, id, email, number) {
//     super(name, id, email);
//     this.number = number;
//   }
//   getRole() {
//     return "Manager";
//   }
//   getOffice() {
//     return this.number;
//   }
// }

const getDetails = (person) => {
  const name = person.getName();
  const id = person.getId();
  const email = person.getEmail();
  const role = person.getRole();
  let data = {
    name: name,
    id: id,
    email: email,
    role: role,
  };
  if (role === "Engineer") {
    const github = person.getGithub();
    data = { ...data, github: github };
  } else if (role === "Intern") {
    const school = person.getSchool();
    data = { ...data, school: school };
  } else {
    const office = person.getOffice();
    data = { ...data, office: office };
  }
  cardData = [...cardData, data];
};

export class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

const getIntern = async () => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Enter Intern's name ",
    },

    {
      type: "input",
      name: "internId",
      message: "Enter Interns ID",
    },
    {
      type: "input",
      name: "internEmail",
      message: "Enter Interns's Email",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Enter Interns's School",
    },
  ]);
};

const getEngineer = async () => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "engName",
      message: "Enter Engineer's name ",
    },

    {
      type: "input",
      name: "engId",
      message: "Enter Engineer's ID",
    },
    {
      type: "input",
      name: "engEmail",
      message: "Enter Engineer's Email",
    },
    {
      type: "input",
      name: "engGithub",
      message: "Enter Engineer's GitHub Account",
    },
  ]);
};

const getManager = async () => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Enter Team Managers's name ",
    },

    {
      type: "input",
      name: "ManagerId",
      message: "Enter Managers ID",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter Manager's Email",
    },
    {
      type: "input",
      name: "managerNumber",
      message: "Enter Managers Office Number ",
    },
  ]);
};

const getchoice = async () => {
  return await inquirer.prompt([
    {
      type: "checkbox",
      name: "options",
      message: "Add one of the following or Exit  ",
      choices: ["Engineer", "Intern", "Exit"],
    },
  ]);
};
let Mychoice = " ";
const App = async () => {
  const runChoice = async (choice) => {
    if (choice !== "Exit") {
      if (choice === "Engineer") {
        const eng = await getEngineer();

        person = new Engineer(
          eng.engName,
          eng.engId,
          eng.engEmail,
          eng.engGithub
        );
        getDetails(person);
        await setChoice();
      } else {
        const intern = await getIntern();

        person = new Intern(
          intern.internName,
          intern.internId,
          intern.internEmail,
          intern.internSchool
        );
        getDetails(person);
        await setChoice();
      }
    } else {
      Mychoice = "Exit";
      console.log("finally in the end", cardData);
      const html = createCard(cardData);

      console.log(html);
      fs.writeFile("Template.html", html, (error) => {
        error
          ? console.error(error)
          : console.log("Sucessfully Created Template.html");
      });
    }
  };

  const setChoice = async () => {
    let { options } = await getchoice();
    const choice = options[0];
    Mychoice = choice;
    await runChoice(Mychoice);
  };

  const manager = await getManager();

  person = new Manager(
    manager.managerName,
    manager.ManagerId,
    manager.managerEmail,
    manager.managerNumber
  );
  getDetails(person);
  await setChoice();
};

App();
export { Engineer };
