import { Logo } from "@/assets/Logo";
import { ModeToggle } from "@/components/mode-toggler";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-5">
      <Link to="/" className="flex items-center ">
        <Logo /> <span className="font-bold ml-2">Task</span> Master
      </Link>
      <Link to="/tasks">Tasks</Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
