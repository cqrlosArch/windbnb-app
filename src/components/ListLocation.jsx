import { useContext } from 'react';
import styled from 'styled-components';
import PlaceItem from './PlaceItem';
import DataContext from '../context/DataContext';

const ListLocationStyled = styled.div`
  .list__location {
    position: relative;
    list-style: none;
    margin: 0;
    min-height: 100px;
    margin-bottom: 4rem;
    padding-top: 1.5rem;
    padding-left: 1rem;
  }
`;

const ListLocation = () => {
  const { listLocation, handleLocation } = useContext(DataContext);

  return (
    <ListLocationStyled>
      <ul className="list__location">
        {listLocation?.map((location) => {
          return (
            <PlaceItem
              key={location}
              location={location}
              handleLocation={handleLocation}
            />
          );
        })}
      </ul>
    </ListLocationStyled>
  );
};

export default ListLocation;
