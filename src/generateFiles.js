const fs = require('fs');

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!',
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('src/index.css', './dist/index.css', (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Stylesheet created!',
      });
    });
  });
};

const generateFiles = (htmlData) => {
  writeFile(htmlData)
    .then((res) => {
      console.log(res);
      return copyFile();
    })
    .then((res) => {
      console.log(res);
    })
    .then(() => {
      console.log('All Done! Check out the dist folder to see your page!');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = generateFiles;
