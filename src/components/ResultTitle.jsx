import { useContext } from 'react';
import styled from 'styled-components';
import DataContext from '../context/DataContext';

const ResultTitleStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .result__location {
    font-weight: bold;
    font-size: 18px;
  }

  .result__stays {
    font-weight: 700;
    font-size: 14px;
  }
`;

const ResultTitle = () => {
  const { stays } = useContext(DataContext);
  return (
    <ResultTitleStyled>
      <h2 className="result__location">Stays in Finland</h2>
      <p className="result__stays">{stays.length + ' stays'}</p>
    </ResultTitleStyled>
  );
};

export default ResultTitle;
