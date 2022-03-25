import ExifReader from "exifreader";
import fs from "fs";
import { sortedUniq } from "lodash";
import path from "path";
import { IImage } from "../interfaces/image";
import { IStreet } from "../interfaces/street";

const IMAGES_DIR = "public/img";
const EXTENSION_JPG = ".jpg";

export const buildImageWithMetadata = (filename: string): IImage => {
  const buffer = fs.readFileSync(`${IMAGES_DIR}/${filename}`);
  const { exif, iptc } = ExifReader.load(buffer, { expanded: true });

  return {
    filename,
    slug: String(Number(filename.replace('.jpg', ''))),
    title: iptc?.['Object Name']?.description,
    caption: exif?.ImageDescription?.description,
    gpsLatitude: exif?.GPSLatitude?.description,
    gpsLongitude: exif?.GPSLongitude?.description,
    country: iptc?.['Country/Primary Location Name']?.description,
    state: iptc?.['Province/State']?.description,
    city: iptc?.City?.description,
    sublocation: iptc?.['Sub-location']?.description,
    cameraMake: exif?.Make?.description,
    cameraModel: exif?.Model?.description,
    lensMake: exif?.LensMake?.description,
    lensModel: exif?.LensModel?.description,
    focalLength: exif?.FocalLength?.description,
    focalLengthIn35mmFilm: exif?.FocalLengthIn35mmFilm?.description,
    shutterSpeed: exif?.ShutterSpeedValue?.description,
    apertureValue: exif?.ApertureValue?.description,
    isoRating: exif?.ISOSpeedRatings?.description,
    capturedAt: `${iptc?.['Date Created']?.description} ${iptc?.['Time Created']?.description}`
  }
};

export const buildAllImagesWithMetadata = (): IImage[] => {
  const imageFiles = getAllImageFiles();
  return imageFiles.map((file) => buildImageWithMetadata(file));
};

export const getAllImageFiles = (): string[] => {
  return fs
    .readdirSync(IMAGES_DIR)
    .filter((file) => path.extname(file).toLowerCase() === EXTENSION_JPG)
    .sort()
    .reverse();
};

export const getStreetNames = (): string[] => {
  const imageFiles = getAllImageFiles();

  const streetsNames: string[] = imageFiles.map((filename) => {
    const image = buildImageWithMetadata(filename);
    const { caption } = image;

    return caption?.split(" ")[0] as string;
  });

  return sortedUniq(streetsNames.sort());
};

export const getStreetNameSlugs = (): string[] => {
  const streetsNames = getStreetNames();

  console.log(">>> STREETNAMES", streetsNames);

  const slugs = streetsNames.map((streetName) => {
    return streetName
      .toLowerCase()
      .replaceAll("ä", "a")
      .replaceAll("ö", "o")
      .replaceAll("ü", "u")
      .replaceAll("õ", "o");
  });

  return slugs;
};

export const getStreets = (): IStreet[] => {
  const streetNames = getStreetNames();

  const streets = streetNames.map((name) => {
    const slug = name.toLowerCase()
      .replaceAll("ä", "a")
      .replaceAll("ö", "o")
      .replaceAll("ü", "u")
      .replaceAll("õ", "o");

    return { slug, name};
  });

  return streets;
};
