import express from "express";

const TakeOrderController = require("../../controllers/order/orderController");

const FetchAllOrderController = require("../../controllers/order/fetchallorders");
const FetchServedOrderController = require("../../controllers/order/fetchservedorders");
const FetchNotservedOrderController = require("../../controllers/order/fetchnotservedorders");
const FetchPaidOrderController = require("../../controllers/order/fetchpaidorders");
const FetchUnPaidOrderController = require("../../controllers/order/fetchpaidorders");
const FetchLatestOrderController = require("../../controllers/order/fetchlatestorders");
const FetchOrders = require("../../controllers/order/dash/fetchorders");

const FetchAllUserOrderController = require("../../controllers/order/fetchalluserorders");

const attachRestaurantId = require("../../middleware/attachRestaurantId");
const router = express.Router();

router.post("/take-order-route", TakeOrderController);

router.get("/fetch-all-order/:restaurantId", FetchAllOrderController);
router.get("/fetch-served-order/:restaurantId", FetchServedOrderController);
router.get(
  "/fetch-not-served-order/:restaurantId",
  FetchNotservedOrderController
);
router.get("/fetch-paid-order/:restaurantId", FetchPaidOrderController);
router.get("/fetch-un-paid-order/:restaurantId", FetchUnPaidOrderController);
router.get("/fetch-latest-order/:restaurantId", FetchLatestOrderController);

router.get("/fetch-all-user-order/:userId", FetchAllUserOrderController);
router.get("/all-orders", attachRestaurantId, FetchOrders);

module.exports = router;
