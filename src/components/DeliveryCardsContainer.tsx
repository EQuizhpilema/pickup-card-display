
import React from "react";
import DeliveryCard from "./DeliveryCard";

const DeliveryCardsContainer: React.FC = () => {
  return (
    <>
      <DeliveryCard
        destination="Christie's New York"
        location={{
          title: "Christie's New York",
          address1: "20 Rockefeller Plaza",
          address2: "",
          city: "New York",
          state: "NY",
          zip: "10020"
        }}
        contact={{
          name: "",
          phone: "(212) 636-2000"
        }}
        shipmentDetails={{
          handlingUnits: 2,
          weight: 250,
          freightDescription: "Crate",
          deliveryService: "Guaranteed service"
        }}
      />

      <DeliveryCard
        destination="Sotheby's NY"
        location={{
          title: "Sotheby's",
          address1: "1334 York Avenue",
          address2: "",
          city: "New York",
          state: "NY",
          zip: "10021"
        }}
        contact={{
          name: "",
          phone: "(212) 606-7000"
        }}
        shipmentDetails={{
          handlingUnits: 1,
          weight: 175,
          freightDescription: "Wooden Box",
          deliveryService: "Standard service"
        }}
      />

      <DeliveryCard
        destination="Phillips De Pury in NY"
        location={{
          title: "Phillips De Pury",
          address1: "450 Park Avenue",
          address2: "",
          city: "New York",
          state: "NY",
          zip: "10022"
        }}
        contact={{
          name: "",
          phone: "(212) 940-1200"
        }}
        shipmentDetails={{
          handlingUnits: 3,
          weight: 320,
          freightDescription: "Art Packaging",
          deliveryService: "Premium service"
        }}
      />
    </>
  );
};

export default DeliveryCardsContainer;
