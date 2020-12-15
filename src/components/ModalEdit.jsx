import { useContext } from 'react';
import styled, { css } from 'styled-components';
import DataContext from '../context/DataContext';
import ListLocation from './ListLocation';
import SelectGuests from './SelectGuests';

const ModalEditStyled = styled.div`
  position: fixed;
  z-index: 10;
  width: 100vw;
  top: 0;
  background: rgba(79, 79, 79, 0.4);
  height: 100vh;
  transition: all 0.4 ease-out;
  .modal-content {
    position: relative;
    z-index: 5;
    background-color: #fff;
    width: 100%;
    padding: 1rem;

    .modal-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (min-width: 576px) {
        width: 98%;
        margin-left: auto;
        margin-right: auto;
      }
      &__title {
        font-family: 'Mulish', sans-serif;
        font-weight: 700;
        font-size: 14px;
      }
      &__icon {
        cursor: pointer;
      }
    }
    .container__form-modal {
      width: 100%;
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      overflow: hidden;

      @media screen and (min-width: 576px) {
        width: 98%;
        margin-left: auto;
        margin-right: auto;
      }
      .form-modal {
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 576px) {
          width: 100%;
          display: grid;
          grid-template-columns: 40% 40% auto;
        }
        &--item {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #f2f2f2;
          padding: 0.3rem;
          @media screen and (min-width: 576px) {
            border-right: 1px solid #f2f2f2;
          }
          &--location-focus {
            ${({ showLocations }) =>
              showLocations &&
              css`
                border: 1px solid #666666;
                border-radius: 18px;
              `}
          }
          &--guests-focus {
            ${({ showGuests }) =>
              showGuests &&
              css`
                border: 1px solid #666666;
                border-radius: 18px;
              `}
          }

          .form-input {
            border: none;
            outline: none;
            padding: 0.3rem 1rem;
          }
          .form-label {
            font-family: 'Mulish', sans-serif;
            font-weight: 800;
            font-size: 10px;
            text-transform: uppercase;
            padding: 0 1rem;
            padding-top: 0.5rem;
          }
        }
        .form-button {
          position: absolute;
          top: 88%;
          left: 50%;
          border: none;
          outline: none;
          font-family: 'Mulish', sans-serif;
          background: rgba(235, 87, 87, 0.9);
          padding: 1rem 2rem;
          box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          color: #f2f2f2;
          font-weight: bold;
          font-size: 14px;
          letter-spacing: 0.1rem;
          transform: translate(-50%, -50%);
          cursor: pointer;
          @media screen and (min-width: 576px) {
            position: static;
            transform: translate(0, 0);
            max-width: 120px;
            margin: 0 auto;
          }
        }
      }
    }
    @media screen and (min-width: 576px) {
      .container__select {
        display: grid;
        grid-template-columns: 40% 60%;
        .container__locations {
          grid-column: 1/2;
        }
        .container__guests {
          grid-column: 2/-1;
        }
      }
    }
  }
`;

const ModalEdit = ({ setShowModal }) => {
  const {
    location,
    guests,
    filterStays,
    showGuests,
    showLocations,
    changeShowList,
  } = useContext(DataContext);

  const filterList = (e) => {
    e.preventDefault();
    setShowModal(false);
    filterStays(location, guests);
  };
  return (
    <ModalEditStyled showLocations={showLocations} showGuests={showGuests}>
      <div className="modal-content">
        <div className="modal-header">
          <p className="modal-header__title">Edit your search</p>
          <span
            className="material-icons modal-header__icon"
            onClick={() => setShowModal(false)}
          >
            close
          </span>
        </div>
        <div className="container__form-modal">
          <form className="form-modal" onSubmit={filterList}>
            <div className="form-modal--item form-modal--item--location-focus ">
              <label htmlFor="modal_location" className="form-label">
                location
              </label>
              <input
                readOnly
                required
                type="text"
                placeholder="Add location"
                id="modal_location"
                name="modal_location"
                className="form-input"
                value={location || ''}
                onClick={() => changeShowList('location')}
              />
            </div>
            <div className="form-modal--item form-modal--item--guests-focus">
              <label htmlFor="modal_guests" className="form-label">
                guests
              </label>
              <input
                required
                type="text"
                placeholder="Add guests"
                id="modal_guests"
                readOnly
                className="form-input"
                value={guests !== 0 ? `${guests} guests ` : ''}
                onClick={() => changeShowList('guests')}
              />
            </div>
            <button className="form-button">Search</button>
          </form>
        </div>
        <div className="container__select">
          <div className="container__locations">
            {showLocations && <ListLocation />}
          </div>
          <div className="container__guests">
            {showGuests && <SelectGuests />}
          </div>
        </div>
      </div>
    </ModalEditStyled>
  );
};

export default ModalEdit;
