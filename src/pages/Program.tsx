import { motion } from "framer-motion";
const ease = [0.16, 1, 0.3, 1] as const;
import { useParams, Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { BookOpen, Mic, Star, ArrowLeft, CheckCircle } from "lucide-react";

const programsData = [
  {
    id: "tahfizh",
    icon: BookOpen,
    title: "Tahfizh Al-Qur'an",
    shortDesc: "Program intensif menghafal Al-Qur'an dengan mutqin, dibimbing langsung oleh pengajar bersanad.",
    desc: "Program Tahfizh Al-Qur'an dirancang untuk membimbing peserta menghafal Al-Qur'an 30 juz dengan metode yang teruji dan efektif. Setiap peserta akan mendapat bimbingan personal dari pengajar yang memiliki sanad hafalan yang bersambung.",
    target: "Penuntut ilmu yang ingin menghafal Al-Qur'an secara intensif dengan bimbingan langsung dari pengajar bersanad.",
    duration: "2-3 tahun (tergantung kemampuan peserta)",
    curriculum: [
      "Tahap 1: Pengenalan dan perbaikan bacaan (Tajwid dasar)",
      "Tahap 2: Menghafal Juz 30 dan Juz 1",
      "Tahap 3: Menghafal secara bertahap dengan target harian",
      "Tahap 4: Muraja'ah (pengulangan) dan pemantapan hafalan",
      "Tahap 5: Ujian dan ijazah hafalan",
    ],
    methods: ["Talaqqi", "Musyafahah", "Muraja'ah Berkala"],
  },
  {
    id: "talaqqi",
    icon: Mic,
    title: "Talaqqi Al-Qur'an",
    shortDesc: "Pembelajaran membaca Al-Qur'an dengan metode talaqqi dan musyafahah langsung dari guru.",
    desc: "Program Talaqqi Al-Qur'an mengajarkan peserta untuk membaca Al-Qur'an dengan benar sesuai kaidah tajwid melalui metode talaqqi langsung dari mulut guru ke murid, sebagaimana metode yang digunakan sejak zaman Rasulullah ﷺ.",
    target: "Semua kalangan yang ingin memperbaiki bacaan Al-Qur'an mereka.",
    duration: "6-12 bulan",
    curriculum: [
      "Tahap 1: Makharijul huruf dan sifatul huruf",
      "Tahap 2: Hukum nun mati dan tanwin",
      "Tahap 3: Hukum mim mati, mad, dan waqaf",
      "Tahap 4: Praktik membaca dengan melihat mushaf",
      "Tahap 5: Evaluasi dan perbaikan berkelanjutan",
    ],
    methods: ["Talaqqi", "Musyafahah", "Sanad"],
  },
  {
    id: "qiraat",
    icon: Star,
    title: "Qira'at Al-Qur'an",
    shortDesc: "Mempelajari ilmu qira'at dan berbagai riwayat bacaan Al-Qur'an yang mutawatir.",
    desc: "Program Qira'at Al-Qur'an adalah program lanjutan bagi mereka yang telah menguasai hafalan dan tajwid. Peserta akan mempelajari berbagai riwayat qira'at yang mutawatir dari para imam qurra'.",
    target: "Hafizh Al-Qur'an yang ingin mendalami ilmu qira'at.",
    duration: "3-5 tahun",
    curriculum: [
      "Tahap 1: Dasar-dasar ilmu qira'at",
      "Tahap 2: Qira'at Imam 'Ashim riwayat Hafs dan Syu'bah",
      "Tahap 3: Qira'at Sab'ah (7 bacaan)",
      "Tahap 4: Qira'at 'Asyr (10 bacaan)",
      "Tahap 5: Ijazah qira'at dengan sanad bersambung",
    ],
    methods: ["Talaqqi", "Musyafahah", "Sanad"],
  },
];

const ProgramList = () => {
  return (
    <div>
      <PageHeader title="Program Pendidikan" subtitle="Program-program unggulan Halaqah Syekh Abdul Qadir" />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {programsData.map((program, i) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <Link to={`/program/${program.id}`} className="card-elevated block group">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <program.icon className="text-primary" size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{program.shortDesc}</p>
                      <p className="text-primary font-medium text-sm mt-4">Lihat Detail →</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding cream-section relative">
        <div className="absolute inset-0 pattern-islamic pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-4">Metodologi</p>
            <h2 className="heading-section text-foreground">Metode Pembelajaran</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Talaqqi", desc: "Metode belajar langsung dari mulut guru ke murid, memastikan setiap huruf dan bacaan dipelajari dengan tepat." },
              { title: "Musyafahah", desc: "Peserta melihat langsung gerakan bibir dan mulut guru saat membaca, sehingga makharijul huruf dapat dipelajari dengan benar." },
              { title: "Sanad", desc: "Mata rantai keilmuan yang bersambung dari guru ke guru hingga sampai kepada Rasulullah ﷺ, menjamin keaslian bacaan." },
            ].map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-elevated text-center"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{method.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProgramDetail = () => {
  const { id } = useParams();
  const program = programsData.find((p) => p.id === id);

  if (!program) {
    return <div className="min-h-screen flex items-center justify-center"><p>Program tidak ditemukan.</p></div>;
  }

  return (
    <div>
      <PageHeader title={program.title} subtitle={program.shortDesc} />
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <Link to="/program" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Kembali ke Daftar Program
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Deskripsi Program</h3>
              <p className="text-body text-muted-foreground">{program.desc}</p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Target Peserta</h3>
              <p className="text-body text-muted-foreground">{program.target}</p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Durasi</h3>
              <p className="text-body text-muted-foreground">{program.duration}</p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Kurikulum</h3>
              <div className="space-y-4">
                {program.curriculum.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-primary">{i + 1}</span>
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Metode Pembelajaran</h3>
              <div className="flex flex-wrap gap-3">
                {program.methods.map((m) => (
                  <span key={m} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    <CheckCircle size={14} /> {m}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export { ProgramList, ProgramDetail };
