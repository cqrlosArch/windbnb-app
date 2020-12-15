import { createContext, useState, useEffect, useReducer } from 'react';
import dataJson from '../data/stays.json';

function reducer(state, action) {
  switch (action.type) {
    case 'increment_adult':
      return { ...state, adultCount: state.adultCount + 1 };
    case 'decrement_adult':
      return {
        ...state,
        adultCount: state.adultCount > 0 ? state.adultCount - 1 : 0,
      };
    case 'increment_children':
      return { ...state, childrenCount: state.childrenCount + 1 };
    case 'decrement_children':
      return {
        ...state,
        childrenCount: state.childrenCount > 0 ? state.childrenCount - 1 : 0,
      };
    default:
      throw new Error();
  }
}

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [counts, dispatch] = useReducer(reducer, {
    adultCount: 0,
    childrenCount: 0,
  });
  const [stays, setStays] = useState([]);

  const [location, setLocation] = useState(null);
  const [listLocation, setListLocation] = useState(null);

  const [showLocations, setShowLocations] = useState(false);
  const [showGuests, setShowGuests] = useState(false);

  useEffect(() => {
    setStays(dataJson);
    const allLocations = dataJson.map(
      (stay) => `${stay.city}, ${stay.country}`
    );
    const uniqueLocations = [...new Set(allLocations)];
    setListLocation(uniqueLocations);
  }, []);

  const guests = counts.adultCount + counts.childrenCount;

  const filterStays = (location, guests) => {
    const filteredStays = dataJson.filter(
      (stay) =>
        `${stay.city}, ${stay.country}` === location && stay.maxGuests >= guests
    );

    if (location?.length === 0) {
      setStays(data);
    } else {
      setStays(filteredStays);
    }
  };

  const handleLocation = (location) => {
    setLocation(location);
  };

  const changeShowList = (list) => {
    list === 'location' ? setShowLocations(true) : setShowLocations(false);

    list === 'guests' ? setShowGuests(true) : setShowGuests(false);
  };

  const data = {
    dataJson,
    stays,
    filterStays,
    guests,
    location,
    handleLocation,
    counts,
    dispatch,
    listLocation,
    showLocations,
    showGuests,
    changeShowList,
    setShowLocations,
    setShowGuests,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataProvider };
export default DataContext;
