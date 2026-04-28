import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import heroQuran from "@/assets/hero-quran.jpg";
const ease = [0.16, 1, 0.3, 1] as const;

const productData = [
  {
    name: "Tajwidul Huruf",
    origin: "Jakarta, Indonesia",
    category: "Hard Book",
    harga: "Rp. 15000",
  },
  {
    name: "Mushaf",
    origin: "Bandung, Indonesia",
    category: "Hard Book",
    harga: "Rp. 50000",
  },
  {
    name: "Usul Qiraat",
    origin: "Surabaya, Indonesia",
    category: "Hard Book",
    harga: "Rp. 30000",
  },
  {
    name: "Ebook Matan Jazary",
    origin: "Makassar, Indonesia",
    category: "Digital Product",
    harga: "Rp. 20000",
  },
  {
    name: "Ebook Belajar Tajwid",
    origin: "Medan, Indonesia",
    category: "Digital Product",
    harga: "Rp. 10000",
  },
  {
    name: "Tumbler Halaqah",
    origin: "Semarang, Indonesia",
    category: "Merchandise",
    harga: "Rp. 25000",
  },
];

const categoryFilters = [
  "Semua",
  "Hard Book",
  "Digital Product",
  "Merchandise",
];

const Produk = () => {
  const [filter, setFilter] = useState("Semua");
  const filtered =
    filter === "Semua"
      ? productData
      : productData.filter((s) => s.category === filter);

  return (
    <div>
      <PageHeader
        title="Katalog Produk"
        subtitle="Detail Produk yang dijual di Halaqah Syekh Abdul Qadir"
      />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categoryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="card-elevated"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={heroQuran}
                    alt="Al-Qur'an di atas rehal"
                    className="rounded-sm"
                  />
                  {/* <span className="font-serif text-xl font-bold text-primary">
                    {product.name.charAt(0)}
                  </span> */}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                {/* <p className="text-sm text-muted-foreground mt-1">
                  {product.origin}
                </p> */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Kategori</span>
                    <span className="font-medium text-foreground">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-muted-foreground">Harga</span>
                    <span className="font-medium text-primary">
                      {product.harga}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produk;
