// ClusterComponent.jsx
import React from 'react';
import { motion } from 'framer-motion'; // For adding animations
import 'tailwindcss/tailwind.css';

// Import the cluster data
import {
  CS_Cluster,
  EC_Cluster,
  ME_Cluster,
  Architecture_Cluster,
  Civil_Cluster,
  Environmental_Cluster,
  Agriculture_Cluster,
  Mining_Cluster,
  Construction_Cluster,
  Ceramics_Cluster,
  Silk_Cluster,
  Textile_Cluster,
  Polymer_Cluster,
  BioTech_Cluster,
  Aerospace_Cluster,
  MedicalElectronics_Cluster,
  Chemical_Cluster,
  IOT_Cluster,
  Design_Cluster
} from '../data/clustor';  // Adjust the path based on where data.js is located

// Cluster descriptions
const clusters = {
  CS: { name: "CS Cluster", description: "This cluster includes branches related to Computer Science and Information Technology." },
  EC: { name: "EC Cluster", description: "This cluster includes branches related to Electronics and Communication Engineering." },
  ME: { name: "ME Cluster", description: "This cluster includes branches related to Mechanical and Automobile Engineering." },
  Architecture: { name: "Architecture Cluster", description: "This cluster includes the branch related to Architecture." },
  Civil: { name: "Civil Engineering Cluster", description: "This cluster includes branches related to Civil Engineering." },
  Environmental: { name: "Environmental Engineering Cluster", description: "This cluster includes branches related to Environmental Engineering." },
  Agriculture: { name: "Agriculture Engineering Cluster", description: "This cluster includes branches related to Agriculture Engineering." },
  Mining: { name: "Mining Engineering Cluster", description: "This cluster includes branches related to Mining Engineering." },
  Construction: { name: "Construction Technology Cluster", description: "This cluster includes branches related to Construction Technology and Management." },
  Ceramics: { name: "Ceramics and Cement Technology Cluster", description: "This cluster includes branches related to Ceramics and Cement Technology." },
  Silk: { name: "Silk Technology Cluster", description: "This cluster includes branches related to Silk Technology." },
  Textile: { name: "Textile Technology Cluster", description: "This cluster includes branches related to Textile Technology." },
  Polymer: { name: "Polymer Tech Cluster", description: "This cluster includes branches related to Polymer Tech." },
  BioTech: { name: "Biotechnology Cluster", description: "This cluster includes branches related to Bio Technology and Biomedical Engineering." },
  Aerospace: { name: "Aerospace Engineering Cluster", description: "This cluster includes branches related to Aerospace Engineering." },
  MedicalElectronics: { name: "Medical Electronics Cluster", description: "This cluster includes branches related to Medical Electronics." },
  Chemical: { name: "Chemical Engineering Cluster", description: "This cluster includes branches related to Chemical Engineering." },
  IOT: { name: "Industrial IOT Cluster", description: "This cluster includes branches related to Industrial IOT." },
  Design: { name: "Design Cluster", description: "This cluster includes branches related to Design." }
};

const ClusterTable = ({ clusters }) => (
  <table className="table-auto w-full border-collapse border border-gray-200 text-left text-sm mt-50">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-200 px-4 py-2">Cluster Name</th>
        <th className="border border-gray-200 px-4 py-2">Description</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(clusters).map((key) => (
        <tr key={key}>
          <td className="border border-gray-200 px-4 py-2 font-semibold">{clusters[key].name}</td>
          <td className="border border-gray-200 px-4 py-2">{clusters[key].description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const ClusterDetail = ({ clusterName, description, branches }) => (
  <motion.div
    className="mt-6 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-xl font-bold text-gray-800 mb-2">{clusterName}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="list-disc pl-6">
      {branches.map((branch) => (
        <li key={branch.Branch_code} className="text-gray-700">
          {branch.Branch_name} ({branch.Branch_code})
        </li>
      ))}
    </ul>
  </motion.div>
);

const ClusterComponent = () => {
  // Group branches by cluster
  const groupedBranches = {
    CS: CS_Cluster,
    EC: EC_Cluster,
    ME: ME_Cluster,
    Architecture: Architecture_Cluster,
    Civil: Civil_Cluster,
    Environmental: Environmental_Cluster,
    Agriculture: Agriculture_Cluster,
    Mining: Mining_Cluster,
    Construction: Construction_Cluster,
    Ceramics: Ceramics_Cluster,
    Silk: Silk_Cluster,
    Textile: Textile_Cluster,
    Polymer: Polymer_Cluster,
    BioTech: BioTech_Cluster,
    Aerospace: Aerospace_Cluster,
    MedicalElectronics: MedicalElectronics_Cluster,
    Chemical: Chemical_Cluster,
    IOT: IOT_Cluster,
    Design: Design_Cluster
  };

  const majorClusters = [
    'CS', 'EC', 'ME', 'Civil', 'Aerospace', 'BioTech'
  ];

  const otherClusters = Object.keys(groupedBranches).filter(
    key => !majorClusters.includes(key)
  );

  return (
    <div className="max-w-screen-xl mx-auto p-8 mt-16">
      {/* Title and Description */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Engineering Branches in Different Clusters</h1>
        <p className="text-lg text-gray-600">
          A "Cluster" refers to a group of related engineering branches that share similar technologies, knowledge, and expertise. 
          Explore the different clusters to find which aligns with your career path!
        </p>
      </motion.div>

      {/* Major Clusters Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Major Clusters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {majorClusters.map((key) => (
            <ClusterDetail
              key={key}
              clusterName={clusters[key].name}
              description={clusters[key].description}
              branches={groupedBranches[key]}
            />
          ))}
        </div>
      </section>

      {/* Other Clusters Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Other Clusters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherClusters.map((key) => (
            <ClusterDetail
              key={key}
              clusterName={clusters[key].name}
              description={clusters[key].description}
              branches={groupedBranches[key]}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClusterComponent;
