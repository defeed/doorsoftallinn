import Image from 'next/image'
import { IImage } from '../interfaces/image';

interface ImageDetailProps {
  image: IImage;
}

export const ImageDetail: React.FC<ImageDetailProps> = ({ image }: ImageDetailProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <Image
        src={`/img/${image.filename}`}
        alt={image.caption}
        width={600}
        height={900}
        priority={true}
        className="rounded shadow-lg"
      />

      <div className="my-3">
        <p className="text-lg text-gray-200">Location: {image.caption}</p>
      </div>
    </div>
  );
}
