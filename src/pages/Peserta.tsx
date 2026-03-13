import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
const ease = [0.16, 1, 0.3, 1] as const;

const studentsData = [
  { name: "Ahmad Rizki", origin: "Jakarta, Indonesia", program: "Tahfizh Al-Qur'an", hafalan: "15 Juz" },
  { name: "Muhammad Fajar", origin: "Bandung, Indonesia", program: "Talaqqi Al-Qur'an", hafalan: "5 Juz" },
  { name: "Abdullah Syahid", origin: "Surabaya, Indonesia", program: "Qira'at Al-Qur'an", hafalan: "30 Juz" },
  { name: "Umar Hakim", origin: "Makassar, Indonesia", program: "Tahfizh Al-Qur'an", hafalan: "20 Juz" },
  { name: "Yusuf Hamdi", origin: "Medan, Indonesia", program: "Talaqqi Al-Qur'an", hafalan: "10 Juz" },
  { name: "Bilal Iskandar", origin: "Semarang, Indonesia", program: "Tahfizh Al-Qur'an", hafalan: "25 Juz" },
];

const programFilters = ["Semua", "Tahfizh Al-Qur'an", "Talaqqi Al-Qur'an", "Qira'at Al-Qur'an"];

const Peserta = () => {
  const [filter, setFilter] = useState("Semua");
  const filtered = filter === "Semua" ? studentsData : studentsData.filter((s) => s.program === filter);

  return (
    <div>
      <PageHeader title="Profil Peserta" subtitle="Para penuntut ilmu Halaqah Syekh Abdul Qadir" />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {programFilters.map((f) => (
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
            {filtered.map((student, i) => (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="card-elevated"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="font-serif text-xl font-bold text-primary">
                    {student.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{student.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{student.origin}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Program</span>
                    <span className="font-medium text-foreground">{student.program}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-muted-foreground">Hafalan</span>
                    <span className="font-medium text-primary">{student.hafalan}</span>
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

export default Peserta;
