import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { DATA_PACKAGE_TYPE } from "../constants";
import MenuItem from "@material-ui/core/MenuItem";
import { createBuyOrder, updateBuyOrder } from "../services/BuyOrderService";

function BuyOrderForm({ order }) {
  const [name, setName] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState(0);
  const [dataType, setDataType] = React.useState("");

  React.useEffect(() => {
    setName(order?.name);
    setMaxPrice(order?.maxBidPrice);
    setDataType(order?.dataPackageType);
  }, [order]);

  const [isValidated, setIsValidated] = React.useState(true);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "maxBidPrice") {
      setMaxPrice(e.target.value);
    }
    if (e.target.name === "dataPackageType") {
      setDataType(e.target.value);
    }
  };

  const handleSubmit = async () => {
    if (name === "" || maxPrice === 0 || dataType === "") {
      setIsValidated(false);
      return;
    }

    !isValidated && setIsValidated(true);

    if (order) {
      await updateBuyOrder({id: order._id, name, maxPrice, dataType }); 
      return;
    }

    const response = await createBuyOrder({ name, maxPrice, dataType });

    if (response?.status !== 200) {
      console.log(`Error: ${response.status} : ${response.statusText}`);
      return;
    }
  };

  return (
    <form className="form" style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h4">
            Buy Order From
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            onChange={handleChange}
            name="name"
            id="name"
            label="Name"
            value={name}
            error={!isValidated}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            onChange={handleChange}
            name="maxBidPrice"
            id="maxBidPrice"
            value={maxPrice}
            label="Max Bid Price"
            required
            error={!isValidated}
          />
        </Grid>
        <Grid item xs={12}>
          <label style={{ color: "rgb(177 177 177)" }}>
            Data Package Type *
          </label>
          <Select
            label="Data Package Type"
            labelId="dPType"
            id="dataPackageType"
            value={dataType}
            onChange={handleChange}
            fullWidth
            name="dataPackageType"
            error={!isValidated}
          >
            {Object.entries(DATA_PACKAGE_TYPE).map(([key, value]) => (
              <MenuItem key={key} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          {order ? (
            <Button
              variant="outlined"
              type="submit"
              color="primary"
              onClick={handleSubmit}
            >
              Update
            </Button>
          ) : (
            <Button
              variant="outlined"
              type="submit"
              color="primary"
              onClick={handleSubmit}
            >
              Create
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
}

export default BuyOrderForm;
