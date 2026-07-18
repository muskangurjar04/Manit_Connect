import { Plus } from "lucide-react";

function TopBar() {
  return (
   <div className="followup-topbar flex flex-col md:flex-row md:items-center md:justify-between gap-3">

      <div>

       <h1 className="followup-title text-2xl md:text-4xl">
          Company Follow-Up Report
        </h1>

      <p className="followup-subtitle text-sm md:text-base">
          Record company interactions and maintain follow-up history.
        </p>

      </div>

    </div>
  );
}

export default TopBar;