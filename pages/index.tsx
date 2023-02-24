import type { NextPage } from "next";
import styled from "styled-components";
import useMap from "../hooks/useMap";

const IndexPage: NextPage = () => {
  useMap();
  return (
    <div style={{ padding: "10px", width: "100%", height: "100vh" }}>
      <MapBox id="map" />
    </div>
  );
};

// Styles
const MapBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default IndexPage;
