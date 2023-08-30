import { BigPingIcon, BigPingSmallIcon, PingIcon, PingSmallIcon } from './icon';

const WINDOWSIZE = window.innerWidth <= 576;

export const DefaultMarkerImage = (isDone: boolean) => {
  return new window.kakao.maps.MarkerImage(
    WINDOWSIZE ? PingSmallIcon(isDone) : PingIcon(isDone),
    WINDOWSIZE
      ? new window.kakao.maps.Size(38, 55)
      : new window.kakao.maps.Size(45, 65),
  );
};

export const EnlargedMarkerImage = (isDone: boolean) => {
  return new window.kakao.maps.MarkerImage(
    PingIcon(isDone),
    WINDOWSIZE
      ? new window.kakao.maps.Size(45, 65)
      : new window.kakao.maps.Size(55, 75),
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
        width: WINDOWSIZE ? '93px' : '130px',
        height: WINDOWSIZE ? '67px' : '95px',
        background: WINDOWSIZE
          ? `url(${BigPingSmallIcon(isDone)})`
          : `url(${BigPingIcon(isDone)})`,
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        backgroundPosition: WINDOWSIZE ? '6px 1px' : '15px 1px',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '25px',
        objectFit: 'contain',
      },
    ],
  });
};
