import React from 'react';

import Thumbnail from './Thumbnail';

// type Props = {};

function Results({ results }: any) {
  return (
    <div className="sm-grid my-10 grid grid-cols-2 px-5 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-8">
      {results.map((result: any) => (
        <Thumbnail key={result.id} movie={result} />
      ))}
    </div>
  );
}

export default Results;
