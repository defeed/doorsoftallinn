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

  const streetNames: string[] = imageFiles.map((filename) => {
    const image = buildImageWithMetadata(filename);
    const { caption } = image;

    return caption?.split(" ")[0] as string;
  });

  return sortedUniq(streetNames.sort());
};

export const getStreetNameSlugs = (): string[] => {
  const streetNames = getStreetNames();

  const slugs = streetNames.map((streetName) => {
    return streetName
      .toLowerCase()
      .replaceAll("??", "a")
      .replaceAll("??", "o")
      .replaceAll("??", "u")
      .replaceAll("??", "o");
  });

  return slugs;
};

export const getStreets = (): IStreet[] => {
  const streetNames = getStreetNames();

  const streets = streetNames.map((name) => {
    const slug = name.toLowerCase()
      .replaceAll("??", "a")
      .replaceAll("??", "o")
      .replaceAll("??", "u")
      .replaceAll("??", "o");

    return { slug, name};
  });

  return streets;
};
