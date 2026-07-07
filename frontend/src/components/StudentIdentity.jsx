import { CircleUserRound } from "lucide-react";
export default function StudentIdentity({ formData, handleChange }) {
  return (
    <div className="bg-white rounded-3xl border border-violet-200 shadow-md overflow-hidden">

      {/* Header */}
      <div className="px-8 py-6 border-b bg-violet-50">
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

      <div className="p-8">

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">

          

          {/* Enrollment */}

          <div>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Enrollment Number
            </label>

            <input
              type="text"
              placeholder="231120XXX"
              value={formData.enrollmentNo}
              onChange={handleChange}
              name="enrollmentNo"
              className="w-full
h-14
rounded-xl
border
border-gray-300
bg-white
shadow-sm
px-4
text-gray-800
focus:outline-none
focus:ring-2
focus:ring-blue-500 outline-none transition"
            />

          </div>


          

          {/* Department */}

          <div>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Department
            </label>

            <select
  value={formData.department}
  onChange={handleChange}
  name="department"
  className="w-full
h-14
rounded-xl
border
border-gray-300
bg-white
shadow-sm
px-4
text-gray-800
focus:outline-none
focus:ring-2
focus:ring-blue-500 outline-none transition"
>

  <option value="">Select Department</option>

  <option value="Computer Science & Engineering">
    Computer Science & Engineering
  </option>

  <option value="Information Technology">
    Information Technology
  </option>

  <option value="Electronics & Communication Engineering">
    Electronics & Communication Engineering
  </option>

  <option value="Electrical Engineering">
    Electrical Engineering
  </option>

  <option value="Mechanical Engineering">
    Mechanical Engineering
  </option>

  <option value="Civil Engineering">
    Civil Engineering
  </option>

</select>

          </div>
          {/* Course */}

<div>

  <label className="block text-sm font-medium text-gray-600 mb-2">
    Course
  </label>

  <select
    value={formData.course}
    onChange={handleChange}
    name="course"
    className="w-full
h-14
rounded-xl
border
border-gray-300
bg-white
shadow-sm
px-4
text-gray-800
focus:outline-none
focus:ring-2
focus:ring-blue-500 outline-none transition"
  >

    <option value="">Select Course</option>

    <option value="B.Tech">B.Tech</option>

    <option value="M.Tech">M.Tech</option>

    <option value="MCA">MCA</option>

  </select>

</div>

          

          

          {/* Passing Year */}

          <div>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Passing Year
            </label>

            <input
              type="number"
              placeholder="2027"
              value={formData.passingYear}
              onChange={handleChange}
              name="passingYear"
              className="w-full
h-14
rounded-xl
border
border-gray-200
bg-white
px-4
text-gray-800
focus:outline-none
focus:ring-2
focus:ring-blue-500 outline-none transition"
            />

          </div>

        </div>

      </div>

    </div>
  );
}