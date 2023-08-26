import { BigPingIcon, PingIcon } from './icon';

export const DefaultMarkerImage = (isDone: boolean) => {
  return new window.kakao.maps.MarkerImage(
    PingIcon(isDone),
    new window.kakao.maps.Size(51, 71),
  );
};

export const EnlargedMarkerImage = (isDone: boolean) => {
  return new window.kakao.maps.MarkerImage(
    PingIcon(isDone),
    new window.kakao.maps.Size(61, 81),
  );
};

export const createClusterer = (map: any, isDone: boolean) => {
  return new window.kakao.maps.MarkerClusterer({
    map,
    averageCenter: true,
    minLevel: 5,
    gridSize: 70,
    styles: [
      {
        width: '130px',
        height: '95px',
        background: `url(${BigPingIcon(isDone)})`,
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        backgroundPosition: '15px 1px',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '25px',
      },
    ],
  });
};
