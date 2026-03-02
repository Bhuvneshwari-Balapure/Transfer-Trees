import express from "express";
import crypto from "crypto";
import razorPay from "../config/razorPay.js";
import Subscription from "../models/Subscription.js";
import User from "../models/User.js";

const router = express.Router();

/* ================= CREATE ORDER ================= */

router.post("/create-order", async (req, res) => {
  try {
    console.log("BODY:", req.body); // 👈 ADD THIS

    const { amount } = req.body;

    const order = await razorPay.orders.create({
      amount: Math.round(amount * 100), // ✅ VERY IMPORTANT
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    res.json(order);
  } catch (error) {
    console.error("Create Order Error:", error); // 👈 ADD THIS
    res.status(500).json({ error: error.message });
  }
});

/* ================= VERIFY PAYMENT ================= */

router.post("/verify-payment", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
      tier,
      price,
    } = req.body;

    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    console.log("Generated:", generated_signature);
    console.log("Received:", razorpay_signature);

    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({ success: false });
    }

    // ✅ 1. Create Subscription
    const subscription = await Subscription.create({
      user: userId,
      tier,
      price,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    // ✅ 2. Push into User
    await User.findByIdAndUpdate(userId, {
      $push: { activeSubscriptions: subscription._id },
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Verification failed" });
  }
});

export default router;
