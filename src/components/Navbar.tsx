import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter()
  return (
    <div className="navbar bg-base-100">
      <a onClick={() => router.push('/')} className="btn btn-ghost normal-case text-xl">
        Movielist
      </a>
    </div>
  );
};

export default Navbar;
