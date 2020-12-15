import styled from 'styled-components';
import Stay from './Stay';
import * as React from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const ListStaysStyled = styled.div`
  width: 100%;
  height: auto;

  .list__stays {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    padding-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    row-gap: 32px;
    column-gap: 10px;
    @media screen and (min-width: 576px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-gap: 1rem 3rem;
      grid-auto-flow: dense;
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
`;

const ListStays = React.memo(() => {
  const { stays } = useContext(DataContext);

  return (
    <ListStaysStyled>
      <ul className="list__stays">
        {stays?.map((stay) => (
          <Stay key={stay.title} stay={stay} />
        ))}
      </ul>
    </ListStaysStyled>
  );
});

export default ListStays;
