const fs = require('fs');

module.exports = function (oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error('❌ Error renaming file:', err.message);
    } else {
      console.log(`🔁 Renamed: ${oldPath} → ${newPath}`);
    }
  });
};
