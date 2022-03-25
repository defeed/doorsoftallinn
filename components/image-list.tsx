import Link from "next/link";
import Image from 'next/image'
import { IImage } from "../interfaces/image"
import { IStreet } from "../interfaces/street";
import { Header } from "./header"
import StreetList from "./streets-list"
import { Footer } from "./footer";

interface ImageListProps {
  images: IImage[];
  streets: IStreet[];
  currentStreet?: IStreet;
};

const ImageList = ({ images, streets, currentStreet}: ImageListProps) => {
  const streetSlug = currentStreet?.slug
  return (
    <section className="h-screen bg-slate-500 text-slate-300 overflow-scroll">
      <div className="container px-5 py-2 mx-auto lg:px-32">
        <Header />
        <StreetList streets={streets} currentStreet={currentStreet} />

        <div className="flex flex-wrap">
          {images.map(({ filename, slug, caption }) => (
            <div key={slug} className="flex flex-wrap text-center w-1/2 sm:w-1/4 md:w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href={streetSlug ? `/?doorSlug=${slug}&streetSlug=${streetSlug}` : `/?doorSlug=${slug}`} as={`/door/${slug}`}>
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src={`/img/${filename}`}
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt={caption}
                    />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  )
};

export default ImageList;
