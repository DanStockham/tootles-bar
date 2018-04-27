const fs = require("fs");
const path = require("path");

const writeCss = () => {
  const configPath = "./public/index.html";
  const dir = path
    .resolve(__dirname)
    .replace(/\\/g, `/`)
    .replace("C:", "");
  const styles = fs.readFileSync(path.join(__dirname, "/public/dan.css"));

  fs.readFile(configPath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    const result = data.replace("</head>", `<style>${styles}</style></head>`);
    console.log("writing file");
    // eslint-disable-next-line
    fs.writeFile(
      configPath,
      result,
      "utf8",
      err => (err ? console.log(err) : false)
    );
  });
};

writeCss();
