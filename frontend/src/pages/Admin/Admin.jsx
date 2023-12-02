import React, { useState } from "react";
import "./Admin.css";
import { CreateAdmin } from "../../Utils/ContractHelpers/CreateAdmin";
const Admin = () => {
  return (
    <div>
      <CreateAdmin />
    </div>
  );
};

export default Admin;
