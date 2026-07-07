import { useState } from "react";
import { FileUp } from "lucide-react";
export default function DocumentUpload({ formData, handleChange, handleFileChange, handleSubmit }) {
    


  const onFileChange = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  if (file.type !== "application/pdf") {
    alert("Only PDF files are allowed.");
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("Maximum file size is 5 MB.");
    return;
  }

  handleFileChange(file);
};

  return (
    <div className="rounded-2xl">

      {/* Header */}
      <div className="pb-6 border-b">
        <div className="flex items-center gap-3">

<FileUp
size={24}
className="text-blue-600"
/>

<h2 className="text-3xl font-bold text-slate-800">
Offer Verification
</h2>

</div>

       <p className="text-gray-500 mt-2">
          Upload your official offer letter for verification.
        </p>
      </div>

      {/* Body */}
      <div className="p-10">

        {/* Upload Box */}
   
        <label className="block font-semibold mb-3">
          Offer Letter (PDF)
        </label>

        <label className="border-2 border-dashed border-gray-300 rounded-3xl py-16 px-8 flex flex-col items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer">

          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl mb-5">
📄
</div>

          <h3 className="font-bold text-lg">
            Drag & Drop Offer Letter
          </h3>

          <p className="text-gray-500 mt-2">
           PDF only • Maximum size 5 MB
          </p>

          <input
  type="file"
  accept=".pdf"
  className="hidden"
  onChange={onFileChange}
/>

        </label>
             {formData.offerLetter && (
  <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4">
    <p className="font-semibold text-green-700">
      ✓ {formData.offerLetter.name}
    </p>

    <p className="text-sm text-green-600">
      {(formData.offerLetter.size / 1024 / 1024).toFixed(2)} MB
    </p>
  </div>
)}

        {/* Remarks */}

        <div className="mt-8">

          <label className="block font-semibold mb-3">
            Remarks (Optional)
          </label>

          <textarea
  name="remarks"
  value={formData.remarks}
  onChange={handleChange}
  rows="5"
  placeholder="Add any extra information..."
  className="w-full border rounded-2xl p-4 resize-none"
/>

        </div>

        {/* Buttons */}

        <div className="flex justify-end mt-8">

  <button
    type="button"
    className="h-12 px-8 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
    onClick={handleSubmit}
  >
    Submit for Verification
  </button>

</div>

      </div>

    </div>
  );
}