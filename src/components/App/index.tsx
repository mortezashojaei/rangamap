import { Map, SideBar } from "..";
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
  const { pdfRef, regions } = useMapState();
  return (
    <Container>
      <div className="map" ref={pdfRef}>
        <Map regions={regions.region} className="map" />
      </div>
      <SideBar className="side-bar" />
    </Container>
  );
};
