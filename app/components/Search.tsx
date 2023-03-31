"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-3">
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        placeholder="Search"
        className="outline-none py-2 px-5 rounded-md placeholder:text-lg placeholder:text-slate-600 bg-slate-200"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type="submit"
        className="text-xl bg-slate-200 rounded-md px-2 py-1"
      >
        🚀
      </button>
    </form>
  );
}
