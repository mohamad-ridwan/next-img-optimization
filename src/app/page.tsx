import Image, { StaticImageData } from "next/image";
import img from '../../public/product.jpg';
import hp from '../../public/hp.jpg';
import party from '../../public/party.jpeg';
import ritual from '../../public/ritual.jpeg';
import sky from '../../public/sky.jpeg';
import tapa from '../../public/tapa.jpeg';

export default async function Home() {
  const data = [
    {
      img: img,
    },
    {
      img: img,
    },
    {
      img: hp,
    },
    {
      img: hp,
    },
    {
      img: party
    },
    {
      img: party
    },
    {
      img: ritual,
    },
    {
      img: ritual,
    },
    {
      img: sky,
    },
    {
      img: sky,
    },
    {
      img: tapa,
    },
    {
      img: tapa,
    },
  ]
  return (
    <div className="flex flex-col w-full">
      <div className="grid max-sm:grid-cols-2 grid-cols-4 gap-4">
        {data.map((item: { img: StaticImageData }, index) => (
          <div key={index} className="aspect-[4/3] bg-gray-200 flex flex-col">
            <Image
              src={item.img}
              loading={index < 3 ? 'eager' : 'lazy'}
              fetchPriority={index < 3 ? 'high' : undefined}
              width={300}
              height={300}
              layout="responsive"
              alt=""
              sizes="(max-width: 768px) 100vw, (min-width: 808px) 50vw, 100vw"
              className="!h-full max-w-full object-cover"
              priority={index < 3}
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
