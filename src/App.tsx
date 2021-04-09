import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import EstiloGlobal from './estilos/global';

import { Rotas } from './rotas';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
      <EstiloGlobal />
    </>
  );
};

export default App;
