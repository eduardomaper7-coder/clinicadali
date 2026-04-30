import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactSection = () => {
  const phone = '675993093'

  return (
    <section id="contacto" className="scroll-mt-28 bg-[#f4f8ff] py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
            Contacto
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Estamos aquí para ayudarte. Contacta con Clínica Dali Dent Parla para reservar tu cita.
          </p>
        </div>

        <div className="space-y-5">
          
          {/* Dirección */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <div className="pt-1 text-xl text-blue-700">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700">Dirección</h3>
              <p className="mt-2 text-lg text-neutral-600">
                C. Carlos V, 23, 28982 Parla, Madrid
              </p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <div className="pt-1 text-xl text-blue-700">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700">Teléfono</h3>
              <a
                href={`tel:${phone}`}
                className="mt-2 block text-lg text-neutral-600 transition hover:text-blue-700"
              >
                675 993 093
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <div className="pt-1 text-xl text-blue-700">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700">Email</h3>
              <a
                href="mailto:info@dalidentparla.com"
                className="mt-2 block text-lg text-neutral-600 transition hover:text-blue-700"
              >
                info@dalidentparla.com
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]">
            <div className="pt-1 text-xl text-blue-700">
              <FaClock />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-bold text-blue-700">Horario</h3>

              <div className="mt-4 space-y-3 text-lg text-neutral-700">

                <div className="flex justify-between">
                  <span className="font-semibold text-blue-700">Lunes</span>
                  <span>10:30–14:00 · 16:00–21:00</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-blue-700">Martes</span>
                  <span>10:30–14:00 · 16:00–21:00</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-blue-700">Miércoles</span>
                  <span>10:30–14:00 · 16:00–21:00</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-blue-700">Jueves</span>
                  <span>10:30–14:00 · 16:00–21:00</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-blue-700">Viernes</span>
                  <span>Cerrado</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-blue-700">Sábado</span>
                  <span>10:30–14:00</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-blue-700">Domingo</span>
                  <span>Cerrado</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection