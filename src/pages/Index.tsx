import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Users, Mic, Star, GraduationCap, Calendar, ChevronRight, Quote } from "lucide-react";
import CountUp from "@/components/CountUp";
import heroQuran from "@/assets/hero-quran.jpg";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.6, ease },
};

const stagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const programs = [
  {
    icon: BookOpen,
    title: "Tahfizh Al-Qur'an",
    desc: "Program intensif menghafal Al-Qur'an dengan mutqin, dibimbing langsung oleh pengajar bersanad.",
  },
  {
    icon: Mic,
    title: "Talaqqi Al-Qur'an",
    desc: "Pembelajaran membaca Al-Qur'an dengan metode talaqqi dan musyafahah langsung dari guru.",
  },
  {
    icon: Star,
    title: "Qira'at Al-Qur'an",
    desc: "Mempelajari ilmu qira'at dan berbagai riwayat bacaan Al-Qur'an yang mutawatir.",
  },
];

const teachers = [
  { name: "Syekh Abdul Qadir", specialty: "AHLI QIRA'AT", image: teacher1 },
  { name: "Ustadz Ahmad Fauzi", specialty: "TAHFIZH AL-QUR'AN", image: teacher2 },
  { name: "Ustadz Ibrahim Hasan", specialty: "TALAQQI & TAJWID", image: teacher3 },
];

const stats = [
  { number: 30, suffix: "+", label: "Peserta" },
  { number: 10, suffix: "+", label: "Pengajar" },
  { number: 5, suffix: "+", label: "Program" },
  { number: 100, suffix: "+", label: "Kegiatan" },
];

const testimonials = [
  {
    quote: "Alhamdulillah, belajar di Halaqah Syekh Abdul Qadir mengubah cara saya memahami dan membaca Al-Qur'an. Sanad keilmuan yang terjaga membuat saya yakin dengan apa yang dipelajari.",
    name: "Ahmad Rizki",
    program: "Peserta Tahfizh",
  },
  {
    quote: "Metode talaqqi yang diterapkan sangat efektif. Dalam waktu singkat, bacaan saya menjadi lebih baik dan sesuai kaidah tajwid yang benar.",
    name: "Muhammad Fajar",
    program: "Peserta Talaqqi",
  },
  {
    quote: "Suasana belajar yang penuh adab dan ilmu. Para pengajar sangat sabar dan kompeten dalam membimbing setiap peserta.",
    name: "Abdullah Syahid",
    program: "Peserta Qira'at",
  },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center cream-section overflow-hidden">
        <div className="absolute inset-0 pattern-islamic pointer-events-none" />
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-4">
                Majelis Ilmu Al-Qur'an
              </p>
              <h1 className="heading-display text-primary leading-tight">
                Menjaga Sanad,
                <br />
                Memuliakan Al-Qur'an
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-body text-muted-foreground mt-6 max-w-lg"
            >
              Majelis Pembelajaran Al-Qur'an, Tahfizh, dan Qira'at untuk
              Penuntut Ilmu yang ingin mendalami ilmu Al-Qur'an dengan sanad
              yang terjaga.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link to="/program" className="btn-primary-custom">
                Lihat Program
              </Link>
              <Link to="/kontak" className="btn-outline-custom">
                Gabung Halaqah
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroQuran}
                alt="Al-Qur'an di atas rehal"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p {...fadeUp} className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-4">
              Tentang Kami
            </motion.p>
            <motion.h2 {...fadeUp} className="heading-section text-foreground">
              Halaqah Syekh Abdul Qadir
            </motion.h2>
            <motion.p {...fadeUp} className="text-body text-muted-foreground mt-6">
              Halaqah Syekh Abdul Qadir adalah majelis pembelajaran Al-Qur'an yang
              berdiri dengan tujuan mulia: menjaga sanad keilmuan Al-Qur'an dan
              melahirkan generasi huffazh yang berakhlak Qurani. Dengan metode
              talaqqi dan musyafahah, setiap peserta dibimbing langsung oleh
              pengajar yang memiliki sanad hingga Rasulullah ﷺ.
            </motion.p>
            <motion.div {...fadeUp}>
              <Link
                to="/tentang"
                className="inline-flex items-center gap-2 text-primary font-medium mt-8 hover:gap-3 transition-all"
              >
                Baca Selengkapnya <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding cream-section relative">
        <div className="absolute inset-0 pattern-islamic pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-4">
              Program Unggulan
            </p>
            <h2 className="heading-section text-foreground">
              Program Pendidikan
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-elevated"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <program.icon className="text-primary" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {program.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-4">
              Guru Pembimbing
            </p>
            <h2 className="heading-section text-foreground">
              Para Pengajar Kami
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, i) => (
              <motion.div
                key={teacher.name}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-xs font-medium tracking-[0.1em] text-primary">
                  {teacher.specialty}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground mt-1">
                  {teacher.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="maroon-section py-20 md:py-28">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <motion.div key={stat.label} {...fadeUp}>
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-4">
              Galeri
            </p>
            <h2 className="heading-section text-foreground">
              Kegiatan Halaqah
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt={`Kegiatan halaqah ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 aspect-square"
                />
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-8">
            <Link to="/galeri" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Lihat Semua Galeri <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding cream-section relative">
        <div className="absolute inset-0 pattern-islamic pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <Quote className="mx-auto text-primary/30 mb-8" size={48} />
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="mt-8">
                <p className="font-semibold text-foreground">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].program}
                </p>
              </div>
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentTestimonial ? "bg-primary w-8" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="maroon-section py-20 md:py-28">
        <div className="container-custom relative z-10 text-center">
          <motion.h2 {...fadeUp} className="heading-section text-primary-foreground max-w-2xl mx-auto">
            Gabung Bersama Kami dalam Majelis Al-Qur'an
          </motion.h2>
          <motion.p {...fadeUp} className="text-primary-foreground/80 mt-4 max-w-lg mx-auto">
            Mulai perjalanan ilmu Anda bersama para pengajar bersanad dan
            komunitas penuntut ilmu yang istiqamah.
          </motion.p>
          <motion.div {...fadeUp} className="mt-8">
            <Link
              to="/kontak"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium bg-secondary text-secondary-foreground hover:scale-105 transition-all duration-300"
            >
              Daftar Sekarang
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
