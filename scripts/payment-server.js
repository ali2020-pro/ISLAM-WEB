const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Airtel Money API Credentials
const AIRTEL_API_KEY = 'YOUR_API_KEY';
const AIRTEL_SECRET_KEY = 'YOUR_SECRET_KEY';
const AIRTEL_CALLBACK_URL = 'http://localhost:3000/airtel-callback'; // Replace with your callback URL

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Generate Airtel Money Access Token
async function getAirtelToken() {
    const url = 'https://openapi.airtel.africa/auth/oauth2/token';
    const headers = {
        'Content-Type': 'application/json',
    };
    const data = {
        client_id: AIRTEL_API_KEY,
        client_secret: AIRTEL_SECRET_KEY,
        grant_type: 'client_credentials',
    };

    try {
        const response = await axios.post(url, data, { headers });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting Airtel token:', error.response?.data || error.message);
        throw new Error('Failed to retrieve Airtel token.');
    }
}

// Initiate Payment
app.post('/airtel-payment', async (req, res) => {
    const { amount, currency, phone } = req.body;

    try {
        const token = await getAirtelToken();
        const url = 'https://openapi.airtel.africa/merchant/v1/payments/';
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };
        const data = {
            amount,
            currency: currency || 'UGX', // Default to UGX (Ugandan Shilling)
            externalId: `txn_${Date.now()}`,
            payer: {
                msisdn: phone,
            },
            description: 'Donation to Ithad Islamiyyah Uganda',
            redirectUrl: AIRTEL_CALLBACK_URL,
        };

        const response = await axios.post(url, data, { headers });
        res.status(200).json({
            success: true,
            message: 'Payment initiated successfully.',
            paymentUrl: response.data.paymentUrl,
        });
    } catch (error) {
        console.error('Error initiating Airtel payment:', error.response?.data || error.message);
        res.status(500).json({ success: false, message: 'Failed to initiate payment.' });
    }
});

// Airtel Callback Endpoint
app.post('/airtel-callback', (req, res) => {
    const paymentStatus = req.body;
    console.log('Payment Status:', paymentStatus);

    // Process payment confirmation
    if (paymentStatus.status === 'SUCCESSFUL') {
        console.log('Payment successful:', paymentStatus);
    } else {
        console.log('Payment failed or pending:', paymentStatus);
    }

    res.status(200).send('Callback received');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
