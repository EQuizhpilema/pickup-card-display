
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NewPickupButton: React.FC = () => {
  return (
    <div className="flex justify-center mt-6">
      <Button 
        variant="default" 
        className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2"
      >
        Enter another pickup <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default NewPickupButton;
