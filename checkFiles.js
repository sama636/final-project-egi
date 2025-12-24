import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function listFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      console.log("📁 DIR:", fullPath);
      listFiles(fullPath);
    } else {
      console.log("📄 FILE:", fullPath);
    }
  });
}

// بداية البحث من فولدر src
listFiles(path.join(__dirname, "src"));
