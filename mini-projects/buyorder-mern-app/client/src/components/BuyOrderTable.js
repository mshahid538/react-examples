import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"; 
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper"; 
import { getBuyOrdersDB, deleteBuyOrder } from "../services/BuyOrderService";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";

const BuyOrderTable = React.memo(function BuyOrderTable({onEdit}) {
  const [buyOrders, setBuyOrders] = React.useState([]);

  React.useEffect(() => { 
    getBuyOrders();
  }, []);

  const getBuyOrders = async () => {
    const res = await getBuyOrdersDB();
    setBuyOrders(res.data);
  };

  const handleDelete = async (id) => {
    await deleteBuyOrder(id);
    getBuyOrders();
  }

  const handleEdit = (order) => {
    onEdit(order);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Buy Orders
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{ backgroundColor: "#CCC", color: "white" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Max Bid Price</TableCell>
                <TableCell>Data Package Type</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {buyOrders.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.maxBidPrice}</TableCell>
                  <TableCell>{order.dataPackageType}</TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit">
                      <IconButton aria-label="edit" onClick={() => handleEdit(order)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton aria-label="delete" onClick={() => handleDelete(order._id)}>
                        <DeleteOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
});

export default BuyOrderTable;
