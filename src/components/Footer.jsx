import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          {/* Información */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <img
                src="/logo-dali-dent-icono.png"
                alt="Dali Dent"
                className="h-16 w-auto"
              />

              <img
                src="/logo-dali-dent-texto-v2.png"
                alt="Clínica Dali Dent Parla"
                className="h-12 w-auto"
              />
            </div>

            <p className="max-w-2xl text-lg leading-8 text-white/80">
              Clínica dental en Parla especializada en salud bucodental,
              estética dental, implantes y ortodoncia. Ofrecemos tratamientos
              personalizados con una atención cercana y profesional para cuidar
              de tu sonrisa.
            </p>

            <div className="mt-8">
              <a
                href="https://www.instagram.com/clinicadalidentparla/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:border-pink-500 hover:bg-pink-500/10"
              >
                <FaInstagram className="text-xl" />
                @clinicadalidentparla
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-left md:text-right">
            <h3 className="text-3xl font-bold text-blue-500">
              Contacto
            </h3>

            <div className="mt-6 space-y-4 text-lg leading-8">
              <p>
                C. Carlos V, 23
                <br />
                28982 Parla, Madrid
              </p>

              <p>
                <a
                  href="tel:675993093"
                  className="transition hover:text-blue-500"
                >
                  675 993 093
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@dalidentparla.com"
                  className="transition hover:text-blue-500"
                >
                  info@dalidentparla.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-center text-sm text-white/60 md:text-left">
              © 2026 Clínica Dali Dent Parla. Todos los derechos reservados.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/60">
              <a
                href="#"
                className="transition hover:text-white"
              >
                Política de cookies
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Política de privacidad
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Aviso legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer