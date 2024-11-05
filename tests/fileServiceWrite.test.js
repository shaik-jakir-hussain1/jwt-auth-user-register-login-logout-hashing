const { expect } = require("chai");
const fs = require("fs").promises;
const { writeFile } = require("../fileServiceWrite");

const testFilePath = "./testfile.txt";

describe("fileServiceWrite", () => {
  after(async () => {
    // Cleanup the test file after tests
    await fs.unlink(testFilePath).catch(() => {});
  });

  it("should write data to a file successfully", async () => {
    const data = "Hello, world!";
    await writeFile(testFilePath, data);

    // Verify the file was written with the correct data
    const fileData = await fs.readFile(testFilePath, "utf8");
    expect(fileData).to.equal(data);
  });
});
