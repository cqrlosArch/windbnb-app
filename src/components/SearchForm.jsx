import { useContext } from 'react';
import DataContext from '../context/DataContext';
import styled from 'styled-components';

const SearchStyled = styled.div`
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;

  @media screen and (min-width: 576px) {
    margin: 0;
  }

  .form {
    display: grid;
    width: inherit;
    grid-template-columns: 45% 35% 20%;
    font-family: 'Mulish', sans-serif;

    &__input {
      outline: none;
      height: 55px;
      border: none;
      border-right: 1px solid ${({ theme }) => theme.border_input};
      font-weight: 500;
      padding: 0.5rem;
      font-size: 14px;
      color: ${({ theme }) => theme.text_primary};
      &--submit {
        display: none;
      }
    }

    .label__submit {
      position: relative;
      background-color: ${({ theme }) => theme.white};
      &::after {
        content: '';
        position: absolute;
        height: 30px;
        width: 30px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url('images/search.svg') no-repeat;
        background-size: 100%;
        cursor: pointer;
      }
    }
  }
`;

const SearchForm = ({ setShowModal }) => {
  const { location, guests, filterStays, changeShowList } = useContext(
    DataContext
  );
  const filterList = (e) => {
    e.preventDefault();
    filterStays(location, guests);
  };

  const changeShow = () => {
    setShowModal((modal) => !modal);
  };
  return (
    <SearchStyled onClick={changeShow}>
      <form onSubmit={filterList} className="form">
        <input
          type="text"
          name="location"
          className="form__input"
          placeholder="Add Location"
          readOnly
          required
          value={location || ''}
          onClick={() => changeShowList('location')}
        />
        <input
          readOnly
          required
          type="text"
          name="guest"
          className="form__input"
          placeholder="Add guests"
          value={guests !== 0 ? `${guests} guests ` : ''}
          onClick={() => changeShowList('guests')}
        />
        <label htmlFor="submit" className="label__submit">
          <input
            type="submit"
            className="form__input form__input--submit"
            id="submit"
          />
        </label>
      </form>
    </SearchStyled>
  );
};

export default SearchForm;
