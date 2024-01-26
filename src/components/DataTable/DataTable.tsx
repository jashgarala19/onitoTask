import React, { useEffect, useRef } from "react";
import DataTables from "datatables.net-dt"; // Correct import for DataTables
import "datatables.net-dt/css/jquery.dataTables.css"; // Import DataTables CSS
import { Box } from "@mui/material";
// No need to import jQuery separately as it's included in DataTables
const DataTableExample = ({ data, columns }) => {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (tableRef.current) {
      // Ensure table element exists
      const dt = new DataTables(tableRef.current, {
        responsive: true,
        data: data,
        columns: columns,

        // Add desired DataTables options here
      });

      return () => {
        dt.destroy();
      };
    }
  }, [data, columns]);

  return (
    <Box sx={{ maxWidth: "1500px", margin: "auto" }} className="table-responsive">
      <table
        ref={tableRef}
        className="table table-striped table-hover dt-responsive"
      ></table>
    </Box>
  );
};

export default DataTableExample;
