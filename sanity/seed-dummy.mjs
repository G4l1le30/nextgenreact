/**
 * Seed 10 dummy activity untuk uji pagination.
 * Jalankan: SANITY_TOKEN=<token> node sanity/seed-dummy.mjs
 */
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "f230hrw7",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

if (!client.config().token) {
  throw new Error("SANITY_TOKEN required.");
}

const exists = await client.fetch(
  `count(*[_type == "activity" && title match "Dummy Kegiatan *"])`,
);
if (exists > 0) {
  console.log(`Sudah ada ${exists} dummy - skip.`);
  process.exit(0);
}

const titles = [
  "Dummy Kegiatan 1 - Edukasi Sampah",
  "Dummy Kegiatan 2 - Urban Farming",
  "Dummy Kegiatan 3 - Parenting Class",
  "Dummy Kegiatan 4 - Anti Bullying",
  "Dummy Kegiatan 5 - Pencegahan NAPZA",
  "Dummy Kegiatan 6 - Donor Darah",
  "Dummy Kegiatan 7 - Bakti Sosial",
  "Dummy Kegiatan 8 - Olahraga Bersama",
  "Dummy Kegiatan 9 - Tanam Pohon",
  "Dummy Kegiatan 10 - Festival Edukasi",
];

for (let i = 0; i < titles.length; i++) {
  const t = titles[i];
  await client.create({
    _type: "activity",
    title: t,
    description: `Ini adalah ${t.toLowerCase()} yang diadakan NexGen sebagai program edukasi lingkungan, karakter, dan kesehatan bagi sekolah serta komunitas.`,
    tag: "Dummy Data",
    date: `2025-0${(i % 9) + 1}-15`,
    layout: i % 2 === 0 ? "single" : "duo",
    images: [],
    published: true,
  });
  console.log("Created:", t);
}

console.log("Seed dummy selesai.");