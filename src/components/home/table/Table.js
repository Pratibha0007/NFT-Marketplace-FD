import React from "react";
import DataTable from "./DataTable";
import { Link } from "react-router-dom";
function Table() {
  const columns = [
    { Header: "NFT Name", accessor: "nftname" },
    { Header: "ID", accessor: "id" },
    { Header: "NFT Name", accessor: "nftName" },
    { Header: "ID", accessor: "idb" },
    { Header: "Created On", accessor: "createdon" },
    { Header: "Status", accessor: "status" },
    { Header: "Action", accessor: "action" },
  ];

  const data = [
    {
      nftname: "John Doe",
      id: "1231S87a",
      nftName: "NFT One",
      idb: "T 1231S87a",
      createdon: "13/01/2024",
      status: "NFT is ready to be published in the marketplace",
      action: (
        <Link to="/ntf">
          <button>View</button>
        </Link>
      ),
    },
    {
      nftname: "John Doe",
      id: "1231S87a",
      nftName: "NFT One",
      idb: "T 1231S87a",
      createdon: "13/01/2024",
      status: "NFT is ready to be published in the marketplace",
      action: (
        <Link to="/ntf">
          <button>View</button>
        </Link>
      ),
    },
    {
      nftname: "John Doe",
      id: "1231S87a",
      nftName: "NFT One",
      idb: "T 1231S87a",
      createdon: "13/01/2024",
      status: "NFT is ready to be published in the marketplace",
      action: (
        <Link to="/ntf">
          <button>View</button>
        </Link>
      ),
    },
    {
      nftname: "John Doe",
      id: "1231S87a",
      nftName: "NFT One",
      idb: "T 1231S87a",
      createdon: "13/01/2024",
      status: "NFT is ready to be published in the marketplace",
      action: (
        <Link to="/ntf">
          <button>View</button>
        </Link>
      ),
    },
    {
      nftname: "John Doe",
      id: "1231S87a",
      nftName: "NFT One",
      idb: "T 1231S87a",
      createdon: "13/01/2024",
      status: "NFT is ready to be published in the marketplace",
      action: (
        <Link to="/ntf">
          <button>View</button>
        </Link>
      ),
    },
    {
      nftname: "John Doe",
      id: "1231S87a",
      nftName: "NFT One",
      idb: "T 1231S87a",
      createdon: "13/01/2024",
      status: "NFT is ready to be published in the marketplace",
      action: (
        <Link to="/ntf">
          <button>View</button>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default Table;
