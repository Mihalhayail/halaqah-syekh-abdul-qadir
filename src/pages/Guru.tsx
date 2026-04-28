import { motion } from "framer-motion";
const ease = [0.16, 1, 0.3, 1] as const;
import { useParams, Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import teacher1 from "@/assets/syekh-abdul-qadir.webp";
import teacher2 from "@/assets/tgk-zaky.webp";
// import teacher3 from "@/assets/teacher-3.jpg";
import { ArrowLeft } from "lucide-react";

const teachersData = [
  {
    id: "syekh-abdul-qadir",
    name: "Syekh Abdul Qadir",
    specialty: "Pembina Halaqah",
    image: teacher1,
    bio: [
      "Fadhilatu Al-Syeikh Abdul Qadir Muhammad Tamam Ali Al-Ausiy Asy-Syafi’i Al-Azhary adalah sosok guru yang menjadi suri tauladan bagi para murid-muridnya. Beliau mendidik muridnya-muridnya dengan lisanulhal. Murid belajar menjadi seorang muslim yang bernafaskan AlQur’an dengan melihat langsung keseharian beliau.",
      "Suatu hari saya pernah bertanya kepada Beliau: “Maulana apakah Hadhratak (yang terhormat/yang mulia) tidak capek mengajar Al-Qur’an dari pagi sampai jam sebelas malam setiap hari?” Dengan ringan Beliau pun menjawab, “Zaky kamu tahu hubungan ikan dengan air? Nah begitulah saya dengan Al-Qur’an.",
      "Sebelum Syekh Abdul Qadir mengkhidmah Al-Qur’an di Halaqah Liihya At-Turas Mesir, beliau mengajarkan Fiqih Syafii di Madinatul Bu’ust dan masjid Al-Azhar. Walaupun kakek beliau bermazhab Hanafi bahkan sampai digelari Hanafi Shaghir di sana, namun beliau bermazhab Syafii. Beliau belajar Fiqih Syafi’i dari paman Beliau. Syekh Abdul Qadir juga merupakan murid langsung dari Syekh Ali Jum’ah Hafizhahullah dan belajar Ushul Fiqih langsung bersama Syeikh Thaha Rayyan Rahimahullah di kediaman Beliau. ",
      "Syekh pernah bercerita kepada kami, “Dulu ketika kami belajar satu kitab kepada guru,tidak boleh naik tangga ke jenjang selanjutnya sebelum kitab yang kami pelajari mampu kami ajarkan. Begitu seterusnya sehingga kita terlatih dalam belajar dan mengajar.”",
      "Di lain kesempatan beliau juga bercerita kepada kami, “Ketika saya menyetorkan Qiraat, bacaan yang pertama saya baca adalah Qiraat Imam Ibnu Katsir karena Imam Syafi’i membaca qiraat tersebut.” Ini salah satu bukti cinta beliau kepada Imam Syafii. Beliau terkadang melempar candaan ketika shalat maghrib berjamaah, “Mana yang bermazhab Imam Hanafi ayo jadi imam, kita menghargai guru kita” begitu kata beliau, karena Imam Hanafi sangat dihormati oleh Imam Syafi’i.",
      "Ketika Syekh mengkhidmah Al-Qur’an,murid-murid banyak yang datang belajar kepada beliau, sehingga waktu beliau enuh dengan Al-Qur’an saja. Baik siang dan malam hari. Dalam mengajarkan Al-Qur’an, Maulana Syekh sangat memperhatikan dua hal, yaitu: praktek langsung dan teori ilmu Tajwid.",
      "Ditambah lagi sebelum murid diizinkan membaca di hadapan beliau, sang murid harus memenuhi dua syarat utama, yaitu: iltizam dan adab. Untuk praktek langsung Maulana Syekh sangat detail memperhatikan pengucapan huruf yang keluar dari mulut muridnya. ",
      "Satu persatu huruf dirapikannya. Karena kalau makhraj dan sifat serta intiqal (perpindahan)dari huruf ke huruf sudah bagus, insya Allah yang lain akan lebih mudah.",
      "Untuk teorinya kami belajar pada hari sabtu setelah ashar. Dulunya kami belajar dari catatan beliau hasil talaqqi langsung dengan Syekh Aiman Suwaid hafizahullah dan guru lainnya. sekarang semuanya telah dicetak dalam sebuah buku yang berjudul, Tajwidul Huruf.",
    ],
    education: [
      "Al-Azhar University, Kairo - Fakultas .......",
      "Ijazah Qira'at Sab'ah sughro dari .......",
      "Ijazah Qira'at 'Asyr kubra dari ......",
    ],
    expertise: ["Qira'at Sab'ah", "Qira'at 'Asyr Kubro", "Tajwid"],
    sanad:
      "Sanad bersambung melalui jalur Imam .... 'an hingga Rasulullah ﷺ, melalui para imam qurra' yang masyhur di setiap generasi.",
  },
  {
    id: "tgk-zaky-mubarrak",
    name: "Tgk Zaky Mubarrak",
    specialty: "Pimpinan Halaqah",
    image: teacher2,
    bio: "Tgk Zaky Mubarrak adalah hafizh Al-Qur'an yang telah menghafal 30 juz sejak usia muda. Beliau telah membimbing ratusan santri dalam program tahfizh dengan metode yang efektif dan teruji.",
    education: [
      "Universitas Islam Madinah - Fakultas Al-Qur'an",
      "Ijazah Hafalan 30 Juz dari Syekh Muhammad al-Luhaidan",
    ],
    expertise: ["Tahfizh Al-Qur'an", "Tajwid", "Metode Menghafal"],
    sanad:
      "Sanad hafalan bersambung melalui jalur para huffazh Madinah hingga Rasulullah ﷺ.",
  },
  // {
  //   id: "ustadz-ibrahim-hasan",
  //   name: "Tgk Aditya Wiryawan",
  //   specialty: "Ketua Halaqah",
  //   image: teacher3,
  //   bio: "Ustadz Ibrahim Hasan adalah pengajar tajwid dan talaqqi yang berpengalaman. Dengan pendekatan yang sabar dan metodis, beliau telah membantu banyak peserta memperbaiki bacaan Al-Qur'an mereka.",
  //   education: [
  //     "Universitas Al-Azhar, Kairo - Fakultas Bahasa Arab",
  //     "Ijazah Tajwid dari Syekh Ayman Suwaid",
  //   ],
  //   expertise: ["Tajwid", "Talaqqi", "Musyafahah", "Bahasa Arab"],
  //   sanad:
  //     "Sanad tajwid bersambung melalui jalur ulama Mesir hingga Rasulullah ﷺ.",
  // },
];

const GuruList = () => {
  return (
    <div>
      <PageHeader
        title="Struktur Halaqah Syekh Abdul Qadir"
        subtitle="Para pembimbing dan pengajar bersanad yang membina halaqah"
      />
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
          <Link
            to="/guru"
            className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all"
          >
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
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Biografi
                </h3>
                <div className="space-y-4">
                  {Array.isArray(teacher.bio) ? (
                    teacher.bio.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-body text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-body text-muted-foreground">
                      {teacher.bio}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Bidang Keilmuan
                </h3>
                <div className="flex flex-wrap gap-2">
                  {teacher.expertise.map((e) => (
                    <span
                      key={e}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Riwayat Pendidikan
                </h3>
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
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Sanad
                </h3>
                <p className="text-body text-muted-foreground">
                  {teacher.sanad}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { GuruList, GuruDetail };
