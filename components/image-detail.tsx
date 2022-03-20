import Image from 'next/image'

interface ImageDetailsProps {
  image: string;
}

export function ImageDetail({ image }: ImageDetailsProps) {
  return (
    <div className="flex flex-col">
      <Image
        src={`/img/${image}.jpg`}
        alt={image}
        width={600}
        height={900}
        className="object-cover rounded shadow-lg h-[66vh] w-full"
      />

      <p className="text-lg text-gray-200 my-3">Tallinn, Kalamaja, Some street 25</p>
    </div>
  );
}
