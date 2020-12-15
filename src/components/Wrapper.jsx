import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'result-title'
    'stays';
  grid-template-rows: 120px 80px auto;
  grid-template-columns: 100%;
  padding: 1rem;

  @media screen and (min-width: 576px) {
    width: 95%;
  }

  @media screen and (min-width: 768px) {
    width: 95%;
  }

  @media screen and (min-width: 992px) {
    width: 90%;
  }

  @media screen and (min-width: 1200px) {
    width: 88%;
  }
`;

const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
