import { format, parse } from 'date-fns';
import Image from 'next/image'
import Link from 'next/link';
import { IImage } from '../interfaces/image';
import { Footer } from './footer';
import { Back, Time, Globe, Pin, Camera, Lens, Settings } from './icons';

interface ImageDetailProps {
  image: IImage;
}

export const ImageDetail = ({ image }: ImageDetailProps) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mx-3'>
        <nav className='flex'>
          <Link href='/'>
            <a className='flex items-center px-2 py-3 text-sm text-slate-300 hover:text-slate-100'>
              <Back className="w-5 h-5 mr-2" />
              Back
            </a>
          </Link>
        </nav>

        <div className='flex flex-col md:flex-row bg-slate-200 text-slate-600 shadow-xl rounded-sm '>
          <Image
            src={`/img/${image.filename}`}
            alt={image.caption}
            width={550}
            height={825}
            priority={true}
            className="object-cover rounded-l-sm"
          />

          <div className='p-8 w-full md:w-1/2'>
            <h2 className='text-2xl pb-3 font-medium'>{image.title}</h2>

            {image.capturedAt && (
              <p className='py-1 flex items-center'>
                <Time className="w-5 h-5 mr-3" />
                {format(parse(image.capturedAt, 'yyyy-MM-dd kk:mm:ss', new Date()), 'LLLL d, yyyy')}
              </p>
            )}

            <p className='py-1 flex items-center'>
              <Globe className="w-5 h-5 mr-3" />
              {image.country}, {image.state}, {image.city}
            </p>

            <p className='py-1 flex items-center'>
              <Pin className="w-5 h-5 mr-3" />
              <Link href={`http://maps.google.com/?q=${image.gpsLatitude},${image.gpsLongitude}`}>
                <a target='_blank' className='underline hover:text-slate-500'>
                  {image.sublocation}, {image.caption}
                </a>
              </Link>
            </p>

            <p className='py-1 flex items-center'>
              <Camera className="w-5 h-5 mr-3" />
              {image.cameraMake} {image.cameraModel}
            </p>

            <p className='py-1 flex items-center'>
              <Lens className="w-5 h-5 mr-3" />
              {image.lensModel}
            </p>

            <div className='py-1 flex items-center'>
              <Settings className="w-5 h-5 mr-3" />
              <ul className='flex'>
                <li className='mr-3'>{image.focalLength}</li>
                <li className='mr-3'>f/{parseFloat(image.apertureValue || "0")}</li>
                <li className='mr-3'>{image.shutterSpeed}s</li>
                <li className='mr-3'>ISO {String(image.isoRating)}</li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
