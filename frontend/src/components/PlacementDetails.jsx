export default function PlacementDetails() {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">

      {/* Header */}
      <div className="pb-6 border-b">
        <h2 className="text-3xl font-bold text-slate-800">
          Placement Details
        </h2>

        <p className="text-emerald-500 mt-1">
          Enter information related to your placement offer.
        </p>
      </div>

      {/* Body */}
      <div className="p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Company Name */}
          <div>
            <label className="block font-semibold mb-2">
              Company Name *
            </label>

            <input
              type="text"
              placeholder="Google"
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Job Role */}
          <div>
            <label className="block font-semibold mb-2">
              Job Role *
            </label>

            <input
              type="text"
              placeholder="Software Engineer"
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* CTC */}
          <div>
            <label className="block font-semibold mb-2">
              Package (CTC)
            </label>

            <input
              type="text"
              placeholder="18 LPA"
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Offer Type */}
          <div>
            <label className="block font-semibold mb-2">
              Offer Type
            </label>

            <select className="w-full border rounded-xl p-3">
              <option>Full Time</option>
              <option>Internship</option>
              <option>PPO</option>
              <option>Intern + FTE</option>
            </select>
          </div>

          {/* Joining Date */}
          <div>
            <label className="block font-semibold mb-2">
              Joining Date
            </label>

            <input
              type="date"
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Work Location */}
          <div>
            <label className="block font-semibold mb-2">
              Work Location
            </label>

            <input
              type="text"
              placeholder="Bangalore"
              className="w-full border rounded-xl p-3"
            />
          </div>

        </div>

        {/* Placement Mode */}

        <div className="mt-8">

          <label className="block font-semibold mb-4">
            Placement Mode
          </label>

          <div className="flex gap-8">

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="mode"
              />
              On Campus
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="mode"
              />
              Off Campus
            </label>

          </div>

        </div>

      </div>

    </div>
  );
}