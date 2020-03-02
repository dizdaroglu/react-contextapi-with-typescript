/**
|--------------------------------------------------
| all the interfaces
|--------------------------------------------------
*/
export type Dispatch = React.Dispatch<IAction>;

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}
export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}
export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: { medium: string; original: string };
  summary: string;
}

export interface IEpisodeProps {
  episodes: IEpisode[];
  store: { state: IState; dispatch: Dispatch };
  toggleFavAction: (
    state: IState,
    dispatch: Dispatch,
    episode: IEpisode
  ) => IAction;
  favourites: Array<IEpisode>;
}
