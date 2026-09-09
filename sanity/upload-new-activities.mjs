import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import os from "os";

// Ambil auth token dari ~/.config/sanity/config.json atau env SANITY_TOKEN
let token = process.env.SANITY_TOKEN;
if (!token) {
  try {
    const configPath = path.join(os.homedir(), ".config/sanity/config.json");
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
      token = config.authToken;
    }
  } catch (err) {
    console.error("Gagal membaca token Sanity:", err.message);
  }
}

if (!token) {
  throw new Error("Token Sanity tidak ditemukan di env atau ~/.config/sanity/config.json");
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "f230hrw7",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: token,
  useCdn: false,
});

const uploadImage = async (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File tidak ditemukan: ${filePath}`);
  }
  const filename = path.basename(filePath);
  console.log(`Mengunggah foto: ${filename}...`);
  const buf = fs.readFileSync(filePath);
  const contentType = "image/jpeg";
  const asset = await client.assets.upload("image", buf, {
    contentType,
    filename,
  });
  console.log(` -> Terunggah dengan Asset ID: ${asset._id}`);
  return asset;
};

const home = os.homedir();

const newActivities = [
  {
    title: 'Edukasi Pemilahan Sampah Sekolah: "Yuk Buang Sampah Sesuai Jenisnya" di SDN Malaka Jaya 07 Pagi',
    slug: {
      _type: "slug",
      current: "edukasi-pemilahan-sampah-sdn-malaka-jaya-07-pagi",
    },
    tag: "Edukasi Lingkungan",
    date: "2026-09-08",
    description:
      'NexGen menyelenggarakan program edukasi lingkungan bertajuk "Yuk Buang Sampah Sesuai Jenisnya" di SDN Malaka Jaya 07 Pagi, Jakarta Timur, melatih ratusan siswa memilah sampah organik, anorganik, residu, dan B3 sejak bangku sekolah dasar.',
    content:
      'Sebagai wujud komitmen terhadap pelestarian lingkungan dan pembentukan karakter generasi muda, NexGen menggelar aksi edukasi pemilahan sampah bertajuk "Yuk Buang Sampah Sesuai Jenisnya" di SDN Malaka Jaya 07 Pagi, Duren Sawit, Jakarta Timur.\n\nKegiatan yang berlangsung di lapangan sekolah ini dihadiri oleh ratusan siswa berseragam olahraga dan jajaran dewan guru yang antusias menyimak pemaparan dari tim fasilitator NexGen. Menggunakan alat peraga tempat sampah interaktif, anak-anak diajarkan secara langsung cara mengenali dan memisahkan berbagai kategori sampah—mulai dari sampah organik, anorganik, residu, hingga sampah berbahaya (B3).\n\nMelalui metode simulasi interaktif dan kuis berhadiah, para siswa diajak mempraktikkan langsung pembuangan sampah ke wadah yang tepat. Inisiatif ini diharapkan mampu membentuk kebiasaan peduli lingkungan yang berkelanjutan, baik di lingkungan sekolah maupun di rumah masing-masing.',
    photoPaths: [
      path.join(home, "Downloads/edukasi_sampah1/WhatsApp Image 2026-09-08 at 14.01.29.jpeg"),
      path.join(home, "Downloads/edukasi_sampah1/WhatsApp Image 2026-09-08 at 14.01.29(2).jpeg"),
      path.join(home, "Downloads/edukasi_sampah1/WhatsApp Image 2026-09-08 at 14.01.29(3).jpeg"),
    ],
  },
  {
    title: 'Gerakan Pramuka Peduli Lingkungan: "Lihat, Pikir, Buang! Habis Jajan Langsung Pilah" Bersama NexGen',
    slug: {
      _type: "slug",
      current: "gerakan-pramuka-peduli-lingkungan-lihat-pikir-buang",
    },
    tag: "Edukasi Lingkungan",
    date: "2026-09-08",
    description:
      'NexGen menginisiasi gerakan pilah sampah tematik "Lihat, Pikir, Buang! Habis Jajan Langsung Pilah" bersama anggota Pramuka, menanamkan kedisiplinan 5 kategori pemilahan sampah di area sekolah.',
    content:
      'PT. Next Generation Indonesia (NexGen) kembali memperkuat gerakan sadar lingkungan di ranah pendidikan dasar melalui kampanye tematik bertajuk "Lihat, Pikir, Buang! Habis Jajan Langsung Pilah". Kegiatan ini melibatkan anggota Pramuka Siaga dan Penggalang yang berkumpul di lapangan terbuka sekolah.\n\nFasilitator NexGen memandu sesi edukasi menggunakan pendekatan 3 langkah taktis: Melihat jenis sampah jajan yang dikonsumsi, Memikirkan dampaknya bagi bumi, serta Membuangnya secara cermat ke tempat pemilahan khusus. Terdapat 5 kategori pemilahan yang diperkenalkan secara intensif, mencakup sampah Anorganik, Organik, Residu, B3, dan Kertas.\n\nDengan membawa semangat Dasa Darma Pramuka "Cinta alam dan kasih sayang sesama manusia", para siswa menunjukkan antusiasme tinggi saat mempraktikkan simulasi pemilahan langsung di hadapan teman-temannya. Program ini menjadi bagian dari rangkaian agenda berkelanjutan NexGen dalam mewujudkan sekolah bebas timbunan sampah plastik.',
    photoPaths: [
      path.join(home, "Downloads/edukasi_sampah2/WhatsApp Image 2026-09-08 at 14.03.54.jpeg"),
      path.join(home, "Downloads/edukasi_sampah2/WhatsApp Image 2026-09-08 at 14.03.54.jpeg.jpeg"),
    ],
  },
  {
    title: 'Seminar Parenting: Mengenal Tumbuh Kembang Anak, Gaya Belajar, dan Pola Asuh Tepat di SDN Pondok Kopi 03',
    slug: {
      _type: "slug",
      current: "seminar-parenting-tumbuh-kembang-dan-pola-asuh-sdn-pondok-kopi-03",
    },
    tag: "Parenting & Karakter",
    date: "2026-09-08",
    description:
      "NexGen menghadirkan seminar parenting inspiratif di SDN Pondok Kopi 03 Jakarta Timur, mendampingi para orang tua dan wali murid dalam memahami keunikan tumbuh kembang, gaya belajar, serta pola asuh suportif bagi anak usia sekolah.",
    content:
      'Menyadari pentingnya sinergi antara keluarga dan sekolah dalam mencetak generasi unggul, NexGen menyelenggarakan seminar parenting bertajuk "Mengenal Tumbuh Kembang Anak, Gaya Belajar, dan Pola Asuh yang Tepat" di ruang kelas SDN Pondok Kopi 03, Jakarta Timur.\n\nAcara ini dipadati oleh puluhan ibu dan wali murid yang hadir dengan penuh antusias. Pemateri ahli dari NexGen memaparkan materi komprehensif seputar tahapan perkembangan psikologis anak usia dasar, cara mengidentifikasi gaya belajar dominan (visual, auditori, atau kinestetik), serta teknik komunikasi efektif yang mampu membangun rasa percaya diri anak tanpa tekanan berlebih.\n\nSuasana seminar berlangsung hangat dan interaktif. Para orang tua secara aktif berdialog dan membagikan tantangan pengasuhan sehari-hari dalam sesi tanya jawab terbuka. Kegiatan ditutup dengan foto bersama penuh keakraban sebagai simbol komitmen bersama dalam mendampingi tumbuh kembang anak secara positif dan berdaya.',
    photoPaths: [
      path.join(home, "Downloads/edukasi_parenting/WhatsApp Image 2026-09-08 at 14.05.59(5).jpeg"),
      path.join(home, "Downloads/edukasi_parenting/WhatsApp Image 2026-09-08 at 13.58.14.jpeg"),
      path.join(home, "Downloads/edukasi_parenting/WhatsApp Image 2026-09-08 at 14.05.58(3).jpeg"),
      path.join(home, "Downloads/edukasi_parenting/WhatsApp Image 2026-09-08 at 14.05.59.jpeg"),
      path.join(home, "Downloads/edukasi_parenting/WhatsApp Image 2026-09-08 at 14.05.59(2).jpeg"),
      path.join(home, "Downloads/edukasi_parenting/WhatsApp Image 2026-09-08 at 14.05.58(2).jpeg"),
    ],
  },
];

async function main() {
  console.log("=== Memulai Proses Upload Aktivitas ke Sanity CMS ===");
  console.log(`Project: ${client.config().projectId} | Dataset: ${client.config().dataset}\n`);

  for (const act of newActivities) {
    console.log(`\n--------------------------------------------------`);
    console.log(`Memproses: ${act.title}`);

    // Cek apakah aktivitas dengan slug ini sudah ada sebelumnya
    const existing = await client.fetch(
      `*[_type == "activity" && slug.current == $slug][0]`,
      { slug: act.slug.current }
    );

    if (existing) {
      console.log(`Aktivitas dengan slug "${act.slug.current}" sudah ada (ID: ${existing._id}). Lewati pembuatan baru.`);
      continue;
    }

    const imageRefs = [];
    for (const p of act.photoPaths) {
      const asset = await uploadImage(p);
      imageRefs.push({
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      });
    }

    console.log(`Membuat dokumen aktivitas di Sanity...`);
    const doc = await client.create({
      _type: "activity",
      title: act.title,
      slug: act.slug,
      tag: act.tag,
      date: act.date,
      description: act.description,
      content: act.content,
      images: imageRefs,
      published: true,
    });

    console.log(`✅ Berhasil dibuat: ${doc._id} [Slug: ${act.slug.current}]`);
  }

  console.log("\n=== Semua Aktivitas Baru Berhasil Dimasukkan! ===");
}

main().catch((err) => {
  console.error("❌ Terjadi kesalahan saat eksekusi:", err);
  process.exit(1);
});
