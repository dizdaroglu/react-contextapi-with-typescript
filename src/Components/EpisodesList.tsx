import React from 'react';
import { IEpisode } from '../Interface/interface';

const EpisodesList: React.FC = (props: any) => {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img src={episode.image.medium} alt={`Mr. Robot ${episode.name}`} />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Session:{episode.season} Number:{episode.number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'UnFav'
              : 'Fav'}
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodesList;
