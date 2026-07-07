import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0F172A] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
            M
          </div>

          <div>
            <h1 className="font-bold text-xl">
              MANIT Placement Portal
            </h1>

            <p className="text-xs text-slate-300">
              Training & Placement Cell
            </p>
          </div>

        </div>

        <div className="flex items-center gap-8">

  <Link to="/" className="hover:text-blue-300">
    Dashboard
  </Link>

  <Link to="/placement" className="hover:text-blue-300">
    New Submission
  </Link>

  <Link to="/" className="hover:text-blue-300">
    Logout
  </Link>

  {/* Profile */}
  <div className="flex items-center gap-3 ml-6 border-l border-slate-600 pl-6">

    <div className="text-right">
      <h4 className="font-semibold">
        Rahul Pandey
      </h4>

      <p className="text-xs text-slate-300">
        Student
      </p>
    </div>

    <img
      src="https://ui-avatars.com/api/?name=Rahul+Pandey&background=2563eb&color=fff"
      alt="Profile"
      className="w-10 h-10 rounded-full"
    />

  </div>

</div>

      </div>
    </nav>
  );
}