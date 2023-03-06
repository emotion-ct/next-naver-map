import type { NextPage } from "next";
import useMap from "../hooks/useMap";
import styles from "../styles/Maps.module.scss";
import { useState } from "react";

const IndexPage: NextPage = () => {
  const [mapState, setMapState]: any = useState<any>({
    discount: false,
    affiliate: false,
    corkage: false,
    markers: [
      {
        id: 1111,
        category: "할인",
        markerState: true,
        latitude: 37.512521,
        longitude: 127.032595,
      },
      {
        id: 2222,
        category: "와이넵 제휴",
        markerState: true,
        latitude: 37.514812,
        longitude: 127.03261,
      },
      {
        id: 3333,
        category: "콜키치",
        markerState: true,
        latitude: 37.513267,
        longitude: 127.036089,
      },
    ],
  });
  const [shopList, setShopList]: any = useState<any>([
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
  const aabbcc = () => {};
  useMap(mapState);
  return (
    <div className={styles.mapWrap}>
      <div className={styles.mapHeader}>
        <ul className={"header"}>
          <li onClick={aabbcc} value={mapState.discount}>
            할인
          </li>
          <li value={mapState.affiliate}>와이넵 제휴</li>
          <li value={mapState.corkage}>콜키치</li>
        </ul>
      </div>
      <div id="map" className={styles.mapMain}>
        <div className={"abc"}></div>
      </div>
      <div className={styles.mapContent}>
        <div className={styles.listWrap}>
          <div className={styles.shopContent}>
            <div className={styles.shopThumb}>
              <img src="http://placehold.it/320x100" alt="" />
            </div>
            <div className={styles.shopTags}>
              <ul>
                <li>할인</li>
                <li>와이넵 제휴</li>
                <li>콜키지</li>
              </ul>
            </div>
            <div className={styles.shopName}>무디티 와인샵</div>
            <div className={styles.shopDetail}>
              1,500여종의 와인을 보유한 와인 추천 성지
            </div>
            <div className={styles.shopLocation}>
              서울특별시 강남구 학동로 421 지하 1층
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
