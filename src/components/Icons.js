import L from "leaflet";

const iconMarker = (status = 0) => {
  const fill = ["#FF1111", "#67BA11", "#563388"][status];
  const svg_order = `<svg viewBox="0 0 22 30" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><g id="Interface-Solid"><g id="interface-solid-pin-mark"><circle cx="11" cy="11" fill="none" r="4"/><path fill="${fill}" d="M11,0A11.01245,11.01245,0,0,0,0,11C0,21.36133,9.95166,29.44238,10.37549,29.78125a1.00083,1.00083,0,0,0,1.249,0C12.04834,29.44238,22,21.36133,22,11A11.01245,11.01245,0,0,0,11,0Zm0,15a4,4,0,1,1,4-4A4.00008,4.00008,0,0,1,11,15Z"/></g></g></g></svg>`;
  const iconUrl = "data:image/svg+xml;base64," + btoa(svg_order);

  return new L.Icon({
    iconUrl,
    iconRetinaUrl: iconUrl,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 50),
  });
};

export { iconMarker };
