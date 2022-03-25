import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import ImageList from "../../components/image-list";
import { IImage } from "../../interfaces/image";
import { IStreet } from "../../interfaces/street";
import { buildAllImagesWithMetadata, getStreetNameSlugs, getStreets } from "../../utils/image-utils";

interface StreetProps {
  images: IImage[],
  streets: IStreet[];
  currentStreet: IStreet;
};

const Street = ({ images, streets, currentStreet }: StreetProps) => {
  return (
    <>
      <Head>
        <title>Doors of Tallinn - {currentStreet.name}</title>
        <meta name="description" content={`Beautiful doors of Tallinn, Estonia - ${currentStreet.name}`} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <ImageList images={images} streets={streets} currentStreet={currentStreet} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentStreetSlug = params?.streetSlug as string;
  const allimages = buildAllImagesWithMetadata();
  const streets = getStreets();
  const currentStreet = streets.find((street) => street.slug === currentStreetSlug);
  const images = allimages.filter((image) => {
    const imageStreet = image.caption?.split(" ")[0];
    return imageStreet === currentStreet?.name;
  });

  return { props: { images, streets, currentStreet } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getStreetNameSlugs();
  const paths = slugs.map((slug) => ({
    params: { streetSlug: slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Street;
