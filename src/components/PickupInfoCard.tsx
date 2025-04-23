import React from "react";

interface PickupInfoCardProps {
  id: string;
  location: {
    title: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
  };
  time: {
    date: string;
    startTime: string;
    endTime: string;
  };
  contact: {
    name: string;
    phone: string;
  };
  shipmentDetails: {
    units: number;
    weight: number;
    combinedDeliveriesNote: string;
    specialInstructions: string;
  };
}

const PickupInfoCard: React.FC<PickupInfoCardProps> = ({
  id,
  location,
  time,
  contact,
  shipmentDetails
}) => {
  return (
    <div className="card mb-4">
      <div className="card-header pb-2">
        <h5 className="card-title mb-0">
          Pickup Details {id}
        </h5>
      </div>
      <hr className="my-0" />
      <div className="card-body pt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-4">
              <div className="d-flex align-items-start">
                <i className="far fa-clock me-2 text-muted mt-1"></i>
                <div>
                  <div className="fw-medium">Pickup schedule</div>
                  <div className="small text-muted">
                    {time.date} between {time.startTime} and {time.endTime}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex align-items-start">
                <i className="fas fa-map-marker-alt me-2 text-muted mt-1"></i>
                <div>
                  <div className="fw-medium">Pickup from location</div>
                  <div className="small text-muted">
                    <div className="text-primary">{location.title}</div>
                    <div>{location.address1}</div>
                    {location.address2 && <div>{location.address2}</div>}
                    <div>{location.city}, {location.state} {location.zip}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex align-items-start">
                <i className="fas fa-user me-2 text-muted mt-1"></i>
                <div>
                  <div className="fw-medium">Contact</div>
                  <div className="small text-muted">
                    <div>{contact.name}</div>
                    <div className="text-primary">{contact.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-outline-primary btn-sm" style={{ background: "#e6f0ff" }}>
              <i className="fas fa-phone me-2"></i> Add to address book
            </button>
          </div>

          <div className="col-md-6">
            <div>
              <div className="fw-medium">Shipment details</div>
              <div className="small">
                <div>
                  <span className="fw-medium">Total units:</span> {shipmentDetails.units}
                </div>
                <div>
                  <span className="fw-medium">Total weight:</span> {shipmentDetails.weight} lbs
                </div>
                <div>
                  {shipmentDetails.combinedDeliveriesNote}
                </div>
                <div className="mt-3">
                  <span className="fw-medium">Shipper Ref #:</span> CO-8007
                </div>
                <div>
                  <span className="fw-medium">Terminal:</span> BOI
                </div>
                <div>
                  <span className="fw-medium">Requested Date:</span> 03/15/2025
                </div>
                <div className="fw-bold mt-2">Special Pickup Instructions</div>
                <div>Use Dock 4 when Loading</div>
                <div className="fw-bold mt-2">Equipment Required</div>
                <div>Liftgate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupInfoCard;
