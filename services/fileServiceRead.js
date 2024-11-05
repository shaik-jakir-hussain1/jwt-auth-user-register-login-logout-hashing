// services/fileServiceRead.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.txt"); // Specify the path to your shared file

// Function to read data from the file
const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = {
  readFile,
};
