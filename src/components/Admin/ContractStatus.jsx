// ContractStatus.js
import React, { useState } from "react";
import "./ContractStatus.css";

function ContractStatus() {
  const [contractData, setContractData] = useState([
    { id: 1, username: "John Doe", contractEndDate: "2025-06-30", status: "Active" },
    { id: 2, username: "Jane Smith", contractEndDate: "2025-12-15", status: "Expired" },
  ]);

  return (
    <div className="contract-status-container">
      <h2>Intern Contract Status</h2>
      <table className="contract-status-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Contract End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {contractData.map((contract) => (
            <tr key={contract.id}>
              <td>{contract.username}</td>
              <td>{contract.contractEndDate}</td>
              <td>{contract.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContractStatus;
