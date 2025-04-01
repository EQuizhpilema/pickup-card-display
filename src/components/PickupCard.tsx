import React from "react";
import { Clock, MapPin, User, Phone, Package, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ContactInfo {
  name: string;
  phone: string;
}

interface LocationInfo {
  title: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

interface TimeInfo {
  date: string;
  startTime: string;
  endTime: string;
}

interface ShipmentDetails {
  units?: number;
  weight?: number;
  handlingUnits?: number;
  freightDescription?: string;
  specialInstructions?: string;
  deliveryService?: string;
}

interface PickupCardProps {
  type: "pickup" | "delivery";
  id?: string;
  location: LocationInfo;
  time?: TimeInfo;
  contact: ContactInfo;
  shipmentDetails: ShipmentDetails;
  destination?: string;
}

const PickupCard: React.FC<PickupCardProps> = ({
  type,
  id,
  location,
  time,
  contact,
  shipmentDetails,
  destination,
}) => {
  return (
    <Card className="mb-5 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg font-medium">
          {type === "pickup" ? (
            <span>
              Pickup Details {id && `${id}`}
            </span>
          ) : (
            <span>
              Delivery Details: {destination}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            {time && (
              <div className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                  <div className="font-medium">Pickup schedule</div>
                  <div className="text-sm text-gray-600">
                    {time.date} between {time.startTime} and {time.endTime}
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <div className="font-medium">
                  {type === "pickup" ? "Pickup from location" : "Deliver to location"}
                </div>
                <div className="text-sm text-gray-600">
                  <div className="text-blue-600">{location.title}</div>
                  <div>{location.address1}</div>
                  <div>
                    {location.city}, {location.state} {location.zip}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <User className="mr-2 h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <div className="font-medium">Contact</div>
                <div className="text-sm text-gray-600">
                  <div>{contact.name}</div>
                  <div className="text-blue-600">{contact.phone}</div>
                </div>
              </div>
            </div>

            {type === "pickup" && (
              <div className="space-y-2">
                <div className="text-sm space-y-1">
                  {shipmentDetails.units && (
                    <div>
                      <span className="font-medium">Total units:</span> {shipmentDetails.units}
                    </div>
                  )}
                  {shipmentDetails.handlingUnits && (
                    <div>
                      <span className="font-medium">Handling units:</span> {shipmentDetails.handlingUnits}
                    </div>
                  )}
                  {shipmentDetails.weight && (
                    <div>
                      <span className="font-medium">Total weight:</span> {shipmentDetails.weight}
                    </div>
                  )}
                  {shipmentDetails.specialInstructions && (
                    <div>
                      <span className="font-medium">Special pickup instructions:</span>{" "}
                      {shipmentDetails.specialInstructions}
                    </div>
                  )}
                </div>

                <Button
                  variant="secondary" 
                  className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2 w-full"
                >
                  <span className="mr-2">Subscribe to alerts</span>
                </Button>
              </div>
            )}
          </div>

          <div className="space-y-2">
            {type === "delivery" && (
              <div className="text-sm space-y-1">
                {shipmentDetails.handlingUnits && (
                  <div>
                    <span className="font-medium">Handling units:</span> {shipmentDetails.handlingUnits}
                  </div>
                )}
                {shipmentDetails.weight && (
                  <div>
                    <span className="font-medium">Weight:</span> {shipmentDetails.weight}
                  </div>
                )}
                {shipmentDetails.freightDescription && (
                  <div>
                    <span className="font-medium">Freight description:</span>{" "}
                    {shipmentDetails.freightDescription}
                  </div>
                )}
                {shipmentDetails.deliveryService && (
                  <div>
                    <span className="font-medium">Delivery service:</span>{" "}
                    <span className="uppercase text-green-600 font-medium">
                      {shipmentDetails.deliveryService}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PickupCard;
