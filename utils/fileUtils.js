import fs from "fs";

export const deleteDirectory = (path) => {
    fs.existsSync(path) && fs.rmdirSync(path, { recursive: true })
}