export default function handler(req, res) {
    if (req.method === 'POST') {
      // फॉर्म के डेटा को एक्सेस करें
      const { name, email, message } = req.body;
  
      // यहां पर backend प्रोसेसिंग करें, जैसे कि ईमेल भेजना या डेटा सेव करना
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  