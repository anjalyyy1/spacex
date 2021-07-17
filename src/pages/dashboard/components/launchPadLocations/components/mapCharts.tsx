import { get, map } from 'lodash';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

type Props = {
  locations: any[];
};

const getMarkerData = (locations: any) => {
  const markers = map(locations, eachLocation => {
    return {
      markerOffset: -15,
      name: get(eachLocation, `name`),
      // [lon, lat]
      coordinates: [
        get(eachLocation, `location.longitude`),
        get(eachLocation, `location.latitude`),
      ],
    };
  });

  return markers;
};

const MapChart: React.FunctionComponent<Props> = props => {
  const { locations } = props;
  const markers = getMarkerData(locations);

  return (
    <ComposableMap projection="geoEqualEarth">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>

      {markers.map(({ name, coordinates, markerOffset }: any) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={3} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
