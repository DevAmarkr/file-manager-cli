const fs = require('fs');

module.exports = function (filePath, content = '') {
  fs.appendFile(filePath, content, (err) => {
    if (err) {
      console.error('❌ Error appending to file:', err.message);
    } else {
      console.log(`✅ Appended content to ${filePath}`);
    }
  });
};
