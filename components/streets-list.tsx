import Link from "next/link";
import { IStreet } from "../interfaces/street"

interface StreetListProps {
  streets: IStreet[];
  currentStreet?: IStreet;
}

const StreetList = ({ streets, currentStreet }: StreetListProps) => {
  return (
    <div className="flex flex-col">
      <ul className="flex flex-wrap justify-center my-10">
        {currentStreet && (
          <li
          key="all"
          className="px-1 mx-2 my-1 border-2 rounded border-slate-400 hover:bg-slate-600 hover:text-slate-100"
          >
          <Link href="/">
            <a>
              All streets
            </a>
          </Link>
        </li>
        )}

        {streets.filter((street) => street.slug !== currentStreet?.slug).map((street) => (
          <li
          key={street.slug}
          className={`px-1 mx-2 my-1 border-2 rounded border-slate-400 hover:bg-slate-600 hover:text-slate-100`}
          >
            <Link href={`/street/${street.slug}`}>
              <a>
                {street.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      {currentStreet && <h2 className="uppercase text-center font-semibold text-2xl">{currentStreet.name}</h2>}
    </div>
  )
};

export default StreetList;
