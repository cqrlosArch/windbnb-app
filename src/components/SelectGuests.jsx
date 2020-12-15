import { useContext } from 'react';
import styled from 'styled-components';
import DataContext from '../context/DataContext';

const SelectGuestsStyled = styled.div`
  position: relative;
  margin: 0;
  min-height: 100px;
  margin-bottom: 6rem;
  padding-top: 1.5rem;
  padding-left: 1rem;

  .select {
    &:nth-child(2) {
      margin-top: 2rem;
    }
    &--title > * {
      font-family: 'Mulish';
      font-weight: bold;
      font-size: 14px;
      margin: 0;
    }
    &--title-age {
      color: rgba(79, 79, 79, 0.5);
      font-size: 12px;
    }

    &__buttons {
      color: #333333;
      display: flex;
      width: 80px;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      margin-top: 0.6rem;
      .select-button {
        width: 20px;
        height: 20px;
        border: 1px solid #828282;
        color: #828282;
        border-radius: 4px;
        background-color: #fff;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &__icon {
          font-size: 15px;
        }
      }
    }
  }
`;

const SelectGuests = () => {
  const { counts, dispatch } = useContext(DataContext);
  return (
    <SelectGuestsStyled>
      <div className="select">
        <div className="select--title">
          <h2>Adults</h2>
          <p className="select--title-age">Ages 13 or above</p>
        </div>
        <div className="select__buttons select__buttons--adult">
          <button
            className="select-button select-button--decrement"
            onClick={() => dispatch({ type: 'decrement_adult' })}
          >
            <span className="material-icons select-button__icon">remove</span>
          </button>
          <span>{counts.adultCount}</span>
          <button
            className="select-button select-button--increment"
            onClick={() => dispatch({ type: 'increment_adult' })}
          >
            <span className="material-icons select-button__icon">add</span>
          </button>
        </div>
      </div>
      <div className="select">
        <div className="select--title">
          <h2>Children</h2>
          <p className="select--title-age">Ages 2-12</p>
        </div>
        <div className="select__buttons select__buttons--children">
          <button
            className="select-button select-button--decrement"
            onClick={() => dispatch({ type: 'decrement_children' })}
          >
            <span className="material-icons select-button__icon">
              horizontal_rule
            </span>
          </button>
          <span>{counts.childrenCount}</span>
          <button
            className="select-button select-button--increment"
            onClick={() => dispatch({ type: 'increment_children' })}
          >
            <span className="material-icons select-button__icon">add</span>
          </button>
        </div>
      </div>
    </SelectGuestsStyled>
  );
};

export default SelectGuests;
