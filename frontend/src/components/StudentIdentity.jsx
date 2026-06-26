import { CircleUserRound } from "lucide-react";
export default function StudentIdentity() {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">

      {/* Header */}
      <div className="pb-6 border-b">
        <div className="flex items-center gap-3">

  <CircleUserRound
    size={24}
    className="text-blue-600"
  />

  <h2 className="text-3xl font-bold text-slate-800">
    Student Identity
  </h2>

</div>

        <p className="text-gray-500 mt-2">
          Verify your personal and academic information
        </p>
      </div>

      {/* Body */}

      <div className="p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Student Name */}

          <div>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Student Name
            </label>className="block text-sm font-medium text-gray-600 mb-2"

            <input
              type="text"
              placeholder="Rahul Pandey"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />

          </div>

          {/* Enrollment */}

          <div>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Enrollment Number
            </label>

            <input
              type="text"
              placeholder="231120XXX"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />

          </div>

          {/* Email */}

          <div>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="rahul@manit.ac.in"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />

          </div>

          {/* Mobile */}

          <div>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Mobile Number
            </label>

            <input
              type="text"
              placeholder="9876543210"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />

          </div>

          {/* Department */}

          <div>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Department
            </label>

            <select className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none">

              <option>CSE</option>
              <option>IT</option>
              <option>ECE</option>
              <option>Mechanical</option>
              <option>Civil</option>

            </select>

          </div>

          {/* Program */}

          <div>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Programme
            </label>

            <select className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none">

              <option>B.Tech</option>
              <option>M.Tech</option>
              <option>MCA</option>
              <option>PhD</option>

            </select>

          </div>

          {/* Branch */}

          <div>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Branch
            </label>

            <input
              type="text"
              placeholder="Computer Science & Engineering"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />

          </div>

          {/* Passing Year */}

          <div>

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Passing Year
            </label>

            <input
              type="number"
              placeholder="2027"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />

          </div>

        </div>

      </div>

    </div>
  );
}