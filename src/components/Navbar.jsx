import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const phone = '675993093'
  const location = useLocation()

  const isHome = location.pathname === '/'

  const whatsappUrl = `https://wa.me/34${phone}?text=${encodeURIComponent(
    'Hola, me gustaría pedir cita en Clínica Dali Dent Parla.'
  )}`

  const getLink = (section) => {
    if (isHome) {
      return `#${section}`
    }

    return `/#${section}`
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="bg-slate-900 py-1 text-center text-xs text-white">
        📍 C. Carlos V, 23, 28982 Parla, Madrid
      </div>

      <div className="border-b border-black/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img
              src="/logo-dali-dent-icono.png"
              alt="Dali Dent"
              className="h-12 w-auto"
            />

            <img
              src="/logo-dali-dent-texto-v2.png"
              alt="Clínica Dali Dent Parla"
              className="h-6 w-auto md:h-8"
            />
          </Link>

          {/* Menú */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href={getLink('inicio')}
              className="font-semibold text-slate-800 transition hover:text-blue-600"
            >
              Inicio
            </a>

            <Link
              to="/tratamientos"
              className="font-semibold text-slate-800 transition hover:text-blue-600"
            >
              Tratamientos
            </Link>

            <a
              href={getLink('porque-dali-dent')}
              className="font-semibold text-slate-800 transition hover:text-blue-600"
            >
              Por qué Dali Dent
            </a>

            <a
              href={getLink('contacto')}
              className="font-semibold text-slate-800 transition hover:text-blue-600"
            >
              Contacto
            </a>
          </nav>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-green-600 md:inline-flex"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="h-5 w-5"
            />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar