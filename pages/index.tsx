import type { NextPage } from "next";
import useMap from "../hooks/useMap";
import styles from "../styles/Maps.module.scss";
import { useEffect, useState } from "react";

const IndexPage: NextPage = () => {
  const [mapState, setMapState]: any = useState<any>({
    header: {
      discount: true,
      affiliate: true,
      corkage: true,
    },
    markers: [
      {
        id: 1111,
        category: "discount",
        markerState: true,
        latitude: 37.512521,
        longitude: 127.032595,
      },
      {
        id: 2222,
        category: "affiliate",
        markerState: true,
        latitude: 37.514812,
        longitude: 127.03261,
      },
      {
        id: 3333,
        category: "corkage",
        markerState: true,
        latitude: 37.513267,
        longitude: 127.036089,
      },
    ],
  });
  // const [shopList, setShopList]: any = useState<any>([
  //   {
  //     shopThumb: "",
  //     shopTags: {
  //       discount: true,
  //       affiliate: true,
  //       corkage: true,
  //     },
  //     shopName: "",
  //     shopDetail: "",
  //     shopLocation: "",
  //   },
  // ]);
  useMap(mapState);
  // useEffect(() => {}, [setMapState]);
  return (
    <div className={styles.mapWrap}>
      <div className={styles.mapHeader}>
        <ul>
          {Object.keys(mapState.header).map((item: any) => {
            return (
              <li
                onClick={() => {
                  console.log(item);
                  if (item === "discount") {
                    setMapState({
                      header: {
                        discount: true,
                        affiliate: false,
                        corkage: false,
                      },
                    });
                  } else if (item === "affiliate") {
                    setMapState({
                      header: {
                        discount: false,
                        affiliate: true,
                        corkage: false,
                      },
                    });
                  } else {
                    setMapState({
                      header: {
                        discount: false,
                        affiliate: false,
                        corkage: true,
                      },
                    });
                  }
                }}
                key={item}
              >
                {item}
              </li>
            );
          })}
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
                <li>??????</li>
                <li>????????? ??????</li>
                <li>?????????</li>
              </ul>
            </div>
            <div className={styles.shopName}>????????? ?????????</div>
            <div className={styles.shopDetail}>
              1,500????????? ????????? ????????? ?????? ?????? ??????
            </div>
            <div className={styles.shopLocation}>
              ??????????????? ????????? ????????? 421 ?????? 1???
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
