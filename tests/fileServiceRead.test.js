const { expect } = require("chai");
const fs = require("fs").promises;
const { readFile } = require("../fileServiceRead");

const testFilePath = "./testfile.txt";

describe("fileServiceRead", () => {
  before(async () => {
    // Create a test file with data to read
    await fs.writeFile(testFilePath, "Hello, world!", "utf8");
  });

  after(async () => {
    // Cleanup the test file after tests
    await fs.unlink(testFilePath).catch(() => {});
  });

  it("should read data from a file successfully", async () => {
    const data = await readFile(testFilePath);
    expect(data).to.equal("Hello, world!");
  });
});
