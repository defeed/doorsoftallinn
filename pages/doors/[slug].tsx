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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-screen bg-slate-500 text-slate-300 overflow-scroll'>
        <Header />
        <ImageDetail image={image} />
    </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filename = `${params?.slug}.jpg`;

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

function BackIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}

export default Door;
