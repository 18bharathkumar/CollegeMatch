// server.js
import express from 'express';
import cors from 'cors';
import { fetchDataFromExcel } from './fetchdata.js'; 

const app = express();
app.use(cors());
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route to handle the request
app.post('/fetchData', async (req, res) => {
  const { rank, clusters, places, category } = req.body;

  // Log the received data
  console.log('Rank:', rank);
  console.log('Clusters:', clusters);
  console.log('Places:', places);
  console.log('Category:', category);

  try {
    // Call the fetchDataFromExcel function to fetch the filtered data
    const filePath = '../cet_colg_data.xlsx'; // Set the path to your Excel file
    const filteredData = await fetchDataFromExcel(filePath, rank, clusters, places, category);

    // Send the filtered data as a response
    res.status(200).json({
      message: 'Request received and data fetched successfully',
      data: filteredData,
    });

    console.log(filteredData);
    
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({
      message: "Error processing request",
      error: error.message,
    });
  }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
