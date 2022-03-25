import fs from 'fs';
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head';
import Link from "next/link";
import { Header } from '../../components/header';
import { ImageDetail } from "../../components/image-detail";
import { IImage } from '../../interfaces/image';
import { buildImageWithMetadata } from '../../utils/image-utils';

interface DoorPageProps {
  image: IImage;
}

const Door = ({ image }: DoorPageProps) =>{
  return (
    <>
      <Head>
        <title>Doors of Tallinn - {image.title}</title>
        <meta name="description" content="Beautiful doors of Tallinn, Estonia" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <div className='h-screen bg-slate-500 text-slate-300 overflow-scroll'>
        <Header />
        <ImageDetail image={image} />
    </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const padded = slug.padStart(5, "0")
  const filename = `${padded}.jpg`;

  return {
    props: {
      image: buildImageWithMetadata(filename)
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('public/img');
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.jpg', ''),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Door;
