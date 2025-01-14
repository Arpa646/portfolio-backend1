"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiatePayment = void 0;
const axios_1 = __importDefault(require("axios"));
const initiatePayment = (paymentData) => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://sandbox.aamarpay.com/jsonpost.php";
    try {
        const response = yield axios_1.default.post(url, {
            store_id: "aamarpaytest",
            signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
            tran_id: paymentData.transactionId, // Ideally, generate a unique transaction ID
            success_url: `https://foodu-delta.vercel.app/api/premium/success?transactionid=${paymentData.userId}`,
            fail_url: "https://racipie-sharing.vercel.app",
            cancel_url: "https://racipie-sharing.vercel.app",
            amount: 100,
            currency: "BDT",
            desc: "Facility Booking Payment",
            cus_name: "arpa",
            cus_email: "arpakhan114@gmail.com",
            cus_add1: "dhaka",
            cus_city: "Dhaka",
            cus_state: "Dhaka",
            cus_postcode: "1206",
            cus_country: "Bangladesh",
            cus_phone: "03834",
            type: "json",
        });
        //    const verifyPayment=async() =>{
        //     const res=await axios.get("https://sandbox.aamarpay.com/api/v1/trxcheck/request.php",{
        //       params:{
        //         store_id: "aamarpaytest",
        //         signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
        //         request_id:tran_id,
        //         type: "json",
        //       }
        //     })
        //     console.log('jhh',res.data)
        //    }
        return response;
    }
    catch (error) {
        console.error("Payment initiation failed", error);
        throw new Error("Payment initiation failed");
    }
});
exports.initiatePayment = initiatePayment;
