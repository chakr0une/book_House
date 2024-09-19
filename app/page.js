import Image from "next/image";
import backgroundImage from "../public/home/book-bg.jpg";
import logo from "../public/logo/book-houde-high-resolution-logo-transparent.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col relative justify-center items-center h-screen">
      <Image
        className="blur-sm"
        src={backgroundImage}
        alt="background Image"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="p-2 flex flex-col justify-center items-center z-10 bg-purple-100 lg:w-2/5 h-1/4 rounded-md">
        <div className="flex pb-5 mb-5 text-5xl text-purple-800">
          <p>Welcome to book house</p>
        </div>

        <div>
          <Link
            href="/store"
            className="bg-purple-700 text-white hover:bg-purple-900 p-3 rounded-sm text-lg mr-2"
          >
            TAKE ME TO THE STORE
          </Link>
        </div>
      </div>
    </div>
  );
}
