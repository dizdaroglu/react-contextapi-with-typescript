import React from 'react';
import { Store } from '../Store/Store';
import { fetchDataAction } from '../Store/Actions';

const EpisodeList = React.lazy<any>(() => import('../Components/EpisodesList'));

const HomePage: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });
  console.log(state);
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <section>
        <EpisodeList />
      </section>
    </React.Suspense>
  );
};

export default HomePage;
