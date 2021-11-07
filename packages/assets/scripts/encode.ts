import { promises as fs } from "fs";

import path from "path";

import { PNGCollectionEncoder } from "@nouns/sdk";
import { readPngFile } from "node-libpng";

const DESTINATION = path.join(__dirname, "../src/image-data.json");
const encode = async () => {
  const encoder = new PNGCollectionEncoder();
  const partfolders = [
    "Background",
    "Clothes",
    "Face",
    "Hats",
    "Mane",
    "Sunglasses",
    "Text",
  ];

  for (const folder of partfolders) {
    const folderpath = path.join(__dirname, "../../../images", folder);
    const files = await fs.readdir(folderpath);
    for (const file of files) {
      const image = await readPngFile(path.join(folderpath, file));
      encoder.encodeImage(
        file.replace(/\.png$/, ""),
        image,
        folder.replace(/^\d-/, ""),
      );
      console.log(file);
    }
  }
  await fs.writeFile(DESTINATION, JSON.stringify(encoder.data, null, 2));
};
encode();
