import { useRouter } from 'next/router';
import React from 'react';

import requests from '@/utils/requests';

// type Props = {};

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="absolute top-0 left-0 h-10 w-1/12 bg-gradient-to-r from-[#06202A]" />
      <div className="flex space-x-10 overflow-x-scroll whitespace-nowrap px-10 text-2xl sm:space-x-20 sm:px-20">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => router.replace(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 last:pr-24 hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A]" />
    </nav>
  );
}

export default Nav;
