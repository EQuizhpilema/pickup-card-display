
import React from "react";
import PickupCard from "@/components/PickupCard";
import Header from "@/components/Header";
import SubscribeButton from "@/components/SubscribeButton";
import NewPickupButton from "@/components/NewPickupButton";

const Index = () => {
  // Calculate totals from all deliveries
  const totalHandlingUnits = 2 + 1 + 3; // Christie's + Sotheby's + Phillips
  const totalWeight = 250 + 175 + 320; // Christie's + Sotheby's + Phillips

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Pickup Details" />

      <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6">
        <PickupCard
          type="pickup"
          id="PU12716"
          location={{
            title: "Ossining High School - SBHC",
            address1: "29 S Highland Ave",
            address2: "",
            city: "Ossining",
            state: "NY",
            zip: "10562"
          }}
          time={{
            date: "03/21/25",
            startTime: "10:00",
            endTime: "11:30"
          }}
          contact={{
            name: "Mrs. Glick",
            phone: "(914) 923-4740"
          }}
          shipmentDetails={{
            units: totalHandlingUnits,
            weight: totalWeight,
            combinedDeliveriesNote: "Combined deliveries to Christie's, Sotheby's and Phillips",
            specialInstructions: ""
          }}
        />
        
        <SubscribeButton />
        
        <PickupCard
          type="delivery"
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
        
        <PickupCard
          type="delivery"
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
        
        <PickupCard
          type="delivery"
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
        
        <NewPickupButton />
      </div>
    </div>
  );
};

export default Index;
