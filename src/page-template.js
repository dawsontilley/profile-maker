const generateEngineer = eng => {
  return `
<div class= "employee" >
<h2>Name: ${eng.getName()}</h2>
<h3>Role: ${eng.getRole()}</h3>
<p>ID: ${eng.getID()}</p>
<p> Email: ${eng.getEmail()}</p> 
<p>gitHub: ${eng.getGithub()}</p>

</div>

  `
};

const generateManager = manage => {
  return `
<div class= "employee" >
<h2>Name: ${manage.getName()}</h2>
<h3>Role: ${manage.getRole()}</h3>
<p>ID: ${manage.getID()}</p>
<p>Email: ${manage.getEmail()}</p> 
<p>OfficeNumber: ${manage.getOfficeNumber()}</p>

</div>

  `
};

const generateIntern= intern => {
  return `
<div class= "employee" >
<h2>Name: ${intern.getName()}</h2>
<h3>Role: ${intern.getRole()}</h3>
<p>ID: ${intern.getID()}</p>
<p>Email: ${intern.getEmail()}</p> 
<p>School: ${intern.getSchool()}</p>

</div>

  `
}



// create the projects section
const generateMember = memArr => {
  return `
    <section class="my-3" id="members">
      <h2 class=" bg-secondary p-2 display-inline-block">Members</h2>
      <div class="justify-space-between"></div>
      ${memArr.filter(mem =>mem.getRole()=='Manager').map(member=>generateManager(member))}
     
      ${memArr.filter(mem =>mem.getRole()=='Engineer').map(member=>generateEngineer(member))} 
      
      ${memArr.filter(mem =>mem.getRole()=='Intern').map(member=>generateIntern(member))} 

      </section>
  `;
};

// export function to generate entire page
module.exports = memberData => {
  // destructure page data by section
  //const { projects, about, ...header } = memberData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="header">Team Members</h1>
       
      </div>
    </header>
    <main class="container my-5">
      ${generateMember(memberData)}
    </main>
    <footer class="container text-center py-3">
      
    </footer>
  </body>
  </html>
  `;
};


/*
${memArr
        .filter(({ feature }) => !feature)
        .map(({ name, description, languages, link }) => {
          console.log(languages);
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}
    
      </div>
    </section>*/