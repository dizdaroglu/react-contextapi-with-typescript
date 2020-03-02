import { IAction, IEpisode, IState } from '../Interface/interface';

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=mr-&-robot&embed=episodes';
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  });
};
