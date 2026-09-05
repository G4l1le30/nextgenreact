"use client";

import { useRouter } from "next/navigation";

export default function BackButton({
  href,
  label = "Kembali",
}: {
  href?: string;
  label?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group relative inline-flex items-center cursor-pointer border-0 bg-transparent p-0 transition-all duration-300"
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-teal-brand text-accent-lime shadow-md transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-28 group-hover:bg-mid-green dark:bg-accent-lime dark:text-teal-dark dark:group-hover:bg-accent-lime/90">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 text-xs font-bold text-white opacity-0 transition-all duration-300 group-hover:max-w-[60px] group-hover:pl-1 group-hover:opacity-100 dark:text-teal-dark">
          {label}
        </span>
      </div>
      <span className="ml-3 text-xs font-bold uppercase tracking-wider text-teal-brand transition-opacity duration-300 group-hover:opacity-0 dark:text-slate-300">
        {label}
      </span>
    </button>
  );
}