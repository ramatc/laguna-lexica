import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TranslateFake from "./components/TranslateFake/index.jsx";
import SectionVideos from './components/SectionVideos/index.jsx';
import NavBar from './components/NavBar/index.jsx';
import Propuesta from './components/Propuesta/index.jsx';
import Glosario from './components/Glosario/index.jsx';
import Palabras from './components/Palabras/index.jsx';
import Random from './components/Random/index.jsx';
import TranslateBox from "./components/TranslateBox/index.jsx";

function App() {
  return (
    // <ContextProvider> 
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          exact
          element={<TranslateFake />}
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
          path="/videos"
          exact
          element={<SectionVideos />}
        />

        <Route
          path="/palabras"
          exact
          element={<Palabras />}
        />

        <Route
          path="/random"
          exact
          element={<Random />}
        />

        <Route
          path="/traductor"
          exact
          element={<TranslateBox />}
        />
      </Routes>
    </BrowserRouter>
    // </ContextProvider>  
  );
}

export default App;