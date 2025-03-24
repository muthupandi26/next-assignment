import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";

import ControlPanel from "./ControlPanel";
import { get } from "../api/apiservice";

interface Scan {
  id: string;
  title: string;
  price: number;
  category: string;
}

const ScanList = () => {
  const [scans, setScans] = useState<Scan[]>([]);

  const [refresh, setRefresh] = useState(true);
  const [showControlPanel, setShowControlPanel] = useState(false);

  const getProductsList = async () => {
    const response = await get({
      url: "https://fakestoreapi.com/products",
    });
    if (response.length > 0) {
      setScans(response);
    } else {
      alert("product not created");
    }
  };

  useEffect(() => {
    if (refresh) {
      getProductsList();
      setRefresh(false);
    }
  }, [refresh]);

  const handleCreate = async () => {
    setShowControlPanel(true);
  };

  const handleCloseModal = (refresh: boolean) => {
    setRefresh(refresh);
    setShowControlPanel(false);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" sx={{ p: 2 }}>
            Last Scans
          </Typography>
          <Button variant="contained" onClick={handleCreate}>
            Add product
          </Button>
        </Box>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scans.map((scan) => (
                <TableRow key={scan.id}>
                  <TableCell>{scan.id}</TableCell>
                  <TableCell>{scan.title}</TableCell>
                  <TableCell>{scan.price}</TableCell>
                  <TableCell>{scan.category}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
      {showControlPanel && (
        <ControlPanel open={showControlPanel} handleClose={handleCloseModal} />
      )}
    </>
  );
};

export default ScanList;
