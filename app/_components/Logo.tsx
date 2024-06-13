import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        height="60"
        quality={100}
        width="60"
        alt="Scorch logo"
      />

      <span className="text-xl font-semibold text-primary-100">Scorch</span>
      <span>
        <span className=" text-red-600">Fr</span>
        <span className=" text-black">ee </span>
        <span className=" text-white">Pala</span>
        <span className=" text-green-600">stine</span>
      </span>
    </Link>
  );
}

export default Logo;
