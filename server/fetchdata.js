import XLSX from 'xlsx';
import { CS_Cluster, EC_Cluster, ME_Cluster, Architecture_Cluster, Civil_Cluster, Environmental_Cluster, Agriculture_Cluster, Mining_Cluster, Construction_Cluster, Ceramics_Cluster, Silk_Cluster, Textile_Cluster, Polymer_Cluster, BioTech_Cluster, Aerospace_Cluster, MedicalElectronics_Cluster, Chemical_Cluster, IOT_Cluster, Design_Cluster } from './clustor.js'; // Import all clusters

// Function to get branches from multiple clusters
export const getBranchesFromClusters = (clusterNames) => {
  const clusters = {
    CS_Cluster: CS_Cluster,
    EC_Cluster: EC_Cluster,
    ME_Cluster: ME_Cluster,
    Architecture_Cluster: Architecture_Cluster,
    Civil_Cluster: Civil_Cluster,
    Environmental_Cluster: Environmental_Cluster,
    Agriculture_Cluster: Agriculture_Cluster,
    Mining_Cluster: Mining_Cluster,
    Construction_Cluster: Construction_Cluster,
    Ceramics_Cluster: Ceramics_Cluster,
    Silk_Cluster: Silk_Cluster,
    Textile_Cluster: Textile_Cluster,
    Polymer_Cluster: Polymer_Cluster,
    BioTech_Cluster: BioTech_Cluster,
    Aerospace_Cluster: Aerospace_Cluster,
    MedicalElectronics_Cluster: MedicalElectronics_Cluster,
    Chemical_Cluster: Chemical_Cluster,
    IOT_Cluster: IOT_Cluster,
    Design_Cluster: Design_Cluster
  };

  let selectedBranches = [];
  clusterNames.forEach((clusterName) => {
    if (clusters[clusterName]) {
      selectedBranches = [...selectedBranches, ...clusters[clusterName]];
    }
  });

  return selectedBranches.map(branch => branch.Branch_code);
};

// Function to filter by rank (within 35% above and below the provided rank)
const filterByRank = (data, rank, categoryIndex) => {
  const lowerBound = rank - (rank * 0.55);
  const upperBound = rank + (rank * 0.55);

  return data.filter((row) => {
    const rowRank = parseInt(row[categoryIndex], 10);
    return !isNaN(rowRank) && rowRank >= lowerBound && rowRank <= upperBound;
  });
};

// Function to normalize column names (trim spaces and convert to lowercase)
const normalizeColumnNames = (headers) => {
  return headers.map(header => header ? header.trim().toLowerCase() : header);
};


export const fetchDataFromExcel = async (filePath, rank, clusters, places = [], category) => {
  category = category.toLowerCase();
  const len = category.length;
  try {
    // Load the Excel file
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]]; // Assuming the data is in the first sheet
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Convert to JSON

    // Get the headers and normalize them
    const headers = data[0];
    const normalizedHeaders = normalizeColumnNames(headers);
    let nextcat = category.substring(0, len - 1) + 'g'; 
    // Log the headers for debugging
    console.log("Normalized Headers: ", normalizedHeaders);

    // Get the indices of the relevant columns
    const columnIndices = {
      collegeCode: normalizedHeaders.indexOf("college code"),
      place: normalizedHeaders.indexOf("place"),
      collegeName: normalizedHeaders.indexOf("college name"),
      branchName: normalizedHeaders.indexOf("branch name"),
      branchCode: normalizedHeaders.indexOf("branch code"),
      rank: normalizedHeaders.indexOf(category), // Current category (e.g., 3AK)
      rankAG: normalizedHeaders.indexOf(nextcat), // 3AG category
      rankGM: normalizedHeaders.indexOf("gm") // General Merit (GM) category
    };

    console.log(nextcat);
    
    
    

    // Check if the required columns exist in the Excel sheet
    if (
      columnIndices.collegeCode === -1 ||
      columnIndices.place === -1 ||
      columnIndices.collegeName === -1 ||
      columnIndices.branchName === -1 ||
      columnIndices.branchCode === -1 ||
      columnIndices.rank === -1 ||
      columnIndices.rankAG === -1 ||
      columnIndices.rankGM === -1 // Check if all rank columns exist
    ) {
      // Log which column(s) are missing
      console.error("Missing Columns:");
      if (columnIndices.collegeCode === -1) console.error("College Code column is missing.");
      if (columnIndices.place === -1) console.error("Place column is missing.");
      if (columnIndices.collegeName === -1) console.error("College Name column is missing.");
      if (columnIndices.branchName === -1) console.error("Branch Name column is missing.");
      if (columnIndices.branchCode === -1) console.error("Branch Code column is missing.");
      if (columnIndices.rank === -1) console.error("Category rank column is missing.");
      if (columnIndices.rankAG === -1) console.error("3AG rank column is missing.");
      if (columnIndices.rankGM === -1) console.error("GM rank column is missing.");
      
      throw new Error("Some required columns are missing in the Excel sheet.");
    }

    // Fetch the branches for the given clusters
    const selectedBranchCodes = getBranchesFromClusters(clusters);

    // Log the selected branches for debugging
    console.log("Branches from selected clusters: ", selectedBranchCodes);

    // Calculate the 35% rank range
    const lowerBound = rank * 0.35;
    const upperBound = rank * 1.85;

    // Filter the data based on place, clusters, and rank range
    let filteredData = data.slice(1).map((row) => {
      // Extract college information
      const collegeCode = row[columnIndices.collegeCode];
      const place = row[columnIndices.place];
      const collegeName = row[columnIndices.collegeName];
      const branchName = row[columnIndices.branchName];
      const branchCode = row[columnIndices.branchCode];
      let rankValue = parseInt(row[columnIndices.rank], 10); // Rank for the current category

      // Handle rank 0 logic:
      if (rankValue === 0) {
        let rankAGValue = parseInt(row[columnIndices.rankAG], 10); // Rank for 3AG category
        if (rankAGValue !== 0) {
          rankValue = rankAGValue; // Use rank from 3AG if it's non-zero
        } else {
          let rankGMValue = parseInt(row[columnIndices.rankGM], 10); // Rank for GM category
          if (rankGMValue !== 0) {
            rankValue = rankGMValue; // Use rank from GM if 3AG is also zero
          }
        }
      }

      // Initialize the filtered object with basic details
      const collegeData = {
        collegeCode,
        collegeName,
        branchName,
        branchCode,
        place,
        rank: rankValue,
      };

      // Check if the branchCode and rankValue match the given inputs
      const isPlaceMatching = !places.length || places.includes(place); // Skip place filter if places is not provided or empty
      const isBranchMatching = selectedBranchCodes.includes(branchCode); // Check if branch belongs to selected clusters
      const isRankMatching = rankValue >= lowerBound && rankValue <= upperBound; // Rank falls within the 35% range

      if (isPlaceMatching && isBranchMatching && isRankMatching) {
        return collegeData; // Only return data that meets all conditions
      }

      return null; // Return null for non-matching rows
    }).filter(row => row !== null); // Filter out null entries (non-matching rows)

    // Sort the filtered data based on rank and place
    filteredData.sort((a, b) => {
      if (a.rank === b.rank) {
        return a.place.localeCompare(b.place); // Sort by place if ranks are equal
      }
      return a.rank - b.rank; // Sort by rank
    });

    return filteredData;

  } catch (error) {
    console.error("Error processing request:", error);
    throw new Error("Error processing request: " + error.message);
  }
};
