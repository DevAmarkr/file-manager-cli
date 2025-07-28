const fs = require("fs");

module.exports = function (filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log("Error happend while file creation");
    } else {
      return console.log("File Content:", data);
    }
  });
};
