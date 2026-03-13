import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="maroon-section py-16 md:py-20">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Halaqah Syekh Abdul Qadir
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Majelis Pembelajaran Al-Qur'an, Tahfizh, dan Qira'at untuk
              Penuntut Ilmu. Menjaga sanad keilmuan dan membina generasi
              huffazh yang berakhlak Qurani.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="mailto:info@halaqah.com" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Menu</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Program", path: "/program" },
                { label: "Guru", path: "/guru" },
                { label: "Galeri", path: "/galeri" },
                { label: "Kontak", path: "/kontak" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Kontak</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <p>Mesir</p>
              <p>info@halaqah-syekh-abdulqadir.com</p>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                WhatsApp: +62 812 3456 789
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Halaqah Syekh Abdul Qadir. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
