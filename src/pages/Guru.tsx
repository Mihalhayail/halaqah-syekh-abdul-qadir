import { motion } from "framer-motion";
const ease = [0.16, 1, 0.3, 1] as const;
import { useParams, Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";
import { ArrowLeft } from "lucide-react";

const teachersData = [
  {
    id: "syekh-abdul-qadir",
    name: "Syekh Abdul Qadir",
    specialty: "AHLI QIRA'AT AL-QUR'AN",
    image: teacher1,
    bio: "Syekh Abdul Qadir adalah seorang ulama ahli Qira'at Al-Qur'an yang telah mengabdikan hidupnya untuk mengajarkan ilmu Al-Qur'an selama lebih dari 30 tahun. Beliau memiliki sanad yang bersambung hingga Rasulullah ﷺ dalam berbagai riwayat qira'at.",
    education: [
      "Al-Azhar University, Kairo - Fakultas Ushuluddin",
      "Ijazah Qira'at Sab'ah dari Syekh Ahmad al-Zayyat",
      "Ijazah Qira'at 'Asyr dari Syekh Abdurrahman al-Sudais",
    ],
    expertise: ["Qira'at Sab'ah", "Qira'at 'Asyr", "Tajwid", "Tafsir Al-Qur'an"],
    sanad: "Sanad bersambung melalui jalur Imam Hafs 'an 'Ashim hingga Rasulullah ﷺ, melalui para imam qurra' yang masyhur di setiap generasi.",
  },
  {
    id: "ustadz-ahmad-fauzi",
    name: "Ustadz Ahmad Fauzi",
    specialty: "TAHFIZH AL-QUR'AN",
    image: teacher2,
    bio: "Ustadz Ahmad Fauzi adalah hafizh Al-Qur'an yang telah menghafal 30 juz sejak usia muda. Beliau telah membimbing ratusan santri dalam program tahfizh dengan metode yang efektif dan teruji.",
    education: [
      "Universitas Islam Madinah - Fakultas Al-Qur'an",
      "Ijazah Hafalan 30 Juz dari Syekh Muhammad al-Luhaidan",
    ],
    expertise: ["Tahfizh Al-Qur'an", "Tajwid", "Metode Menghafal"],
    sanad: "Sanad hafalan bersambung melalui jalur para huffazh Madinah hingga Rasulullah ﷺ.",
  },
  {
    id: "ustadz-ibrahim-hasan",
    name: "Ustadz Ibrahim Hasan",
    specialty: "TALAQQI & TAJWID",
    image: teacher3,
    bio: "Ustadz Ibrahim Hasan adalah pengajar tajwid dan talaqqi yang berpengalaman. Dengan pendekatan yang sabar dan metodis, beliau telah membantu banyak peserta memperbaiki bacaan Al-Qur'an mereka.",
    education: [
      "Universitas Al-Azhar, Kairo - Fakultas Bahasa Arab",
      "Ijazah Tajwid dari Syekh Ayman Suwaid",
    ],
    expertise: ["Tajwid", "Talaqqi", "Musyafahah", "Bahasa Arab"],
    sanad: "Sanad tajwid bersambung melalui jalur ulama Mesir hingga Rasulullah ﷺ.",
  },
];

const GuruList = () => {
  return (
    <div>
      <PageHeader title="Guru & Pengajar" subtitle="Para pengajar bersanad yang membimbing halaqah" />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {teachersData.map((teacher, i) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <Link to={`/guru/${teacher.id}`} className="group block">
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
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {teacher.bio}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const GuruDetail = () => {
  const { id } = useParams();
  const teacher = teachersData.find((t) => t.id === id);

  if (!teacher) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Guru tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={teacher.name} subtitle={teacher.specialty} />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <Link to="/guru" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Kembali ke Daftar Guru
          </Link>
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full rounded-2xl object-cover aspect-[3/4]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Biografi</h3>
                <p className="text-body text-muted-foreground">{teacher.bio}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Bidang Keilmuan</h3>
                <div className="flex flex-wrap gap-2">
                  {teacher.expertise.map((e) => (
                    <span key={e} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Riwayat Pendidikan</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {teacher.education.map((e) => (
                    <li key={e} className="flex gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Sanad</h3>
                <p className="text-body text-muted-foreground">{teacher.sanad}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { GuruList, GuruDetail };
