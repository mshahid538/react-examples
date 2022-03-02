import BuyOrderForm from "./components/BuyOrderForm";
import BuyOrderTable from "./components/BuyOrderTable"; 
import Grid from "@mui/material/Grid";
import React from "react";
import Test from "./Test";

const App = React.memo(function App() { 
  // const [buyOrder, setBuyOrder] = React.useState(null);

  // const handleEdit = (order) => { 
  //   setBuyOrder(order);
  // }

  return (
    // <>
    //   <Grid container spacing={2} justifyContent="center" alignItems="center">
    //     <Grid item xs={4}>
    //       <BuyOrderForm order={buyOrder}/>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <BuyOrderTable onEdit={handleEdit} />
    //     </Grid>
    //   </Grid>
    // </>
    <Test/>
  );
});

export default App;
