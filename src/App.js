import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { colors } from './theme/colors';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import '../node_modules/normalize.css/normalize.css';
import ResultTitle from './components/ResultTitle';
import ListStays from './components/ListStays';
import ModalEdit from './components/ModalEdit';
import { DataProvider } from './context/DataContext';
import { useState } from 'react';
import Footer from './components/Footer';
const GlobalStyled = createGlobalStyle`

  html{
    box-sizing:border-box;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  *,
  *:after,
  *:before{
    box-sizing:inherit;
    }
  
  body{
    background-color: #fff;
    width:100%;
    height:auto;
    margin:0;
    color:#333333;
    position:relative;
  }
  p{
    color:#4F4F4F;
  }

  ::placeholder {
      color: #BDBDBD;
      font-family: Mulish;
      font-size: 14px;
    }
  
`;

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <DataProvider>
      <GlobalStyled />
      <ThemeProvider theme={colors}>
        {showModal && <ModalEdit setShowModal={setShowModal} />}
        <Wrapper>
          <Header setShowModal={setShowModal} />
          <ResultTitle />
          <ListStays />
          <Footer/>
        </Wrapper>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
