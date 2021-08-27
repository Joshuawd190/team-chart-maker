
function generateCard(name,email,id,role,roleInfo){
    return`
        <div>
        <h2>${name}</h2>
        <h3>${role}</h3>
        <ul>
        <li>ID: ${id}</li>
        <li>Email: <a href="mailto: ${email}">${email}</a></li>
        <li>${roleInfo}</li>
        </ul>
        </div>
    `
}

module.exports = function templateData(employees = []) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="./index.css">
</head>
<body>
<header>
<h1>My Team</h1>
</header>
 <section>   
${employees.map((data) => {
  //for each employee, create a card, then a switch case for each type to fill in the differences
  const name = data.getName();
  const email = data.getEmail();
  const id = data.getID();
  const role = data.getRole();
  const roleInfo;
  switch (role) {
    case 'Manager':
        roleInfo = "Office number: " + data.getOfficeNum();
        break;
    case 'Engineer':
        roleInfo = `GitHub: <a href="https://github.com/${data.getGithub()}">${data.getGithub()}</a>`;
        break;
    case 'Intern':
        roleInfo = "School Name: " + data.getSchool();
        break;
    default:
        break;
  }

  generateCard(name, email, id, role, roleInfo);
})}
</section>    
</body>
</html>
`;
};
