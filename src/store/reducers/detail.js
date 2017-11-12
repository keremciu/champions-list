import detailData from '../data/champion_spi.json'

const initialState = {
  data: detailData.champion_spi,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}