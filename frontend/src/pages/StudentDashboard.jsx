import { useState } from "react";
import StudentIdentity from "../components/StudentIdentity";
import PlacementDetails from "../components/PlacementDetails";
import DocumentUpload from "../components/DocumentUpload";
import InfoCards from "../components/InfoCards";
import { submitPlacement } from "../services/placementService";
import { useNavigate } from "react-router-dom";
import manitLogo from "../assets/manit-logo.png";

export default function PlacementSubmission() {

const navigate = useNavigate();
const [formData, setFormData] = useState({
  student: "", // Temporary ObjectId

  enrollmentNo: "",

  department: "",

  course: "",

  passingYear: "",

  company: "",
  jobRole: "",
  package: "",

  placementType: "",
  

  remarks: "",

  offerLetter: null,
});
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleFileChange = (file) => {
  setFormData((prev) => ({
    ...prev,
    offerLetter: file,
  }));
};
const handleSubmit = async () => {
 

if (!formData.company) {
  return alert("Company Name is required");
}

if (!formData.offerLetter) {
  return alert("Please upload Offer Letter");
}
  try {
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    const res = await submitPlacement(data);

    

console.log(res);

setTimeout(() => {
  navigate("/thank-you");
}, 1000);
  } catch (err) {
    console.error(err);

    alert(
      err.response?.data?.message ||
      "Submission failed."
    );
  }
};
  return (

   <div className="min-h-screen bg-[#F7F9FC]">

      <div className="max-w-7xl mx-auto px-8">
      <div className="pt-8">
 {/* Top Header */}

      <div className="flex items-center gap-4 pt-6 pb-6">

        <img
          src={manitLogo}
          alt="MANIT Logo"
          className="w-12 h-12 object-contain"
        />

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            MANIT Placement Hub
          </h2>

          <p className="text-sm text-gray-500">
            Maulana Azad National Institute of Technology, Bhopal
          </p>
        </div>

      </div>
       <div className="bg-white rounded-2xl border border-blue-100 px-6 py-4 shadow-sm">

      <p className="font-semibold text-blue-700">
        Secure & Verified
      </p>

      <p className="text-sm text-gray-500">
        T&P Cell Verified
      </p>

    </div>

      
  {/* Breadcrumb */}

  <div className="flex items-center gap-2 text-sm">

    <span className="text-gray-500">
      Dashboard
    </span>

    <span className="text-gray-400">
      &gt;
    </span>

    <span className="text-blue-600 font-medium">
      New Submission
    </span>

  </div>

  {/* Title */}

  <h1 className="text-3xl font-bold text-slate-900 mt-3">
  Placement Record Submission
</h1>

  {/* Description */}

  <p className="text-sm text-gray-500 text-sm leading-6 max-w-2xl">
  Please provide accurate details of your offer letter.
  These records are subject to verification by the T&P Cell
  and the hiring organization.
</p>
</div>

      <div className="pt-12 pb-8">
        

  <div className="
w-full
bg-white
rounded-3xl
shadow-lg
border
border-gray-200
overflow-hidden
">

    <StudentIdentity
  formData={formData}
  handleChange={handleChange}
/>

    <div className="h-8" />

    <PlacementDetails
  formData={formData}
  handleChange={handleChange}
/>

    <div className="h-10" />

    <DocumentUpload
  formData={formData}
  handleChange={handleChange}
  handleFileChange={handleFileChange}
  handleSubmit={handleSubmit}
/>

    <div className="h-10" />

    <InfoCards />

  </div>

</div>
</div>
    </div>

  );
}