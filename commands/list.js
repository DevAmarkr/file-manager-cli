const fs = require('fs');
const path = require('path');

module.exports = function (dirPath = '.') {
  fs.readdir(dirPath, (err, files) => {
    if (err) return console.error('❌ Error reading directory:', err.message);
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      const stats = fs.statSync(fullPath);
      console.log(stats.isDirectory() ? `📁 ${file}` : `📄 ${file}`);
    });
  });
};