import { Link } from "react-router-dom";
import { FileSearch } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center grain-bg">
      <FileSearch size={40} className="text-verified mb-4" strokeWidth={1.5} />
      <p className="stamp text-flagged mb-4">Not found</p>
      <h1 className="text-2xl font-semibold text-parchment mb-2">This page didn't make it into the file.</h1>
      <p className="text-parchment-dim text-sm mb-6 max-w-sm">
        Whatever you were looking for isn't at this address. Let's get you back to somewhere that exists.
      </p>
      <Link
        to="/dashboard"
        className="bg-verified/10 border border-verified/30 text-verified px-5 py-2.5 rounded-lg hover:bg-verified/20 transition-colors text-sm"
      >
        Back to dashboard
      </Link>
    </div>
  );
}
