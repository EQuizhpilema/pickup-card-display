import React from "react";
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
import { XCircle } from "lucide-react";

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
  onCancel?: () => void;
  emptyDeliveriesWarning?: boolean;
}

const PickupInfoCard: React.FC<PickupInfoCardProps> = ({
  id,
  location,
  time,
  contact,
  shipmentDetails,
  onCancel,
  emptyDeliveriesWarning,
}) => {
  return (
    <div className="card mb-4">
      <div className="card-header pb-2 d-flex align-items-center justify-content-between">
        <h5 className="card-title mb-0">
          Pickup Details {id}
        </h5>
        {onCancel && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full bg-destructive/10 text-destructive hover:bg-destructive/20 hover:text-destructive px-4"
              >
                <XCircle className="mr-1 h-4 w-4" />
                Cancel pickup
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Cancel this pickup?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will cancel pickup {id} and remove all associated deliveries. This action can't be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep pickup</AlertDialogCancel>
                <AlertDialogAction
                  onClick={onCancel}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Cancel pickup
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
      <hr className="my-0" />
      <div className="card-body pt-4">
        {emptyDeliveriesWarning && (
          <div className="mb-3 rounded border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            This pickup has no deliveries. Add a stop or cancel the pickup.
          </div>
        )}
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
