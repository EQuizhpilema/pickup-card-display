
import React from "react";
import { Button } from "@/components/ui/button";

const SubscribeButton: React.FC = () => {
  return (
    <div className="flex justify-center my-4">
      <Button 
        variant="secondary" 
        className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2"
      >
        <span className="mr-2">Subscribe to alerts</span>
      </Button>
    </div>
  );
};

export default SubscribeButton;
