import ExifReader from "exifreader";
import fs from "fs";
import { IImage } from "../interfaces/image";

const IMAGES_DIR = "public/img";

export const buildImageWithMetadata = (filename: string): IImage => {
  const buffer = fs.readFileSync(`${IMAGES_DIR}/${filename}`);
  const { exif, iptc } = ExifReader.load(buffer, { expanded: true });

  return {
    filename,
    slug: filename.replace('.jpg', ''),
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

export const getAllImages = (): IImage[] => {
  const files = fs.readdirSync(IMAGES_DIR);
  const images = files.map((filename) => {
    return buildImageWithMetadata(filename);
  });

  return images;
}
