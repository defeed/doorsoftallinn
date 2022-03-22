import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Modal } from '../components/modal'
import { NextRouter, useRouter } from 'next/router'
import { ImageDetail } from '../components/image-detail'
import { IImage } from '../interfaces/image';
import { getAllImages } from '../utils/image-utils';
import { Footer } from '../components/footer'
import { Header } from '../components/header'

interface HomeProps {
  images: IImage[];
};

const Home = ({ images }: HomeProps) => {
  const router: NextRouter  = useRouter();
  const selectedImage = router.query.slug && images.find((image) => image.slug === router.query.slug);

  return (
    <>
      <Head>
        <title>Doors of Tallinn</title>
        <meta name="description" content="Beautiful doors of Tallinn, Estonia" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      {selectedImage && (
        <Modal
          onClose={() => {
            router.push("/");
          }}
        >
          <ImageDetail standalone={false} image={selectedImage} />
        </Modal>
      )}

      <section className="h-screen bg-slate-500 text-slate-300 overflow-scroll">
        <div className="container px-5 py-2 mx-auto lg:px-32">
          <Header />

          <div className="flex flex-wrap">
            {images.map(({ filename, slug, caption }) => (
              <div key={slug} className="flex flex-wrap text-center w-1/2 sm:w-1/4 md:w-1/6">
                <div className="w-full p-1 md:p-2">
                  <Link href={`/?slug=${slug}`} as={`/doors/${slug}`}>
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
    </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const images: IImage[] = getAllImages();
  return { props: { images } };
};

export default Home;
