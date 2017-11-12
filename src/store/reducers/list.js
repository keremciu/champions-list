import listData from '../data/champion_analytics.json'

const initialState = {
  data: listData.champion_analytics,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}