import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          
          {/* Info */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-extrabold text-white">
                Clínica Dental
                <span className="block text-blue-600">
                  Dali Dent Parla
                </span>
              </span>
            </div>

            <p className="max-w-2xl text-xl leading-relaxed text-white/90">
              Clínica dental especializada en salud bucodental y estética, con tratamientos personalizados para cuidar tu sonrisa.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-2xl text-blue-600 transition hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/clinicadalidentparla/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl text-blue-600 transition hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-2xl text-blue-600 transition hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-left md:text-right">
            <h3 className="text-3xl font-bold text-blue-600">Contacto</h3>

            <div className="mt-6 space-y-4 text-xl leading-relaxed">
              <p>C. Carlos V, 23, 28982 Parla, Madrid</p>

              <p>
                <a
                  href="tel:675993093"
                  className="transition hover:text-blue-600"
                >
                  675 993 093
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@dalidentparla.com"
                  className="text-blue-600 transition hover:text-white"
                >
                  info@dalidentparla.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-white/15 pt-8 text-center">
          <p className="text-lg text-white/90">
            © 2026 Clínica Dali Dent Parla. Todos los derechos reservados.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base text-blue-600">
            <a href="#" className="transition hover:text-white">
              Política de cookies
            </a>
            <a href="#" className="transition hover:text-white">
              Política de privacidad
            </a>
            <a href="#" className="transition hover:text-white">
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer