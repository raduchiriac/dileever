import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { database } from "../lib/firebase";
import { useList } from "react-firebase-hooks/database";
import { useTheme } from "@material-ui/styles";
import { iconMarker } from "./Icons.js";
import { Fragment } from "react";
import Backdrop from "../components/Backdrop";
import "leaflet/dist/leaflet.css";

const LeafletMap = ({ center }) => {
  const theme = useTheme();

  const [snapshots, loading, error] = useList(database.ref("orders"));

  const providers = {
    dark: "alidade_smooth_dark",
    light: "osm_bright",
  };

  return (
    <Fragment>
      <style>{`.leaflet-container { width: 100%; } .leaflet-tile-pane { filter: grayscale(1); }`}</style>
      {error && <strong>Error: {error}</strong>}
      {loading && <Backdrop />}
      {!loading && snapshots && (
        <MapContainer center={center} zoom={15} scrollWheelZoom={true}>
          <TileLayer attribution="" url={`https://tiles.stadiamaps.com/tiles/${providers[theme.palette.type]}/{z}/{x}/{y}{r}.png?api_key=${process.env.NEXT_PUBLIC_LEAFLET_TILE_KEY}`} />
          {snapshots.map((v) => {
            const order = v.val();
            return (
              <Marker
                key={v.key}
                eventHandlers={{
                  click: () => {
                    console.log(order.address);
                  },
                }}
                position={[order.location.lat, order.location.lng]}
                icon={iconMarker(order.status)}
              ></Marker>
            );
          })}
        </MapContainer>
      )}
    </Fragment>
  );
};

export default LeafletMap;
