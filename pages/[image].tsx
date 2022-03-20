import Link from "next/link";
import { useRouter } from "next/router";
import { ImageDetail } from "../components/image-detail";

export default function ImagePage() {
  let router = useRouter();
  let image = router.query.image;

  return (
    <div className="relative w-screen h-screen bg-slate-600">
      <Link href="/">
        <a className="relative z-20 flex items-center w-1/3 pt-12 mx-auto text-xl text-white/80 hover:text-white">
          <BackIcon className="w-5 h-5 mr-2" />
          Back
        </a>
      </Link>

      <div className="absolute inset-0">
        <div className="flex items-center justify-center h-screen">
          <div className="w-1/3">
            <ImageDetail image={String(image)} />
          </div>
        </div>
      </div>
    </div>
  );
}

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
