const Location = () => {
  const address = 'C. Carlos V, 23, 28982 Parla, Madrid'
  const phone = '675993093'

  const mapsUrl =
    'https://www.google.com/maps/place/Clinica+Dali+Dent+Parla/@40.2339601,-3.7691828,20.31z/data=!4m15!1m8!3m7!1s0xd41f53bd8de57b1:0x193558453eb6b2a2!2sC.+Carlos+V,+23,+28982+Parla,+Madrid!3b1!8m2!3d40.2340276!4d-3.7690529!16s%2Fg%2F11syd0924f!3m5!1s0xd41f5a01502a8af:0x6e95d7902add790f!8m2!3d40.2340033!4d-3.7691035!16s%2Fg%2F11ptwdm26c?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D'

  const whatsappUrl = `https://wa.me/34${phone}?text=${encodeURIComponent(
    'Hola, me gustaría pedir cita en Clínica Dali Dent Parla.'
  )}`

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        
        {/* Título */}
        <h2 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
          Ven a visitarnos
        </h2>

        {/* Dirección */}
        <p className="mt-6 text-lg font-medium text-neutral-700">
          {address}
        </p>

        {/* Botones */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
          >
            Cómo llegar
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="h-5 w-5" />
            Pedir cita
          </a>

        </div>

        {/* Mapa */}
        <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(37,99,235,0.1)]">
          <iframe
            src="https://www.google.com/maps?q=C.%20Carlos%20V%2C%2023%2C%2028982%20Parla%2C%20Madrid&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Clínica Dali Dent Parla"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Location