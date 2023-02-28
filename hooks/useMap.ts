import { useEffect, useRef, useState } from "react";

function useMap(markers: any) {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number; allow: boolean } | string
  >("");

  // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정
  useEffect(() => {
    // const option = {
    //   enableHighAccuracy: false, // default : false
    //   maximumAge: 30000,
    //   timeout: 15000, // default : Infinity
    // };
    if (navigator.geolocation) {
      // 사용자가 위치 정보를 허용 한 경우
      const success = (position: any) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          allow: true,
        });
      };
      // 사용자가 위치 정보를 허용 하지 않은 경우
      const error = (e: any) => {
        console.log("error", e);
        setMyLocation({
          latitude: 37.526243,
          longitude: 126.922734,
          allow: false,
        });
      };
      navigator.geolocation.getCurrentPosition(success, error /*option*/);
    } else {
      window.alert(
        "현재 브라우저/기기는 현재위치 서비스를 확인 할 수 없어 기본 위치로 지정합니다."
      );
      setMyLocation({
        latitude: 37.526243,
        longitude: 126.922734,
        allow: false,
      });
    }
  }, []);
  // geolocation 이용 현재 위치 확인, 위치 미동의 시 기본 위치로 지정

  useEffect(() => {
    if (typeof myLocation !== "string") {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        minZoom: 14,
        maxZoom: 18,
        scaleControl: false, // 거리 측정
        logoControl: false,
        mapDataControl: false,
        // zoomControl: true,
        // mapTypeControl: true, // 일반지도, 위성지도 변환
      });
      // Naver Map 생성

      // 현재 위치로 이동시켜주는 버튼
      const nowPosition = () => {
        return (
          '<div style="width: 34px; margin: 7px 0 0 7px;' +
          "height: 34px; top: 7px; right: 7px; border: 1px solid #000; " +
          'background-color: #fff; color: #000;"></div>'
        );
      };

      // 클릭 마크 hide
      const listItem = () => {
        return (
          '<div style="width: 60px; margin: 7px 7px 0 0;' +
          "border: 1px solid #000; background-color: #fff; " +
          'color: #000; text-align: center;"><div>와인샵</div></div>'
        );
      };

      naver.maps.Event.once(mapRef.current, "init", function () {
        // 현재 위치로 이동시켜주는 버튼
        const marker = markers;
        const customeControlMyLocation = new naver.maps.CustomControl(
          nowPosition(),
          {
            position: naver.maps.Position.TOP_LEFT,
          }
        );
        customeControlMyLocation.setMap(mapRef.current);

        naver.maps.Event.addDOMListener(
          customeControlMyLocation.getElement(),
          "click",
          function (e) {
            mapRef.current.morph(
              new naver.maps.LatLng(currentPosition[0], currentPosition[1])
              // 16
            );
          }
        );

        // 클릭 마크 hide
        const customeControlList = new naver.maps.CustomControl(listItem(), {
          position: naver.maps.Position.TOP_RIGHT,
        });
        customeControlList.setMap(mapRef.current);

        // 예시
        naver.maps.Event.addDOMListener(
          customeControlList.getElement(),
          "click",
          function (e) {
            for (let i = 0; i < marker.length; i++) {
              /* todo markerstate 좀더 생각해봐야됨 */
              if (marker[i].category === "와인샵") {
                marker[i].markerState = true;
                marker[i].setMap(mapRef.current, marker);
              } else {
                marker[i].markerState = false;
                marker[i].setMap(null);
              }
            }
          }
        );
      });

      // 커스텀 마커 현재 위치
      const currentIcon = (e: string) => {
        return (
          '<div style="position: relative">' +
          '<div style="position: absolute; top: 50%; left: 50%; ' +
          "width: 35px; height: 35px; background-color: #9ABBFF;border-radius: 50%; " +
          'transform: translate(-50%, -50%); opacity: 0.5;"></div>' +
          '<div style="position: absolute; top: 50%; left: 50%; padding: 10px; transform: translate(-50%, -50%)">' +
          '<div style="padding: 2px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 50%;">' +
          '<div style="padding: 5px; background-color: #4A69F3; border-radius: 50%"></div>' +
          "</div>" +
          "</div>" +
          "</div>"
        );
      };
      // 커스텀 마커 현재 위치

      // 현재위치 마커 표시 (현재위치 허용일 경우)
      if (myLocation.allow) {
        // setInterval(() => {
        const myPosition = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            currentPosition[0],
            currentPosition[1]
          ),
          map: mapRef.current,
          icon: {
            content: [currentIcon("")].join(""),
          },
        });
        // }, 2500);
      }
      // 현재위치 마커 표시 (현재위치 허용일 경우)

      // zoom 변동시 작동되는 함수
      // naver.maps.Event.addListener(mapRef.current, "zoom_changed", function () {
      //   console.log("zoom_change");
      //   // updateMarker(map, markers);
      // });
      // zoom 변동시 작동되는 함수

      // drag 변동시 작동되는 함수
      // naver.maps.Event.addListener(mapRef.current, "dragend", function () {
      //   console.log("drag");
      //   // updateMarker(map, markers);
      // });
      // drag 변동시 작동되는 함수

      // 커스텀 마커
      const customMarker = (e: string) => {
        return "<div></div>";
      };
      // 커스텀 마커

      // 마커 갯수 테스트용
      // const makerTest = () => {
      //   const bounds = mapRef.current.getBounds(),
      //     markersLength = 500,
      //     southWest = bounds.getSW(),
      //     northEast = bounds.getNE(),
      //     lngSpan = northEast.lng() - southWest.lng(),
      //     latSpan = northEast.lat() - southWest.lat();
      //
      //   for (let i = 0; i < markersLength; i++) {
      //     const randomPosition = new naver.maps.LatLng(
      //       southWest.lat() + latSpan * Math.random(),
      //       southWest.lng() + lngSpan * Math.random()
      //     );
      //     const marker = new naver.maps.Marker({
      //       position: randomPosition,
      //       map: mapRef.current,
      //     });
      //   }
      // };
      // makerTest();
      // 마커 갯수 테스트용

      markers = markers.map((item: { latitude: number; longitude: number }) => {
        let markerPosition = new naver.maps.LatLng(
          item.latitude,
          item.longitude
        );
        return new naver.maps.Marker({
          ...item,
          map: mapRef.current,
          position: markerPosition,
          // animation: naver.maps.Animation.DROP,
          // icon: {
          //   content: [customIcon("")].join(""),
          //   size: new naver.maps.Size(38, 58),
          //   anchor: new naver.maps.Point(19, 58),
          // },
          // });
        });
      });

      // 마커 인포창
      let infoWindows: any = [];
      for (let i = 0; i < markers.length; i++) {
        const infoContent = [
          "<div style='background-color: #000; color: white; padding: 10px 10px 8px;'>" +
            markers[i].id +
            markers[i].category +
            "</div>",
        ].join("");
        const infoWindow = new naver.maps.InfoWindow({
          content: infoContent,
          disableAnchor: true,
        });
        infoWindows.push(infoWindow);
      }
      naver.maps.Event.addListener(mapRef.current, "idle", function () {
        updateMarkers(mapRef.current, markers);
      });
      // 마커 인포창

      // 마커 추가
      const updateMarkers = function (map: any, markers: any) {
        let mapBounds = mapRef.current.getBounds();
        let marker, position, markerState;
        for (let i = 0; i < markers.length; i++) {
          marker = markers[i];
          markerState = markers[i].markerState;
          position = marker.getPosition();
          if (mapBounds.hasLatLng(position) && markerState === true) {
            showMarker(mapRef.current, marker);
          } else {
            hideMarker(mapRef.current, marker);
          }
        }
      };
      // 마커 인포창

      const showMarker = (map: any, marker: any) => {
        if (marker.getMap()) return;
        marker.setMap(map);
      };

      const hideMarker = (map: any, marker: any) => {
        if (!marker.getMap()) return;
        marker.setMap(null);
      };

      const getClickHandler = (seq: any) => {
        return function (e: any) {
          const marker = markers[seq],
            infoWindow = infoWindows[seq],
            markerPosition = new naver.maps.LatLng(
              markers[seq].latitude,
              markers[seq].longitude
            );
          if (infoWindow.getMap()) {
            infoWindow.close();
          } else {
            // mapRef.current.morph(markerPosition, 17); // 이동후 줌인
            mapRef.current.panTo(markerPosition); // 이동
            // setTimeout(() => {
            infoWindow.open(mapRef.current, marker);
            // }, 600);
          }
        };
      };

      for (let i = 0, ii = markers.length; i < ii; i++) {
        naver.maps.Event.addListener(markers[i], "click", getClickHandler(i));
      }

      updateMarkers(mapRef.current, markers);
    }
  }, [myLocation]);

  // geocode 를 통한 위치 검색 > 위도 경도 반환
  // const [geocodeX, setGeocodeX] = useState("");
  // const [geocodeY, setGeocodeY] = useState("");

  // useEffect(() => {
  //   naver.maps.Service.geocode(
  //     { query: "언주로 637" },
  //     function (status, response) {
  //       if (status === naver.maps.Service.Status.ERROR) {
  //         console.log("fail! status code : " + status);
  //       } else {
  //         console.log("Success", response);
  //         setGeocodeX(response.v2.addresses[0].x);
  //         setGeocodeY(response.v2.addresses[0].y);
  //       }
  //     }
  //   );
  // });
  // geocode 를 통한 위치 검색 > 위도 경도 반환

  return {
    myLocation,
  };
}

export default useMap;
