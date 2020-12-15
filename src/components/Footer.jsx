import styled from 'styled-components';

const FooterStyled = styled.div`
  margin: 2rem auto;
  border-top: 1px solid #bdbdbd;
  width: 250px;
  padding-bottom: 2rem;
  @media screen and (min-width: 576px) {
    width: 350px;
  }

  .footer__text {
    text-align: center;
    font-size: 12px;
    color: #a9a9a9;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p className="footer__text">Carlos Díaz @ DevChallenges.io</p>
    </FooterStyled>
  );
};

export default Footer;
