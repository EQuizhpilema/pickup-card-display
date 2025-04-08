
import React from "react";
import Header from "@/components/Header";
import SubscribeButton from "@/components/SubscribeButton";
import NewPickupButton from "@/components/NewPickupButton";
import PickupInfoCard from "@/components/PickupInfoCard";
import DeliveryCardsContainer from "@/components/DeliveryCardsContainer";

const Index = () => {
  // Calculate totals from all deliveries
  const totalHandlingUnits = 2 + 1 + 3; // Christie's + Sotheby's + Phillips
  const totalWeight = 250 + 175 + 320; // Christie's + Sotheby's + Phillips

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Pickup Details" />

      <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6">
        <PickupInfoCard
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
        
        <DeliveryCardsContainer />
        
        <NewPickupButton />
      </div>
    </div>
  );
};

export default Index;
