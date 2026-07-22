"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Ambulance,
  Phone,
  ShieldCheck,
  Clock,
  Users,
  Building2,
  HeartPulse,
  CalendarCheck,
  Mail,
  MapPin,
  MessageCircle,
  Dumbbell,
  Hotel,
  Shield,
  GraduationCap,
  ShoppingCart,
  CalendarDays,
} from "lucide-react";

const phone = "02284-492935 / 492936";
const whatsappNumber = "542234388256";
const email = "plusemergencias@hotmail.com";

const whatsappText =
  "Hola Plus Emergencias, quisiera consultar por un servicio.";

export default function Home() {
  return (
    <main className="bg-[#07120d] text-white">
      <Header />
      <Hero />
      <Servicios />
      <Flota />
      <AreaProtegida />
      <Equipamiento />
      <PorQueElegirnos />
      <Contacto />
      <WhatsappFloat />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-plus.png"
            alt="Plus Emergencias"
            width={70}
            height={70}
            className="rounded-md"
          />
          <div className="leading-none">
            <p className="text-3xl font-black italic tracking-tight">PLUS</p>
            <p className="text-xs font-bold tracking-[0.25em] text-[#f2c300]">
              EMERGENCIAS
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide lg:flex">
          <a href="#servicios" className="hover:text-[#f2c300]">
            Servicios
          </a>
          <a href="#flota" className="hover:text-[#f2c300]">
            Flota
          </a>
          <a href="#area" className="hover:text-[#f2c300]">
            Área protegida
          </a>
          <a href="#contacto" className="hover:text-[#f2c300]">
            Contacto
          </a>
        </nav>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappText
          )}`}
          target="_blank"
          className="hidden rounded-full bg-[#0b7a3b] px-5 py-3 text-sm font-black shadow-lg shadow-green-950/40 transition hover:bg-[#0f9b4c] md:flex"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/ambulancias-principal.jpeg"
        alt="Flota Plus Emergencias"
        fill
        priority
        className="absolute inset-0 object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07120d] via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f2c300]/40 bg-black/35 px-5 py-2 text-sm font-black text-[#f2c300] backdrop-blur">
            <Clock size={18} />
            Atención las 24 horas
          </div>

          <h1 className="text-5xl font-black uppercase italic leading-none tracking-tight md:text-7xl">
            Plus Emergencias
            <span className="mt-3 block text-[#f2c300]">24 Horas</span>
          </h1>

          <p className="mt-6 text-lg font-black uppercase tracking-wide text-white md:text-xl">
            Emergencias • Traslados • Área Protegida
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0b7a3b] px-8 py-4 text-base font-black shadow-xl shadow-green-950/50 transition hover:bg-[#0f9b4c]"
            >
              <Phone size={20} />
              Llamar ahora
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-black backdrop-blur transition hover:bg-white hover:text-green-950"
            >
              Solicitar servicio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Servicios() {
  const servicios = [
    {
      icon: HeartPulse,
      title: "Emergencias médicas",
      text: "Respuesta ante situaciones de emergencia con unidades equipadas y personal capacitado.",
    },
    {
      icon: Ambulance,
      title: "Traslados programados",
      text: "Coordinación de traslados para pacientes, instituciones, clínicas y particulares.",
    },
    {
      icon: ShieldCheck,
      title: "Área protegida",
      text: "Cobertura médica para empresas, comercios, clubes, gimnasios, hoteles y eventos.",
    },
    {
      icon: CalendarCheck,
      title: "Cobertura de eventos",
      text: "Presencia sanitaria para eventos deportivos, sociales, empresariales e institucionales.",
    },
    {
      icon: Building2,
      title: "Convenios institucionales",
      text: "Servicios para geriátricos, clínicas, centros de rehabilitación, empresas y obras sociales.",
    },
    {
      icon: Users,
      title: "Atención personalizada",
      text: "Acompañamiento humano, profesional y responsable en cada servicio.",
    },
  ];

  return (
    <section id="servicios" className="bg-white py-24 text-zinc-950">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Nuestros servicios"
          title="Soluciones médicas para cada necesidad"
          dark
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-900 text-[#f2c300]">
                <item.icon size={30} />
              </div>
              <h3 className="text-xl font-black uppercase">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-zinc-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Flota() {
  return (
    <section id="flota" className="bg-[#07120d] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionTitle
              eyebrow="Nuestra flota"
              title="Unidades preparadas para responder"
            />
            <p className="mt-6 leading-relaxed text-zinc-300">
Flota compuesta por unidades de traslado y ambulancias equipadas para brindar cobertura médica, emergencias, atención prehospitalaria y traslados programados las 24 horas.
            </p>

            <a
              href="#contacto"
              className="mt-8 inline-flex rounded-full bg-[#f2c300] px-7 py-4 font-black text-green-950 transition hover:bg-yellow-300"
            >
              Solicitar información
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ImageCard
              src="/ambulancias-flota.jpeg"
              alt="Flota de ambulancias Plus Emergencias"
              className="col-span-2 h-72"
            />
            <ImageCard
              src="/ambulancia-lateral.jpeg"
              alt="Ambulancia Plus Emergencias"
              className="h-56"
            />
            <ImageCard
              src="/interior-utim.jpeg"
              alt="Interior de ambulancia UTIM"
              className="h-56"
            />
            <ImageCard
              src="/ambulancia-puerta.jpeg"
              alt="Ambulancia Plus Emergencias"
              className="h-56"
            />
            <ImageCard
              src="/unidad-traslado.jpeg"
              alt="Unidad de traslado"
              className="h-56"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AreaProtegida() {
  const rubros = [
    { icon: Dumbbell, text: "Gimnasios" },
    { icon: Hotel, text: "Hoteles" },
    { icon: Shield, text: "Clubes" },
    { icon: GraduationCap, text: "Escuelas" },
    { icon: Building2, text: "Empresas" },
    { icon: ShoppingCart, text: "Comercios" },
    { icon: Users, text: "Geriátricos" },
    { icon: CalendarDays, text: "Eventos" },
  ];

  return (
    <section
      id="area"
      className="bg-gradient-to-br from-[#063d22] to-[#0b7a3b] py-24"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-[#f2c300]">
              Área Protegida
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Protección médica para empresas e instituciones
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#f2c300]" />

            <p className="mt-6 leading-relaxed text-green-50">
              El servicio de Área Protegida permite contar con cobertura médica
              ante emergencias dentro de un establecimiento, brindando
              tranquilidad a empleados, clientes, visitantes y responsables
              del lugar.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              className="mt-8 inline-flex rounded-md bg-[#f2c300] px-8 py-4 font-black text-green-950 transition hover:bg-yellow-300"
            >
              Solicitar cotización
            </a>
          </div>

<div>
  <p className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-[#f2c300]">
    Ideal para
  </p>

  <div className="grid gap-4 md:grid-cols-2">
  {rubros.map((item) => (
    <div
      key={item.text}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 px-5 py-4"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f2c300]/15">
        <item.icon
          size={28}
          strokeWidth={2}
          className="text-[#f2c300]"
        />
      </div>

      <span className="text-lg font-black text-white">
        {item.text}
      </span>
    </div>
  ))}
</div>
</div>
        </div>
      </div>
    </section>
  );
}

function Equipamiento() {
  return (
    <section className="bg-white py-24 text-zinc-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <Image
          src="/interior-utim.jpeg"
          alt="Equipamiento interior de ambulancia Plus Emergencias"
          width={900}
          height={700}
          className="rounded-[2rem] object-cover shadow-2xl"
        />

        <div>
          <SectionTitle
            eyebrow="Equipamiento"
            title="Tecnología y seguridad en cada traslado"
            dark
          />

          <p className="mt-6 leading-relaxed text-zinc-600">
            Las unidades cuentan con equipamiento médico preparado para brindar
            atención segura y eficiente durante traslados, emergencias y
            servicios de cobertura.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              "Unidades equipadas",
              "Camilla profesional",
              "Oxígeno medicinal",
              "Espacio interior sanitario",
              "Personal capacitado",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200 p-4 font-bold"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PorQueElegirnos() {
  const items = [
    ["24h", "Atención 24 horas"],
    ["+", "Flota propia"],
    ["UTIM", "Unidades equipadas"],
    ["✓", "Personal capacitado"],
    ["⚡", "Respuesta rápida"],
    ["❤", "Trato humano"],
  ];

  return (
    <section className="bg-zinc-50 py-20 text-zinc-950">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <SectionTitle
          eyebrow="Por qué elegirnos"
          title="Compromiso, respuesta y cuidado"
          dark
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {items.map(([icon, text]) => (
            <div key={text} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-green-800 text-xl font-black text-green-800">
                {icon}
              </div>
              <p className="text-sm font-black uppercase">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [emailContacto, setEmailContacto] = useState("");
  const [consulta, setConsulta] = useState("");

  const mensajeWhatsApp = `
