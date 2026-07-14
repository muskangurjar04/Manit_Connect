import { CircleUserRound } from "lucide-react";
export default function StudentIdentity({ formData, handleChange }) {
  return (
   <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden mb-8">

      {/* Header */}
    <div className="px-8 py-6 bg-violet-50 border-b border-violet-200">
        <div className="flex items-center gap-3 mb-2">

  <CircleUserRound
    size={24}
    className="text-blue-600"
  />

  <h2 className="text-2xl font-bold text-slate-800">
    Student Identity
  </h2>

</div>

        <p className="text-gray-500 mt-1 mb-8">
          Verify your personal and academic information
        </p>
      </div>

      {/* Body */}

      {/* <div className="p-8"> */}
<div className="p-8 pt-10">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

          

          {/* Enrollment */}

         <div className="flex flex-col gap-2">

            <label className="text-sm font-semibold text-slate-700">
              Enrollment Number
            </label>

            <input
              type="text"
              placeholder="231120XXX"
              value={formData.enrollmentNo}
              onChange={handleChange}
              name="enrollmentNo"
              className="w-full
h-[-56px]
rounded-xl
border
border-gray-300
bg-white
shadow-sm
px-5
text-gray-800
focus:outline-none
focus:ring-2
focus:ring-violet-500 focus:border-violet-500"
            />

          </div>


          

          {/* Department */}

         <div className="flex flex-col gap-2">

            <label className="text-sm font-semibold text-slate-700">
              Branch
            </label>

    <select
  name="branch"
  value={formData.branch}
  onChange={handleChange}
  className="w-full
h-[-56px]
rounded-xl
border
border-gray-300
bg-white
shadow-sm
px-5
text-gray-800
focus:outline-none
focus:ring-2
focus:ring-violet-500 focus:border-violet-500"
>

  <option value="">Select Branch</option>

  <option value="CSE">
    Computer Science & Engineering
  </option>

  <option value="IT">
    Information Technology
  </option>

  <option value="ECE">
    Electronics & Communication Engineering
  </option>

  <option value="EE">
    Electrical Engineering
  </option>

  <option value="ME">
    Mechanical Engineering
  </option>

  <option value="CE">
    Civil Engineering
  </option>

</select>

          </div>
          {/* Course */}

<div className="flex flex-col gap-2">

  <label className="text-sm font-semibold text-slate-700">
    Course
  </label>

  <select
    value={formData.course}
    onChange={handleChange}
    name="course"
    className="w-full
h-[-56px]
rounded-xl
border
border-gray-300
bg-white
shadow-sm
px-5
text-gray-800
focus:outline-none
focus:ring-2
focus:ring-violet-500 focus:border-violet-500"
  >

    <option value="">Select Course</option>

    <option value="B.Tech">B.Tech</option>

    <option value="M.Tech">M.Tech</option>

    <option value="MCA">MCA</option>

  </select>

</div>

          

          

          {/* Passing Year */}

          <div className="flex flex-col gap-2">

            <label className="text-sm font-semibold text-slate-700">
              Passing Year
            </label>

            <input
              type="number"
              placeholder="2027"
              value={formData.passingYear}
              onChange={handleChange}
              name="passingYear"
              className="w-full
h-[-56px]
rounded-xl
border
border-gray-300
bg-white
px-5
text-gray-800
focus:outline-none
focus:ring-2
focus:ring-violet-500 focus:border-violet-500"
            />

          </div>

        </div>

      </div>

    </div>
  );
}