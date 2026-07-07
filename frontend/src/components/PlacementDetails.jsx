import { BriefcaseBusiness } from "lucide-react";
export default function PlacementDetails({ formData, handleChange }) {
  return (
    <div className="rounded-2xl">

      {/* Header */}
      <div className="pb-8 border-b border-gray-100">
        
        <div className="flex items-center gap-3">

  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
    <BriefcaseBusiness
        size={20}
        className="text-blue-600"
    />
</div>

  <h2 className="text-2xl font-bold text-slate-900">
    Placement Details
  </h2>

</div>

        <p className="text-gray-500 mt-2">
          Enter information related to your placement offer.
        </p>
      </div>

      {/* Body */}
      <div className="p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Company Name *
            </label>

            <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Google"
              className="w-full h-14 rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* Job Role */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Job Role *
            </label>

            <input
  type="text"
  name="jobRole"

value={formData.jobRole}
  onChange={handleChange}
  placeholder="Software Engineer"
             className="w-full h-14 rounded-xl border border-gray-200 bg-gray-50 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* CTC */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Package (CTC)
            </label>

            <input
              type="text"
              name="package"
              value={formData.package}
              onChange={handleChange}
              placeholder="18 LPA"
              className="w-full h-14 rounded-xl border border-gray-200 bg-gray-50 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* Offer Type */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Placement Type
            </label>

            <select
  name="placementType"
  value={formData.placementType}
  onChange={handleChange}
  className="w-full h-14 rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 text-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
>
  <option value="">Select Placement Type</option>
  <option value="Full Time">Full Time</option>
  <option value="6 Month Internship">6 Month Internship</option>
  <option value="2 Month Internship">2 Month Internship</option>
  <option value="PPO">PPO</option>
</select>
          </div>

          {/* Joining Date */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Joining Date
            </label>

            <input
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
              className="w-full h-14 rounded-xl border border-gray-200 bg-gray-50 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div> */}

          {/* Work Location */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Work Location
            </label>

            <input
              type="text"
              name="workLocation"
              value={formData.workLocation}
              onChange={handleChange}
              placeholder="Bangalore"
              className="w-full h-14 rounded-xl border border-gray-200 bg-gray-50 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div> */}

        </div>

        {/* Placement Mode */}

        <div className="mt-8">

          <label className="block text-sm font-medium text-gray-600 mb-2">
            Placement Mode
          </label>

          <div className="flex gap-10 mt-3">

            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
              <input
  type="radio"
  name="placementMode"
  value="On Campus"
  checked={formData.placementMode === "On Campus"}
  onChange={handleChange}
  className="w-4 h-4"
/>
             <span>On Campus</span>
            </label>

             <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
              <input
              className="w-5 h-5 accent-blue-600"
                type="radio"
                name="placementMode"
                value="Off Campus"
                checked={formData.placementMode === "Off Campus"}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span>Off Campus</span>
            </label>

          </div>

        </div>

      </div>
      <div className="border-b border-gray-100 mt-10"></div>

    </div>
  );
}