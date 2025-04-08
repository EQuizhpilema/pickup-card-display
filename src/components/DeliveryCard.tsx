
import React from "react";
import LocationInfo from "./LocationInfo";
import ContactInfo from "./ContactInfo";

interface DeliveryCardProps {
  destination: string;
  location: {
    title: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
  };
  contact: {
    name?: string;
    phone: string;
  };
  shipmentDetails: {
    handlingUnits: number;
    weight: number;
    freightDescription: string;
    deliveryService: string;
  };
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({
  destination,
  location,
  contact,
  shipmentDetails
}) => {
  return (
    <div className="card mb-4">
      <div className="card-header pb-2">
        <h5 className="card-title mb-0">
          Delivery Details: {destination}
        </h5>
      </div>
      <hr className="my-0" />
      <div className="card-body pt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-4">
              <LocationInfo {...location} />
            </div>

            <div className="mb-4">
              <ContactInfo {...contact} />
            </div>
          </div>

          <div className="col-md-6">
            <div>
              <div className="fw-medium">Shipment details</div>
              <div className="small">
                <div>
                  <span className="fw-medium">Handling units:</span> {shipmentDetails.handlingUnits}
                </div>
                <div>
                  <span className="fw-medium">Weight:</span> {shipmentDetails.weight}
                </div>
                <div>
                  <span className="fw-medium">Freight description:</span> {shipmentDetails.freightDescription}
                </div>
                <div>
                  <span className="fw-medium">Delivery service:</span> 
                  <span className="text-success text-uppercase fw-medium">{shipmentDetails.deliveryService}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
