import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Typography, Box, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { removeFromCart, updateQuantity } from "../Redux/Action";

const StyledDiv = styled("div")({
  backgroundImage: "url('backgroundimg.jpg')",
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  alignItems: "center",
});

const CartDetails = () => {
  const cartData = useSelector((state) => state.cartItem.cartData);
  const cartCount = useSelector((state) => state.cartItem.cartCount);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (item, event) => {
    const quantity = parseInt(event.target.value);
    if (quantity > 0) {
      dispatch(updateQuantity(item, quantity));
    }
  };

  const parsePrice = (price) => {
    const numericValue = parseFloat(price.replace(/[^\d.-]/g, ""));
    return isNaN(numericValue) ? 0 : numericValue;
  };

  const totalPrice = cartData.reduce(
    (total, item) => total + parsePrice(item.Price) * item.quantity,
    0
  );

  return (
    <StyledDiv>
      <Typography variant="h1" sx={{ justifyContent: "center" }} gutterBottom>
        Cart Details
      </Typography>
      <Grid
        container
        direction="column"
        spacing={2}
        width={700}
        marginLeft={50}
      >
        {cartData.map((item, index) => (
          <Grid item key={index}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
              border={1}
              borderRadius={2}
            >
              <Box display="flex" alignItems="center">
                <img
                  src={item.Image}
                  alt="Avatar"
                  style={{ width: 100, marginRight: 16, height: 100 }}
                />
                <Box>
                  <Typography variant="h5">
                    <b>{item.Name}</b>
                  </Typography>
                  <Typography variant="subtitle1">
                    <b>Weight: {item.Weight}</b>
                  </Typography>
                  <Typography variant="subtitle1">
                    <b>Price: {item.Price}</b>
                  </Typography>
                </Box>
                <Box alignItems="center" justifyContent="space-between" p={2}>
                  <TextField
                    label="Quantity"
                    type="number"
                    InputProps={{ inputProps: { min: 1 } }}
                    value={item.quantity}
                    onChange={(event) => handleQuantityChange(item, event)}
                    sx={{ width: 100 }}
                  />
                </Box>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove from Cart
              </Button>
            </Box>
          </Grid>
        ))}
        <Box mt={4}>
          <Typography variant="h3">
            Total Price: ₹{totalPrice.toFixed(2)}
          </Typography>
        </Box>
      </Grid>
    </StyledDiv>
  );
};

export default CartDetails;
