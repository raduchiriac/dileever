import dynamic from "next/dynamic";
import { CITY_CENTER } from "../lib/constants";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/LeafletMap.js"), {
  ssr: false,
});

const Map = () => <DynamicComponentWithNoSSR center={CITY_CENTER} />;

export default Map;
