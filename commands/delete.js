const fs = require('fs');

module.exports = function (filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('❌ Error deleting file:', err.message);
    } else {
      console.log(`🗑️ File deleted: ${filePath}`);
    }
  });
};
