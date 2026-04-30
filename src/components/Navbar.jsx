const Navbar = () => {
  const phone = '675993093'

  const whatsappUrl = `https://wa.me/34${phone}?text=${encodeURIComponent(
    'Hola, me gustaría pedir cita en Clínica Dali Dent Parla.'
  )}`

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <a href="#inicio" className="flex shrink-0 items-center">
          <span className="text-lg font-extrabold text-blue-700 md:text-xl">
            Clínica Dental
            <span className="block text-sm font-semibold text-blue-600">
              Dali Dent Parla
            </span>
          </span>
        </a>

        {/* Menú */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#inicio" className="text-base font-semibold text-black hover:text-blue-600">
            Inicio
          </a>
          <a href="#servicios" className="text-base font-semibold text-black hover:text-blue-600">
            Servicios
          </a>
          <a href="#tarifas" className="text-base font-semibold text-black hover:text-blue-600">
            Tarifas
          </a>
          <a href="#contacto" className="text-base font-semibold text-black hover:text-blue-600">
            Contacto
          </a>
        </nav>

        {/* Botón WhatsApp (solo desktop) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          <img src="/whatsapp.png" alt="WhatsApp" className="h-5 w-5" />
          WhatsApp
        </a>

      </div>
    </header>
  )
}

export default Navbar