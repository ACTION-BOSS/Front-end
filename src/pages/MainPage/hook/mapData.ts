import { useQuery } from '@tanstack/react-query';
import { Coordinates } from '../type';
import { getMapPing } from '../../../api';

export const useMapDataQuery = (
  isDone: boolean,
  mapCoordinates: Coordinates,
) => {
  return useQuery(['mapData', isDone, mapCoordinates], () =>
    getMapPing(isDone, mapCoordinates),
  );
};
