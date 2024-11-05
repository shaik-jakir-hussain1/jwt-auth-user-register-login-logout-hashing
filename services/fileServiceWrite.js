// services/fileServiceWrite.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.txt"); // Specify the path to your shared file

// Function to write data to the file
const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, { flag: "a" }, (err) => {
      // Append data to the file
      if (err) {
        return reject(err);
      }
      resolve("Data written successfully");
    });
  });
};

module.exports = {
  writeFile,
};
