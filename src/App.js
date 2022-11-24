import ContextProvider from './context/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from "./components/Inicio/index.jsx";
import Propuesta from './components/Propuesta/index.jsx';
import Historial from './components/Historial/index.jsx';
import TranslateBox from "./components/TranslateBox/index.jsx";
import Glosario from './components/Glosario/index.jsx';
import SectionAudios from './components/SectionAudios/index.jsx';
import Palabras from './components/Palabras/index.jsx';
import Busqueda01 from './components/Busqueda/Busqueda01/index.jsx';
import Busqueda02 from './components/Busqueda/Busqueda02/index.jsx';
import Busqueda03 from './components/Busqueda/Busqueda03/index.jsx';
import Random from './components/Random/index.jsx';
import ClickImg from './components/ClickImg/index.jsx';
import Botones from './components/BotonesList/index.jsx';
import SectionVideos from './components/SectionVideos/index.jsx';
import ManyImgs from './components/ManyImgs/index.jsx';
import Texto from './components/Texto/index.jsx';
import Final from './components/Final';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<Inicio />}
          />

          <Route
            path="/propuesta"
            exact
            element={<Propuesta />}
          />

          <Route
            path="/glosario"
            exact
            element={<Glosario />}
          />

          <Route
            path="/audios"
            exact
            element={<SectionAudios />}
          />

          <Route
            path="/palabras"
            exact
            element={<Palabras />}
          />

          <Route
            path="/pesca"
            exact
            element={<Busqueda01 />}
          />

          <Route
            path="/territorio"
            exact
            element={<Busqueda02 />}
          />

          <Route
            path="/navegar"
            exact
            element={<Busqueda03 />}
          />

          <Route
            path="/random"
            exact
            element={<Random />}
          />

          <Route
            path="/imagenes"
            exact
            element={<ManyImgs />}
          />

          <Route
            path="/botones"
            exact
            element={<Botones />}
          />

          <Route
            path="/videos"
            exact
            element={<SectionVideos />}
          />

          <Route
            path="/imagen"
            exact
            element={<ClickImg />}
          />

          <Route
            path="/texto"
            exact
            element={<Texto />}
          />

          <Route
            path="/traductor"
            exact
            element={<TranslateBox />}
          />

          <Route
            path="/historial"
            exact
            element={<Historial />}
          />

          <Route
            path="/final"
            exact
            element={<Final />}
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;