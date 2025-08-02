// api/payhero-callback.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;

  console.log('📩 PayHero Callback Received:', JSON.stringify(data, null, 2));

  // Example: handle successful payment
  if (data.status === 'Success') {
    const phone = data.phone;
    const amount = data.amount;
    const transId = data.transaction_id;

    // ✅ TODO: store this info in your DB or trigger loan disbursement logic
    console.log(`✅ Payment of Ksh ${amount} from ${phone} successful. Tx ID: ${transId}`);
  } else {
    console.log(`❌ Payment failed or cancelled:`, data);
  }

  return res.status(200).json({ message: 'Callback received' });
}
