import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Heart, Target, BookOpen, Shield } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease },
};

const values = [
  {
    icon: Heart,
    title: "Ikhlas",
    desc: "Mengajar dan belajar semata-mata karena Allah SWT.",
  },
  {
    icon: Target,
    title: "Istiqamah",
    desc: "Konsisten dalam menuntut ilmu dan mengamalkannya.",
  },
  {
    icon: BookOpen,
    title: "Adab Sebelum Ilmu",
    desc: "Menjunjung tinggi adab dalam setiap proses pembelajaran.",
  },
  {
    icon: Shield,
    title: "Sanad Keilmuan",
    desc: "Menjaga mata rantai keilmuan hingga Rasulullah ﷺ.",
  },
];

const TentangKami = () => {
  return (
    <div>
      <PageHeader
        title="Tentang Kami"
        subtitle="Mengenal lebih dekat Halaqah Syekh Abdul Qadir"
      />

      {/* Sejarah */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-4">
              Sejarah
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Latar Belakang Halaqah
            </h2>
            <div className="text-body text-muted-foreground space-y-4">
              <p>
                Halaqah Tajwidul Huruf atau sekarang yang dikenal dengan Halaqah
                Al-Quran Syekh Abdul Qadir adalah majlis littaallum wa ta’lim
                Al-Qur’an (belajar dan mengajar AlQur’an), melalui silsilah
                sanad keilmuan Al- Qur’an dari Syekh Abdul Qadir Muhammad Tamam
                Ali Al-Ausiy Asy-Syafi’i Al-Azhary.
              </p>
              <p>
                Halaqah ini berdiri pada tahun 2018 atas arahan dan amanah dari
                Maulana Syekh Abdul Qadir. Tujuan berdirinya majelis ini adalah
                untuk membina para Qurra’ masa depan yang akan meneruskan
                silsilah halaqah-halaqah Qur’an yang sudah diwariskan dari
                generasi ke generasi oleh kaum Muslimin.
              </p>
              <p>
                Metode belajar dan mengajar Al-Qur’an yang berjalan di halaqah
                ini, mengutamakan kualitas bacaan, baik secara Tathbiqi (praktek
                langsung baca dengan bimbingan muqri’) dan Nazhari(teori).
                Halaqah Syekh Abdul Qadir bertempat di Gamaliyah, tepat di
                samping Masjid Sayyidina Hussein di Mesir. Halaqah ini berada di
                bawah payung Muassasah Al-Halaqah Liihya At-Turas Mesir.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manhajiah */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-4">
              Manhajiyah
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Metode Pembelajaran Kami
            </h2>
            <div className="text-body text-muted-foreground space-y-4">
              <p>
                Metode belajar dan mengajar Al-Qur’an yang berjalan di halaqah
                ini, mengutamakan kualitas bacaan, baik secara tathbiqi (praktek
                langsung baca yang dibimbing oleh guru) dan nazhari (teori).
              </p>
              <p>
                Para pengajar (Muqri’ Halaqah) adalah murid dari Maulana Syekh
                Abdul Qadir yang sudah diberikan ijazah untuk mengajar. Untuk
                Ilmu Tajwid -nazhari (teori)-, kitab rujukan dalam majelis ini
                adalah kitab “Tajwidul Huruf” yang merupakan hasil dari
                muhadarah Syekh Abdul Qadir, dan rujukan qiraat memakai kitab
                Syekh Taufiq Ibrahim Dhamra.
              </p>
              <p>
                Talaqqi qiraat pertama, yang akan dibacakan oleh murid ialah
                qiraat Imam ‘Ashim dengan dua riwayat Imam Hafs dan Imam Syu’bah
                melalui Tariqah Imam Syatibi. Setelah mengkhatamkan qiraat ini,
                thalib berhak melanjutkan Qiraat Imam Nafi’ dengan riwayat Imam
                Warsy.
              </p>
              <p>
                Adapun tahapan-tahapan yang ditempuh oleh murid di Halaqah
                Al-Qur’an Syekh Abdul Qadir adalah sebagai berikut:
              </p>
              <p>
                1. Memperdengarkan bacaan Al-Qur’an, baik bil hifdzi maupun bin
                nazhar kepada Muqri’ Halaqah.
              </p>
              <p>
                2. Mengkhatamkan bacaan di hadapan Muqri' Halaqah sesuai dengan
                kelasnya masing masing.
              </p>
              <p>
                3. Mengikuti ujian kitab Tajwidul Huruf yang diuji langsung oleh
                syekh Abdul Qadir (Sebelum ujian akan ada bimbingan dari Muqri'
                halaqah).
              </p>
              <p>
                4. Pemberian ijazah atau sanad langsung oleh maulana Syekh Abdul
                Qadir apabila telah lulus ujian.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="section-padding cream-section relative">
        <div className="absolute inset-0 pattern-islamic pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-4">
                Visi
              </p>
              <h2 className="heading-section text-foreground mb-6">
                Visi Kami
              </h2>
              <p className="font-serif text-xl text-foreground/90 italic leading-relaxed">
                "Menjadi majelis pembelajaran Al-Qur'an yang melahirkan generasi
                huffazh dan penuntut ilmu yang menjaga sanad Al-Qur'an."
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-4">
                Misi
              </p>
              <h2 className="heading-section text-foreground mb-6">
                Misi Kami
              </h2>
              <ul className="space-y-4 text-body text-muted-foreground">
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  Membina hafalan Al-Qur'an dengan metode yang mutqin
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  Mengajarkan qira'at dan tajwid sesuai kaidah yang benar
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  Menjaga sanad keilmuan Al-Qur'an
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  Membentuk akhlak Qurani pada setiap peserta
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nilai-nilai */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-primary mb-4">
              Prinsip
            </p>
            <h2 className="heading-section text-foreground">
              Nilai-Nilai Lembaga
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon
                    className="text-primary"
                    size={28}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
