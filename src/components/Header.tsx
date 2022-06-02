/* eslint-disable unused-imports/no-unused-imports */
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';

import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header className="m-5 flex h-auto flex-col items-center sm:flex-row">
      <div className="flex max-w-2xl grow justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={140}
        height={70}
        alt="xx"
      />
    </header>
  );
}

export default Header;
