import React from "react";
import DeliveryCard from "./DeliveryCard";

export interface Delivery {
  id: string;
  destination: string;
  location: {
    title: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
  };
  contact: { name?: string; phone: string };
  shipmentDetails: {
    handlingUnits: number;
    weight: number;
    freightDescription: string;
    deliveryService: string;
  };
}

interface Props {
  deliveries: Delivery[];
  onRemove: (id: string) => void;
}

const DeliveryCardsContainer: React.FC<Props> = ({ deliveries, onRemove }) => {
  return (
    <>
      {deliveries.map((d) => (
        <DeliveryCard
          key={d.id}
          destination={d.destination}
          location={d.location}
          contact={d.contact}
          shipmentDetails={d.shipmentDetails}
          onRemove={() => onRemove(d.id)}
        />
      ))}
    </>
  );
};

export default DeliveryCardsContainer;
