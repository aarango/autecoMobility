import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/index';

function App() {

  const [selecteDate, setSelectDate] = useState(new Date());
  console.log('busqueda', selecteDate);

  return (
    <>
      <Header sendData={(dato) => setSelectDate(dato.dato)} />
      <Main selecteDate={selecteDate} />
    </>
  );
}

export default App;
