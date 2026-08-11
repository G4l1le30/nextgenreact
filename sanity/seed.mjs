/**
 * Seed dua aktivitas awal ke Sanity.
 * Jalankan: node sanity/seed.mjs (butuh SANITY_TOKEN env)
 * Buat token: sanity.io/manage -> project -> API -> Add token (write access).
 */
import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "f230hrw7",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

if (!client.config().token) {
  throw new Error("SANITY_TOKEN required. Buat token di sanity.io/manage -> API.");
}

const upload = async (file) => {
  const buf = fs.readFileSync(path.join(root, "public/images", file));
  const contentType = file.endsWith(".png") ? "image/png" : "image/jpeg";
  return client.assets.upload("image", buf, { contentType });
};

const activities = [
  {
    title: "Giat Mitigasi Bencana",
    description:
      "NexGen bekerjasama dengan BPBD mengedukasi masyarakat tentang kesiapsiagaan menghadapi bencana melalui latihan dan simulasi yang interaktif.",
    tag: "Kegiatan Bersama BPBD",
    files: ["kegiatan1.jpg", "kegiatan2.jpg"],
  },
  {
    title: "Main sama kelinci",
    description: "NexGen Dalam Giat Mitigasi Satwa & Feeding",
    tag: "NexGen Dalam Giat Mitigasi Satwa & Feeding",
    files: ["kelinci1.jpg"],
  },
];

const existing = await client.fetch(`count(*[_type == "activity"])`);
if (existing > 0) {
  console.log(`Sudah ada ${existing} activity - skip seed.`);
  process.exit(0);
}

for (const act of activities) {
  const assets = [];
  for (const f of act.files) {
    const asset = await upload(f);
    assets.push({ _type: "image", asset: { _type: "reference", _ref: asset._id } });
  }
  const doc = await client.create({
    _type: "activity",
    title: act.title,
    description: act.description,
    tag: act.tag,
    images: assets,
    published: true,
  });
  console.log("Created:", doc._id, "-", act.title);
}

console.log("Seed selesai.");