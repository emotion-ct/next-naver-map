import type { NextPage } from "next";
import useMap from "../hooks/useMap";
import styles from "../styles/Maps.module.scss";
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
  let [shopList, setShopList]: any = useState([
    {
      shopThumb: "",
      shopTags: {
        discount: true,
        affiliate: true,
        corkage: true,
      },
      shopName: "",
      shopDetail: "",
      shopLocation: "",
    },
  ]);
  useMap(markers);
  // const onclickTest = () => {};
  return (
    <div className={styles.mapWrap}>
      <div className={styles.mapHeader}>
        <ul>
          <li>할인중</li>
          <li>와이넵 제휴</li>
          <li>콜키치</li>
        </ul>
      </div>
      <div id="map" className={styles.mapMain} />
      {/*<div className={styles.mapContent}>*/}
      {/*  <div className={styles.listWrap}>*/}
      {/*    <ul className={styles.shopList}>*/}
      {/*      <li>*/}
      {/*        <div className={styles.shopThumb}>*/}
      {/*          <img src="http://placehold.it/320x100" alt="" />*/}
      {/*        </div>*/}
      {/*        <div className={styles.shopTags}>*/}
      {/*          <ul>*/}
      {/*            <li>할인중</li>*/}
      {/*            <li>와이넵 제휴</li>*/}
      {/*            <li>콜키지</li>*/}
      {/*          </ul>*/}
      {/*        </div>*/}
      {/*        <div className={styles.shopName}>무디티 와인샵</div>*/}
      {/*        <div className={styles.shopDetail}>*/}
      {/*          1,500여종의 와인을 보유한 와인 추천 성지*/}
      {/*        </div>*/}
      {/*        <div className={styles.shopLocation}>*/}
      {/*          서울특별시 강남구 학동로 421 지하 1층*/}
      {/*        </div>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

// Styles
// const MapBox = styled.div``;
//
// const appHeader = styled.div``;

export default IndexPage;
