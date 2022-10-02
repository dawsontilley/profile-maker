const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


membersArr= [];
const managerPrompt = () => {

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the employees name? (Required)',
      /*validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }*/
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the employee ID (Required)',
      /*validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter the ID number!');
          return false;
        }
      }*/
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter the email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the office Number',
      },

  ])
};
const internPrompt = () => {

  inquirer
                .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the Interns Name?',
                    validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a name!');
                        return false;
                    }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Provide an employee ID',
                    validate: IDInput => {
                    if (IDInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project description!');
                        return false;
                    }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Provide an email',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Provide a school!',
                },
                {
                  type:'confirm',
                  name:'addAnother',
                  message:'Would you like to add another member?'
                }
                ])
                .then(inqData => {
                membersArr.push(new Intern(inqData.name,inqData.id,inqData.email,inqData.school));
      
                if (inqData.addAnother) {
                    nextInput();
                    //return promptProject(portfolioData);
                } else {
                    makePage();
                }
                });
}

const nextInput = nextData =>{

    inquirer.prompt([
        {
        type: 'rawlist',
        name: 'selection',
        choices: ['Engineer','Intern','Exit'],
        default:'Engineer',
        message: 'Would you like to add to the team? or Exit?'



        }
    ]).then( nextData=>{
        switch(nextData.selection) {
            case 'Exit':
              return null
             
            case 'Intern':
              internPrompt();
            case 'Engineer':
                promptEngineer();
            default:
                return null;
              // code block
          }
        }
    );
};

 const promptEngineer = () => {

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the Engineers Name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Provide an employee ID',
        validate: IDInput => {
          if (IDInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Provide an email',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Provide an github account',
      }, {
        type:'confirm',
        name:'addAnother',
        message:'Would you like to add another member?'
      }
    ])
    .then(inqData => {
      membersArr.push(new Engineer(inqData.name,inqData.id,inqData.email,inqData.github))
      if (inqData.addAnother) {
        nextInput();
      } else {
        makePage();
      }
    });
};
/*
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is TEST the employees name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter the TESTemployee ID (Required)',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log('Please enter the ID number!');
        return false;
      }
    }
  }]).then(
    console.log("done")
  );
*/

const makePage = () => {
  const page = generatePage(membersArr);
  writeFile(page).then(copyFile());
  

  }


managerPrompt()
.then(manageData => {
  membersArr.push(new Manager(manageData.name,manageData.id,manageData.email,manageData.officeNumber));
  return nextInput();})
  /*.then(inqData => {
    return generatePage(membersArr);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
  */
/*const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
*/