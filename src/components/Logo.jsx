import styled from 'styled-components';

const LogoStyled = styled.img.attrs(({ src }) => ({
  src: src || 'images/logo.svg',
}))`
  width: ${({ width }) => width && width};
`;

const Logo = ({ src, width }) => {
  return <LogoStyled src={src} width={width}></LogoStyled>;
};

export default Logo;
