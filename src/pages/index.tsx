import Link from 'next/link';
import PageLayout from '../components/layouts/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col justify-start items-center h-full mb-10 text-customGreen font-alexandria">
        <div className="h-1/6 pt-5">
          <h1 className="  text-3xl md:text-7xl text-customLGreen  text-center pl-10 pr-10 ">
            webdev cheatsheet
          </h1>
        </div>

        <ul className="   text-2xl md:text-5xl mt-20">
          <Link href="/basic">
            <li className="mt-10 hover:scale-105 transition-all duration-3000 cursor-pointer">
              Frontend
            </li>
          </Link>
          <Link href="/intermediate">
            <li className="mt-10 hover:scale-105 transition-all duration-3000 cursor-pointer">
              Backend
            </li>
          </Link>
        
        </ul>
      </div>
    </PageLayout>
  );
}
