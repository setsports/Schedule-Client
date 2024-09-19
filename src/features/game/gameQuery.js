import http from '../../http/http';

export const getGames = async ({ queryKey }) => {
  const [, params] = queryKey;
  const { date, language, country } = params;

  try {
    const res = await http.post('/game/all', { date, language, country });

    return res.data.games;
  } catch (err) {
    throw err;
  }
};

export const getAppGames = async ({ queryKey }) => {
  const [, params] = queryKey;
  const { date, country, gmt } = params;

  try {
    const res = await http.post('/game/app', { date, country, gmt });

    return res.data.games;
  } catch (err) {
    throw err;
  }
};
