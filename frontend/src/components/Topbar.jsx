import {
  Search,
  Bell,
  Grid2x2,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">

        {/* Search */}

        <div className="relative w-80">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            placeholder="Search resources..."
            className="w-full bg-slate-100 rounded-full pl-11 pr-4 py-3 outline-none"
          />

        </div>

        {/* Right */}

        <div className="flex items-center gap-8">

          <Bell
            size={22}
            className="text-gray-600 cursor-pointer"
          />

          <Grid2x2
            size={22}
            className="text-gray-600 cursor-pointer"
          />

          <div className="flex items-center gap-3">

            <div className="text-right">

              <h3 className="font-semibold text-sm">
                Rahul Pandey
              </h3>

              <p className="text-xs text-gray-500">
                Student ID : 231120XXX
              </p>

            </div>

            <img
              src="https://ui-avatars.com/api/?name=Rahul+Pandey"
              className="w-11 h-11 rounded-full"
            />

          </div>

        </div>

      </div>

    </header>
  );
}