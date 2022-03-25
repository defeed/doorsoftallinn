import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { Modal } from '../components/modal'
import { NextRouter, useRouter } from 'next/router'
import { ImageDetail } from '../components/image-detail'
import { IImage } from '../interfaces/image';
import { buildAllImagesWithMetadata, getStreets } from '../utils/image-utils';
import { IStreet } from '../interfaces/street'
import ImageList from '../components/image-list'

interface HomeProps {
  images: IImage[];
  streets: IStreet[];
};

type StreetSlug = string | undefined;

const Home = ({ images, streets }: HomeProps) => {
  const router: NextRouter = useRouter();
  const selectedImage = router.query.doorSlug && images.find((image) => image.slug === router.query.doorSlug);
  const streetSlug = router?.query?.streetSlug as StreetSlug;
  const modalCloseRedirect = streetSlug ? `/street/${streetSlug}` : "/";

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
            router.push(modalCloseRedirect);
          }}
        >
          <ImageDetail standalone={false} image={selectedImage} />
        </Modal>
      )}

      <ImageList images={images} streets={streets} currentStreet={undefined} />
    </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const images = buildAllImagesWithMetadata();
  const streets = getStreets();

  return { props: { images, streets } };
};

export default Home;
