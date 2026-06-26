export default function DocumentUpload() {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">

      {/* Header */}
      <div className="bg-violet-600 px-8 py-5">
        <h2 className="text-2xl font-bold text-white">
          Offer Verification
        </h2>

        <p className="text-violet-100 mt-1">
          Upload your official offer letter for verification.
        </p>
      </div>

      {/* Body */}
      <div className="p-8">

        {/* Upload Box */}
        <label className="block font-semibold mb-3">
          Offer Letter (PDF)
        </label>

        <label className="border-2 border-dashed border-violet-400 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-violet-50 transition">

          <div className="text-5xl mb-4">📄</div>

          <h3 className="font-bold text-lg">
            Drag & Drop PDF Here
          </h3>

          <p className="text-gray-500 mt-2">
            or click to browse
          </p>

          <input
            type="file"
            accept=".pdf"
            className="hidden"
          />

        </label>

        {/* Remarks */}

        <div className="mt-8">

          <label className="block font-semibold mb-3">
            Remarks (Optional)
          </label>

          <textarea
            rows="5"
            placeholder="Add any extra information..."
            className="w-full border rounded-2xl p-4 resize-none"
          />

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-8">

          <button className="px-6 py-3 rounded-xl border font-semibold hover:bg-gray-100">
            Save Draft
          </button>

          <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Submit for Verification
          </button>

        </div>

      </div>

    </div>
  );
}