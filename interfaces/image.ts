export interface IImage {
  filename: string;
  slug: string;
  title?: string;
  caption?: string;
  gpsLatitude?: string;
  gpsLongitude?: string;
  country?: string;
  state?: string;
  city?: string;
  sublocation?: string;
  cameraMake?: string;
  cameraModel?: string;
  lensMake?: string;
  lensModel?: string;
  focalLength?: string;
  focalLengthIn35mmFilm?: string;
  shutterSpeed?: string;
  apertureValue?: string;
  isoRating?: string;
  capturedAt?: string;
}
