module.exports = function templateData(employees) {
  employees.map((data) => {
    //for each employee, create a card, then a switch case for each type to fill in the differences
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    
${employees.map((data) => {
  //for each employee, create a card, then a switch case for each type to fill in the differences
  const name = data.getName();
  const type = data.name;
  const email = data.getEmail();
})}
    
</body>
</html>

`;
};
