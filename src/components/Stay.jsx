import styled from 'styled-components';
import * as React from 'react';
const StayStyled = styled.li`
  display: block;
  min-width: 100%;
  @media screen and (min-width: 576px) {
    min-width: 250px;
  }
  @media screen and (min-width: 768px) {
    min-width: 300px;
  }

  .card {
    width: 100%;

    &__img {
      width: 100%;
      height: 240px;
      object-fit: cover;
      border-radius: 24px;
    }
    &__body {
      display: flex;
      flex-direction: column;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-superhost {
        border: 1px solid ${({ theme }) => theme.border_host};
        color: ${({ theme }) => theme.text_paragraph};
        text-transform: uppercase;
        font-size: 10px;
        font-weight: 700;
        padding: 0.4rem 0.6rem;
        border-radius: 12px;
      }

      &-type {
        font-size: 12px;
        color: ${({ theme }) => theme.text_type};
        font-weight: 500;
        width: 50%;
        justify-self: flex-start;
      }

      &-rating {
        display: flex;
        align-items: center;
        justify-content: center;
        &__icon {
          display: block;
        }
        &__text {
          font-size: 12px;
          display: block;
        }
      }
    }

    &__title {
      font-weight: 600;
      font-size: 14px;
      margin: 0;
    }
  }
`;

const Stay = React.memo(({ stay }) => {
  const { title, photo, superHost, type, beds } = stay;

  return (
    <StayStyled>
      <div className="card">
        <img src={photo} alt="" className="card__img" />
        <div className="card__body">
          <div className="card__info">
            {superHost && <p className="card__info-superhost">Super host</p>}
            <p className="card__info-type">
              {beds ? type + '.' : type} {beds && beds + ' beds'}{' '}
            </p>
            <p className="card__info-rating">
              <img
                src="images/star.svg"
                alt="star"
                className="card__info-rating__icon"
              />

              <span className="card__info-rating__text"> 4.40</span>
            </p>
          </div>
          <h2 className="card__title">{title}</h2>
        </div>
      </div>
    </StayStyled>
  );
});

export default Stay;
