import React, { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function DataTable({ columns, data }) {
  const [filter, setFilter] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedRows, setSelectedRows] = useState(new Set());

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSort = (column) => {
    const newDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newDirection);
  };

  const handleSelectAll = (e) => {
    const newSelectedRows = new Set();
    if (e.target.checked) {
      filteredData.forEach((row) => newSelectedRows.add(row.name));
    }
    setSelectedRows(newSelectedRows);
  };

  const handleSelectRow = (e, rowName) => {
    const newSelectedRows = new Set(selectedRows);
    if (e.target.checked) {
      newSelectedRows.add(rowName);
    } else {
      newSelectedRows.delete(rowName);
    }
    setSelectedRows(newSelectedRows);
  };

  const handleBulkAction = () => {
    const selectedData = data.filter((row) => selectedRows.has(row.name));
    console.log("Bulk action on:", selectedData);
  };

  const filteredData = data.filter((row) =>
    columns.some((column) =>
      row[column.accessor]
        .toString()
        .toLowerCase()
        .includes(filter.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
  return (
    <div className="tableContainer">
      <div className="tableheadrCont">
        <div className="tableTitle">
          <span>Recent Activities</span>
        </div>
        <div className="tableactions">
          <div>
            <ArrowDownwardIcon />
            <SortIcon />
            <span>Sort</span>
          </div>
          <div>
            <FilterListIcon />
            <span>Filter</span>
          </div>
          <div>
            <input type="checkbox" onChange={handleSelectAll} />
            <span>Bulk actions</span>
          </div>
          <div>
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                onClick={() => handleSort(column.accessor)}
              >
                {column.Header}
                {sortColumn === column.accessor
                  ? sortDirection === "asc"
                    ? " 🔼"
                    : " 🔽"
                  : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.name}>
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/*<button onClick={handleBulkAction}>Bulk Action</button>*/}
    </div>
  );
}

export default DataTable;
