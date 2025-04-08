
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";

const NewPickupButton: React.FC = () => {
  return (
    <div className="flex justify-center mt-6">
      <Button 
        className="bg-[#1E90FF] hover:bg-[#4169E1] text-white rounded-full px-6 py-2"
      >
        <Plus className="mr-1 h-4 w-4" />
        Enter another pickup 
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default NewPickupButton;
