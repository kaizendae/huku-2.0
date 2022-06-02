import React from 'react';

type Props = { title: string; Icon: any };

function HeaderItem({ Icon, title }: Props) {
  return (
    <div className="group flex w-12 cursor-pointer flex-col items-center hover:text-white hover:opacity-100  sm:w-2">
      <Icon className="mb-1 h-8 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
