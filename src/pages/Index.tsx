
import React from "react";
import PickupCard from "@/components/PickupCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Calculate totals from all deliveries
  const totalHandlingUnits = 2 + 1 + 3; // Christie's + Sotheby's + Phillips
  const totalWeight = 250 + 175 + 320; // Christie's + Sotheby's + Phillips

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6">
          <h1 className="text-xl font-semibold text-center text-gray-800">Pickup Details</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
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
            specialInstructions: "Combined deliveries to Christie's, Sotheby's, and Phillips"
          }}
        />
        
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
        
        <div className="flex justify-center mt-6">
          <Button 
            variant="default" 
            className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2"
          >
            Enter another pickup <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
