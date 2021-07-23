const apiKey = process.env.REACT_APP_API_KEY;
const requests = {
  fetchSimpsons: `list/7067554?api_key=${apiKey}&language=en-US`,
  fetchDisney: `list/5905?api_key=${apiKey}&language=en-US`,
  fetchDisneyClassics: `list/338?api_key=${apiKey}&language=en-US`,
  fetchDisneySeries: `list/7067611?api_key=${apiKey}&language=en-US`,
  fetchPixar: `list/9095?api_key=${apiKey}&language=en-US`,
  fetchMusicPixar: `list/7067556?api_key=${apiKey}&language=en-US`,
  fetchDocumentaries: `list/7067555?api_key=${apiKey}&language=en-US`,
  fetchNationalMovies: `list/7067613?api_key=${apiKey}&language=en-US`,
  fetchMarvel: `list/1?api_key=${apiKey}&language=en-US`,
  fetchMarvelPhases: `list/8920?api_key=${apiKey}&language=en-US`,
  fetchMarvelPhaseOne: `list/1271?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc`,
  fetchMarvelPhaseTwo: `list/3204?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc`,
  fetchMarvelPhaseThree: `list/7067552?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc`,
  fetchToyStory: `list/7067603?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc`,
  fetchCars: `list/7067605?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc`,
  fetchUnexpectedHeroes: `list/7067606?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc`,
  fetchStarWars: `list/8136?api_key=${apiKey}&language=en-US`,
  fetchStarWarsLego: `list/7067607?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc`,
  fetchRandom: `list/7068720?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc`,
};
export default requests;
