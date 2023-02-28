import type { NextPage } from "next";
import styled from "styled-components";
import useMap from "../hooks/useMap";
import { useState } from "react";

const IndexPage: NextPage = () => {
  let [markers, setMarkers]: any = useState<any>([
    {
      id: 1111,
      category: "와인샵",
      markerState: true,
      latitude: 37.512521,
      longitude: 127.032595,
    },
    {
      id: 2222,
      category: "할인샵",
      markerState: true,
      latitude: 37.514812,
      longitude: 127.03261,
    },
    {
      id: 3333,
      category: "레스토랑",
      markerState: true,
      latitude: 37.513267,
      longitude: 127.036089,
    },
    {
      id: 4444,
      category: "제휴샵",
      markerState: true,
      latitude: 37.510667,
      longitude: 127.035089,
    },
    // {
    //   id: 5555,
    //   category: "와인샵",
    //   markerState: true,
    //   latitude: 37.526629,
    //   longitude: 126.885514,
    // },
    // {
    //   id: 6666,
    //   category: "할인샵",
    //   markerState: true,
    //   latitude: 37.525826,
    //   longitude: 126.883592,
    // },
    // {
    //   id: 7777,
    //   category: "레스토랑",
    //   markerState: true,
    //   latitude: 37.525649,
    //   longitude: 126.885067,
    // },
    // {
    //   id: 8888,
    //   category: "제휴샵",
    //   markerState: true,
    //   latitude: 37.527416,
    //   longitude: 126.884612,
    // },
  ]);
  useMap(markers);
  const onclickTest = () => {};
  return (
    <div style={{ padding: "10px", width: "100%", height: "100vh" }}>
      <div>
        <ul>
          <li>할인중</li>
          <li>와이넵 제휴</li>
          <li>콜키치</li>
        </ul>
      </div>
      <MapBox id="map" />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "calc(100% - 20px)",
          background: "#000",
          height: "100px",
        }}
      >
        <div id={"list"}>
          <a onClick={onclickTest}>
            와인샵{[markers.latitude, markers.latitude]}
          </a>
        </div>
      </div>
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
