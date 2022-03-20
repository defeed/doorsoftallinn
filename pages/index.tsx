import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Modal } from '../components/modal'
import { NextRouter, useRouter } from 'next/router'
import { ImageDetail } from '../components/image-detail'

const Home: NextPage = () => {
  const router: NextRouter  = useRouter();

  return (
    <>
      <Head>
        <title>Tallinn Doors</title>
        <meta name="description" content="Beautiful doors of Tallinn, Estonia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {router.query.image && (
        <Modal
          onClose={() => {
            router.push("/");
          }}
        >
          <ImageDetail image={String(router.query.image)} />
        </Modal>
      )}

      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00001" as="/00001">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00001.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00001"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00002" as="/00002">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00002.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00002"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00003" as="/00003">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00003.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00003"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00004" as="/00004">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00004.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00004"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00005" as="/00005">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00005.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00005"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00006" as="/00006">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00006.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00006"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00007" as="/00007">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00007.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00007"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00008" as="/00008">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00008.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00008"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00009" as="/00009">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00009.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00009"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00010" as="/00010">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00010.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00010"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00011" as="/00011">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00011.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00011"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00012" as="/00012">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00012.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00012"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00013" as="/00013">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00013.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00013"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00014" as="/00014">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00014.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00014"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00015" as="/00015">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00015.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00015"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00016" as="/00016">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00016.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00016"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00017" as="/00017">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00017.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00017"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-1/6">
              <div className="w-full p-1 md:p-2">
                <Link href="/?image=00018" as="/00018">
                  <a>
                    <Image
                      width={200}
                      height={300}
                      src="/img/00018.jpg"
                      className="block object-cover object-center w-full h-full rounded-sm"
                      alt="Door #00018"
                    />
                  </a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home
