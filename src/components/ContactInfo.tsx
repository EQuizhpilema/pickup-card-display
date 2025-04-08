
import React from "react";

interface ContactInfoProps {
  name?: string;
  phone: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ name, phone }) => {
  return (
    <div className="d-flex align-items-start">
      <i className="fas fa-user me-2 text-muted mt-1"></i>
      <div>
        <div className="fw-medium">Contact</div>
        <div className="small text-muted">
          {name && <div>{name}</div>}
          <div className="text-primary">{phone}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
