import styled from 'styled-components';

const PlaceItemStyled = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  .city {
    padding-left: 0.6rem;
    font-family: 'Mulish', sans-serif;
    font-weight: 500;
    font-size: 14px;
  }
`;

const PlaceItem = ({ location, handleLocation }) => {
  return (
    <PlaceItemStyled onClick={() => handleLocation(location)}>
      <span className="material-icons">place</span>
      <p className="city">{location}</p>
    </PlaceItemStyled>
  );
};

export default PlaceItem;
