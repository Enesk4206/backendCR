import { createNewData } from "../../../services/serviceOperations";


export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const body = req.body; 

        //POST ÇALIŞIYOR
        const data = await createNewData("Admin", body);
        
        if (!data) {
          throw new Error("Hata oluştu")
        }
        
        
        res.status(200).json({ message: 'Başarıyla işlendi', data });
      } catch (err) {
        console.error("API Error:", err);  // Hata logları
        res.status(500).json({ message: 'Server error', error: err.message });
      }
    } else {
      res.status(404).json({ message: 'Method not allowed' });
    }
  }
  
