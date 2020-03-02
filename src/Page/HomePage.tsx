import React from 'react';
import { Store } from '../Store/Store';
import { fetchDataAction, toggleFavAction } from '../Store/Actions';
import { IEpisodeProps } from '../Interface/interface';

const EpisodeList = React.lazy<any>(() => import('../Components/EpisodesList'));

const HomePage: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });
  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  };
  console.log(state);
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <section>
        <EpisodeList {...props} />
      </section>
    </React.Suspense>
  );
};

export default HomePage;
