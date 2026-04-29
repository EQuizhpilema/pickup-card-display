
import React from "react";
import LocationInfo from "./LocationInfo";
import ContactInfo from "./ContactInfo";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

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
  onRemove?: () => void;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({
  destination,
  location,
  contact,
  shipmentDetails,
  onRemove,
}) => {
  return (
    <div className="card mb-4">
      <div className="card-header pb-2 d-flex align-items-center justify-content-between">
        <h5 className="card-title mb-0">
          Delivery Details: {destination}
        </h5>
        {onRemove && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full text-destructive hover:bg-destructive/10 hover:text-destructive px-3"
              >
                <Trash2 className="mr-1 h-4 w-4" />
                Remove stop
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Remove delivery to {destination}?</AlertDialogTitle>
                <AlertDialogDescription>
                  This stop will be removed from the pickup and the totals will be recalculated.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep stop</AlertDialogCancel>
                <AlertDialogAction
                  onClick={onRemove}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Remove stop
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
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
                  <span className="fw-medium">Weight:</span> {shipmentDetails.weight} lbs
                </div>
                <div>
                  <span className="fw-medium">Freight description:</span> {shipmentDetails.freightDescription}
                </div>
                <div>
                  <span className="fw-medium">Delivery service:</span> 
                  <span className="text-success text-uppercase fw-medium">{shipmentDetails.deliveryService}</span>
                </div>
                
                <div className="mb-2"></div>
                
                <div>
                  <span className="fw-medium">Terminal:</span> PDX
                </div>
                <div>
                  <span className="fw-medium">Destination Partner Carrier:</span> Diamond Line
                </div>
                <div>
                  <span className="fw-medium">Delivery Direct Point:</span> <span className="text-success">YES</span>
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

