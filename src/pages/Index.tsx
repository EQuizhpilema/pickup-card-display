import React, { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import SubscribeButton from "@/components/SubscribeButton";
import NewPickupButton from "@/components/NewPickupButton";
import PickupInfoCard from "@/components/PickupInfoCard";
import DeliveryCardsContainer, { Delivery } from "@/components/DeliveryCardsContainer";
import { Button } from "@/components/ui/button";

const INITIAL_DELIVERIES: Delivery[] = [
  {
    id: "christies",
    destination: "Christie's New York",
    location: { title: "Christie's New York", address1: "20 Rockefeller Plaza", address2: "", city: "New York", state: "NY", zip: "10020" },
    contact: { name: "", phone: "(212) 636-2000" },
    shipmentDetails: { handlingUnits: 2, weight: 250, freightDescription: "Crate", deliveryService: "Guaranteed service" },
  },
  {
    id: "sothebys",
    destination: "Sotheby's NY",
    location: { title: "Sotheby's", address1: "1334 York Avenue", address2: "", city: "New York", state: "NY", zip: "10021" },
    contact: { name: "", phone: "(212) 606-7000" },
    shipmentDetails: { handlingUnits: 1, weight: 175, freightDescription: "Wooden Box", deliveryService: "Standard service" },
  },
  {
    id: "phillips",
    destination: "Phillips De Pury in NY",
    location: { title: "Phillips De Pury", address1: "450 Park Avenue", address2: "", city: "New York", state: "NY", zip: "10022" },
    contact: { name: "", phone: "(212) 940-1200" },
    shipmentDetails: { handlingUnits: 3, weight: 320, freightDescription: "Art Packaging", deliveryService: "Premium service" },
  },
];

const PICKUP_ID = "PU12716";

const Index = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>(INITIAL_DELIVERIES);
  const [canceled, setCanceled] = useState(false);

  const totalHandlingUnits = deliveries.reduce((s, d) => s + d.shipmentDetails.handlingUnits, 0);
  const totalWeight = deliveries.reduce((s, d) => s + d.shipmentDetails.weight, 0);

  const handleRemoveDelivery = (id: string) => {
    const removed = deliveries.find((d) => d.id === id);
    if (!removed) return;
    const prev = deliveries;
    const wasLast = deliveries.length === 1;
    setDeliveries((curr) => curr.filter((d) => d.id !== id));
    if (wasLast) {
      setCanceled(true);
      toast(`Pickup ${PICKUP_ID} canceled`, {
        action: {
          label: "Undo",
          onClick: () => {
            setCanceled(false);
            setDeliveries(prev);
          },
        },
      });
      return;
    }
    toast(`Removed ${removed.destination}`, {
      action: { label: "Undo", onClick: () => setDeliveries(prev) },
    });
  };

  const handleCancelPickup = () => {
    const prevDeliveries = deliveries;
    setCanceled(true);
    toast(`Pickup ${PICKUP_ID} canceled`, {
      action: {
        label: "Undo",
        onClick: () => {
          setCanceled(false);
          setDeliveries(prevDeliveries);
        },
      },
    });
  };

  const restorePickup = () => {
    setCanceled(false);
    setDeliveries(INITIAL_DELIVERIES);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Pickup Details" />

      <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6">
        {canceled ? (
          <div className="card mb-4">
            <div className="card-body text-center py-5">
              <h5 className="mb-2">Pickup {PICKUP_ID} was canceled</h5>
              <p className="text-muted small mb-3">All associated deliveries were removed.</p>
              <Button variant="outline" onClick={restorePickup}>Undo cancellation</Button>
            </div>
          </div>
        ) : (
          <>
            <PickupInfoCard
              id={PICKUP_ID}
              location={{
                title: "Ossining High School - SBHC",
                address1: "29 S Highland Ave",
                address2: "",
                city: "Ossining",
                state: "NY",
                zip: "10562",
              }}
              time={{ date: "03/21/25", startTime: "10:00", endTime: "11:30" }}
              contact={{ name: "Mrs. Glick", phone: "(914) 923-4740" }}
              shipmentDetails={{
                units: totalHandlingUnits,
                weight: totalWeight,
                combinedDeliveriesNote:
                  deliveries.length > 0
                    ? `Combined deliveries to ${deliveries.map((d) => d.destination).join(", ")}`
                    : "",
                specialInstructions: "",
              }}
              onCancel={handleCancelPickup}
            />

            <SubscribeButton />

            <DeliveryCardsContainer deliveries={deliveries} onRemove={handleRemoveDelivery} />

            <NewPickupButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
