import React from 'react';
import { toggleFavAction } from '../Store/Actions';
import { Store } from '../Store/Store';
import { IEpisodeProps } from '../Interface/interface';

const EpisodeList = React.lazy<any>(() => import('../Components/EpisodesList'));

const FavPage: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  };
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
};
export default FavPage;
