"use client";

import { ChangeEvent, useState } from "react";

import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) {
      return;
    }
    router.push(`/events/${searchText}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    setSearchText(input);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        value={searchText}
        onChange={handleChange}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 focus:ring-2 focus:bg-white/10 transition"
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
}
