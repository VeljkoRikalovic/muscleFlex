import Link from "next/link";

function Header() {
  return (
    <div className="p-6 items-center flex justify-between">
      <Link href="/">
        <h1 className="">MuscleFlex</h1>
      </Link>
    </div>
  );
}

export default Header;
