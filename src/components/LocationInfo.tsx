
import React from "react";

interface LocationInfoProps {
  title: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
}

const LocationInfo: React.FC<LocationInfoProps> = ({
  title,
  address1,
  address2,
  city,
  state,
  zip
}) => {
  return (
    <div className="d-flex align-items-start">
      <i className="fas fa-map-marker-alt me-2 text-muted mt-1"></i>
      <div>
        <div className="fw-medium">Deliver to location</div>
        <div className="small text-muted">
          <div className="text-primary">{title}</div>
          <div>{address1}</div>
          {address2 && <div>{address2}</div>}
          <div>{city}, {state} {zip}</div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
