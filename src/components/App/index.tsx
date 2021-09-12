import { Iran, SideBar } from "..";
import { MapProvider } from "../../store";
import { Container } from "./styled";
import { useMapState } from "../../hooks";

function App() {
  return (
    <MapProvider>
      <Main />
    </MapProvider>
  );
}

export default App;

const Main = () => {
  const { pdfRef } = useMapState();
  return (
    <Container>
      <div className="map" ref={pdfRef}>
        <Iran className="map" />
      </div>
      <SideBar className="side-bar" />
    </Container>
  );
};
