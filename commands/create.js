const fs = require("fs");

module.exports = function (filePath, content = "") {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return console.log("Error happend while file creation");
    }
    console.log("File created Successfully");
  });
};
