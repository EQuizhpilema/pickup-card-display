
import React from "react";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const SubscribeButton: React.FC = () => {
  return (
    <div className="flex justify-center my-4">
      <Button 
        className="bg-[#1E90FF] hover:bg-[#4169E1] text-white rounded-full px-6 py-2"
      >
        <Bell className="mr-2 h-4 w-4" />
        <span>Subscribe to alerts</span>
      </Button>
    </div>
  );
};

export default SubscribeButton;
