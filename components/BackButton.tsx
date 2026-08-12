"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => (window.history.length > 1 ? router.back() : router.push("/"))}
      className="inline-flex items-center gap-2 text-teal-brand transition hover:text-teal-700"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-current">
        <span className="block h-0 w-0 border-y-[6px] border-r-[8px] border-y-transparent border-r-current" />
      </span>
      Kembali
    </button>
  );
}