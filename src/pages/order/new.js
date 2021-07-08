import React, { Fragment, useState, useEffect, useMemo } from "react";
import { TextField, Switch, FormGroup, Box, Grid, Container, Button, FormControl, FormControlLabel, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import faker from "faker";
import { Controller, useForm } from "react-hook-form";
import { firebase, firestore } from "../../lib/firebase/firebase";
import { CITY_CENTER } from "../../lib/constants";
import useI18n from "../../hooks/use-i18n";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(10),
  },
  margin: {
    margin: theme.spacing(2, 0, 1),
  },
  group: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0, 2),
    backgroundColor: "#EEE",
  },
}));

export default function New() {
  const classes = useStyles();
  const i18n = useI18n();

  const [needsDeliveryChecked, setNeedsDeliveryChecked] = useState(true);
  const handleNeedsDeliveryChange = (event) => {
    setNeedsDeliveryChecked(event.target.checked);
  };

  const { control, register, handleSubmit } = useForm();
  const onFormSubmit = async (data) => {
    const orderDetails = {
      ...data,
      needsDelivery: needsDeliveryChecked,
      address: (needsDeliveryChecked && data.address) || "",
      addressAlt: (needsDeliveryChecked && data.addressAlt) || "",
      extraInformation: (needsDeliveryChecked && data.extraInformation) || "",
      modifiedAt: null,
      createdAt: firebase.firestore.Timestamp.now(),
      readyAt: null,
      pickedAt: null,
      deliveredAt: null,
      status: 1,
      driverId: "",
      position: {
        lat: +`${parseInt(CITY_CENTER[0], 10)}.${faker.datatype.number(9999)}`,
        lng: +`${parseInt(CITY_CENTER[1], 10)}.${faker.datatype.number(9999)}`,
      },
    };
    console.log(orderDetails);
    // const res = await firestore.collection("orders").add(orderDetails);
  };

  return (
    <Container>
      <Box className={classes.root} component="form" onSubmit={handleSubmit(onFormSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormGroup row>
              <Controller
                name="id"
                control={control}
                defaultValue={faker.datatype.number(99)}
                render={({ field }) => <TextField disabled className={classes.margin} variant="outlined" label={i18n.t("id")} fullWidth {...field} />}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormGroup row className={classes.group}>
              <Box mb={1} width="100%">
                <Controller
                  name="orderPizza"
                  control={control}
                  defaultValue={faker.lorem.words(4).split(" ").join(", ")}
                  render={({ field }) => <TextField className={classes.margin} label="Pizza" multiline rows={4} InputLabelProps={{ shrink: true }} variant="outlined" fullWidth {...field} />}
                />
                <Controller
                  name="orderRestaurant"
                  control={control}
                  defaultValue={faker.lorem.words(3).split(" ").join(", ")}
                  render={({ field }) => (
                    <TextField className={classes.margin} label={i18n.t("kitchen")} multiline rows={4} InputLabelProps={{ shrink: true }} variant="outlined" fullWidth {...field} />
                  )}
                />
                <Controller
                  name="orderBar"
                  control={control}
                  defaultValue={faker.lorem.words(7).split(" ").join(", ")}
                  render={({ field }) => <TextField className={classes.margin} label="Bar" multiline rows={4} InputLabelProps={{ shrink: true }} variant="outlined" fullWidth {...field} />}
                />
                <FormControl fullWidth variant="outlined" className={classes.margin}>
                  <Controller
                    name="prefferedTime"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        label={i18n.t("readyTime")}
                        type="time"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300,
                        }}
                        {...field}
                      />
                    )}
                  />
                </FormControl>
              </Box>
            </FormGroup>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormGroup row className={classes.group}>
              <Box width="100%">
                <FormControlLabel
                  control={<Switch name="needsDelivery" checked={needsDeliveryChecked} onChange={handleNeedsDeliveryChange} name="needsDeliver" color="primary" />}
                  label={i18n.t("needsDelivery")}
                />
                {needsDeliveryChecked && (
                  <Box mb={1}>
                    <Controller
                      name="address"
                      control={control}
                      defaultValue={faker.address.streetAddress()}
                      render={({ field }) => <TextField className={classes.margin} label={i18n.t("address")} variant="outlined" fullWidth {...field} />}
                    />
                    <Controller
                      name="addressAlt"
                      control={control}
                      defaultValue={faker.address.secondaryAddress()}
                      render={({ field }) => <TextField className={classes.margin} label={i18n.t("addressAlt")} variant="outlined" fullWidth {...field} />}
                    />
                    <Controller
                      name="extraInformation"
                      control={control}
                      defaultValue={faker.lorem.sentence()}
                      render={({ field }) => <TextField className={classes.margin} label={i18n.t("extraInformation")} variant="outlined" fullWidth {...field} />}
                    />
                  </Box>
                )}
              </Box>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="phone"
              control={control}
              defaultValue={`07${faker.datatype.number(99)}${faker.datatype.number(99)}${faker.datatype.number(99)}${faker.datatype.number(99)}`}
              render={({ field }) => <TextField className={classes.margin} label={i18n.t("phone")} variant="outlined" fullWidth {...field} />}
            />
            <FormControl className={classes.margin} fullWidth variant="outlined">
              <InputLabel>{i18n.t("price")}</InputLabel>
              <Controller
                name="price"
                control={control}
                defaultValue={faker.commerce.price()}
                render={({ field }) => (
                  <OutlinedInput label={i18n.t("price")} type="number" variant="outlined" {...field} startAdornment={<InputAdornment position="start">{i18n.t("currency")}</InputAdornment>} />
                )}
              />
            </FormControl>
          </Grid>
          <Button fullWidth variant="contained" size="large" color="primary" type="submit">
            {i18n.t("add")}
          </Button>
          <Button className={classes.margin} fullWidth variant="contained" size="large" color="inherit" type="cancel">
            {i18n.t("cancel")}
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}
