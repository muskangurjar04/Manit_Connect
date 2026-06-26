import Topbar from "../components/Topbar";
import StudentIdentity from "../components/StudentIdentity";
import PlacementDetails from "../components/PlacementDetails";
import DocumentUpload from "../components/DocumentUpload";
import InfoCards from "../components/InfoCards";

export default function PlacementSubmission() {

  return (

    <div className="min-h-screen bg-[#F7F9FC]">

      <Topbar />

      <div className="max-w-6xl mx-auto pt-10 px-6">

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

  <h1 className="text-[52px] font-bold text-slate-800 mt-3 leading-tight">

    Placement Record Submission

  </h1>

  {/* Description */}

  <p className="text-gray-500 mt-4 text-lg max-w-3xl leading-8">

    Please provide accurate details of your offer letter.
    These records are subject to verification by the T&P Cell
    and the hiring organization.

  </p>

</div>

      <div className="max-w-6xl mx-auto py-6 px-10">
        <div className="bg-white rounded-[30px] shadow-xl p-8"></div>

        <StudentIdentity />

        <div className="h-10" />

        <PlacementDetails />
        <div className="h-10" />

<DocumentUpload />
<div className="h-10" />

<InfoCards />

      </div>

    </div>

  );
}