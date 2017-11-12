export const findChampion = (champions, id) =>
  champions.find(item => item.champion.id === Number(id));

export const toCapitalize = (string) =>
  string
    .replace('_', ' ')
    .replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

export const getMinutes = (phase) => {
  switch (phase) {
    case 'early_game': {
      return '0 - 10 m';
    }

    case 'mid_game': {
      return '10 - 20 m';
    }

    default: {
      return '20 - 30 m';
    }
  }
}