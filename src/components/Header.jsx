import styled from 'styled-components';
import Logo from './Logo';
import SearchForm from './SearchForm';

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = ({ setShowModal }) => {
  return (
    <HeaderStyled>
      <Logo width={'100px'} />
      <SearchForm setShowModal={setShowModal} />
    </HeaderStyled>
  );
};

export default Header;
