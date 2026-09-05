import { defineType, defineField } from "sanity";

export default defineType({
  name: "activity",
  title: "Activity",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug URL",
      type: "slug",
      description: "URL unik artikel (klik Generate otomatis dari judul)",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description (Ringkasan)",
      description: "Ringkasan pendek kegiatan untuk kartu galeri dan beranda",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Full Content (Isi Lengkap Artikel)",
      description: "Narasi lengkap artikel berita kegiatan untuk halaman baca detail (bisa multi paragraf)",
      type: "text",
    }),
    defineField({
      name: "tag",
      title: "Tag",
      description: "Chip text di bawah deskripsi, mis. 'Kegiatan Bersama BPBD'",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
    defineField({
      name: "images",
      title: "Images",
      description: "Tampilan dihitung otomatis dari orientasi foto (klik Crop untuk atur potongan).",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", media: "images.0" },
  },
});