import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
const ease = [0.16, 1, 0.3, 1] as const;
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import { X } from "lucide-react";

const categories = ["Semua", "Kegiatan Halaqah", "Khataman Qur'an", "Belajar Qira'at", "Majelis Ilmu"];

const galleryItems = [
  { src: gallery1, category: "Kegiatan Halaqah", alt: "Halaqah belajar Al-Qur'an di masjid" },
  { src: gallery2, category: "Khataman Qur'an", alt: "Acara khataman Al-Qur'an" },
  { src: gallery3, category: "Belajar Qira'at", alt: "Mempelajari bacaan Al-Qur'an" },
  { src: gallery4, category: "Majelis Ilmu", alt: "Majelis ilmu di masjid" },
  { src: gallery5, category: "Kegiatan Halaqah", alt: "Syekh mengajar halaqah" },
  { src: gallery1, category: "Belajar Qira'at", alt: "Kegiatan belajar qira'at" },
  { src: gallery3, category: "Majelis Ilmu", alt: "Membaca Al-Qur'an" },
  { src: gallery4, category: "Khataman Qur'an", alt: "Interior masjid saat kegiatan" },
];

const Galeri = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCategory === "Semua"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      <PageHeader title="Galeri Kegiatan" subtitle="Dokumentasi kegiatan Halaqah Syekh Abdul Qadir" />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={`${item.src}-${item.category}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease }}
                  className="cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => setLightbox(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-background hover:text-primary-foreground"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeri;
