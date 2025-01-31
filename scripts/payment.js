const isTestMode = false; // Set true for Test Mode, false for Live Mode
const razorpayKey = isTestMode
    ? "rzp_test_zIqlGLC73lm55u" // Test Key ID
    : "rzp_live_xOxn12n7w9kPuo"; // live key id

    

function initiatePayment(finalPayment) {
    const options = {
        key: razorpayKey,
        amount: finalPayment * 100, // Amount in paise
        currency: "INR",
        name: "Myntra",
        description: "Test Transaction",
        image: "https://example.com/logo.png", // Optional logo
        handler: function (response) {
            alert("Payment Successful! (Test Mode)");
            console.log("Payment ID:", response.razorpay_payment_id);
        },
        prefill: {
            name: "Test User",
            email: "testuser@example.com",
            contact: "9999999999"
        },
        theme: {
            color: "#3399cc"
        }
    };

    const rzp = new Razorpay(options);
    rzp.open();
}