Hola Plus Emergencias.

Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${emailContacto}

Consulta:
${consulta}
`;

  return (
    <section id="contacto" className="bg-[#07120d] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Contacto"
            title="Estamos para ayudarte"
          />

          <div className="mt-8 space-y-5 text-zinc-200">
            <ContactLine icon={Phone} text={phone} />
            <ContactLine icon={Mail} text={email} />
            <ContactLine
              icon={MapPin}
              text="Roca 2073, Sierras Bayas, Argentina"
            />
            <ContactLine
              icon={MapPin}
              text="Garay 1455, Mar del Plata, Argentina"
            />
            <ContactLine
              icon={Clock}
              text="Atención las 24 horas"
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">

          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="input"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <input
              className="input"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <input
            className="input mt-4"
            placeholder="Email"
            value={emailContacto}
            onChange={(e) => setEmailContacto(e.target.value)}
          />

          <textarea
            className="input mt-4 h-36"
            placeholder="Consulta"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
          />

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              mensajeWhatsApp
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#0b7a3b] px-6 py-4 font-black transition hover:bg-[#0f9b4c]"
          >
            <MessageCircle size={20} />
            Enviar mensaje
          </a>

        </div>
      </div>

      <footer className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-5 pt-8 text-center text-sm text-zinc-500">
        © Plus Emergencias 24 Horas. Todos los derechos reservados.
      </footer>
    </section>
  );
}

function SectionTitle({ eyebrow, title, dark = false }) {
  return (
    <div>
      <p className="font-black uppercase tracking-[0.2em] text-[#0b7a3b]">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-4xl font-black leading-tight md:text-5xl ${
          dark ? "text-zinc-950" : "text-white"
        }`}
      >
        {title}
      </h2>
      <div className="mt-5 h-1 w-16 rounded-full bg-[#f2c300]" />
    </div>
  );
}

function ImageCard({ src, alt, className }) {
  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-3xl bg-white/5 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-700 hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 transition hover:bg-black/10" />
    </div>
  );
}

function ContactLine({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-4">
      <Icon className="text-[#f2c300]" size={22} />
      <span className="font-medium">{text}</span>
    </div>
  );
}

function WhatsappFloat() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappText
      )}`}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
    >
      <MessageCircle size={34} />
    </a>
  );
}