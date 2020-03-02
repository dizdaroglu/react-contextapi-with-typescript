import React from 'react';
import { Store } from '../Store/Store';

const EpisodeList = React.lazy<any>(() => import('../Components/EpisodesList'));

const HomePage: React.FC = () => {
  const { state, dispath } = React.useContext(Store);

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <section>
        <EpisodeList />
      </section>
    </React.Suspense>
  );
};

export default HomePage;
