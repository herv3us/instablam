function GeoModal({ children }) {
  return (
    <div className="geomodal-backdrop">
      <div className="geomodal">{children}</div>
    </div>
  );
}

export default GeoModal;
