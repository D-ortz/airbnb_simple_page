import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AirbnbLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Mi Airbnb</h1>
        <a
          href="https://wa.me/521XXXXXXXXXX?text=Hola%20estoy%20interesado%20en%20tu%20Airbnb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-green-500 hover:bg-green-600">WhatsApp</Button>
        </a>
      </header>

      {/* Hero */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/featured/?beach,house")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Vive una experiencia única</h2>
          <p className="mb-6 text-lg">Relájate en nuestro Airbnb frente al mar</p>
          <a
            href="https://wa.me/521XXXXXXXXXX?text=Hola%20me%20interesa%20el%20alojamiento"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-lg">Contáctanos por WhatsApp</Button>
          </a>
        </div>
      </section>

      {/* Galería */}
      <section className="py-10 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((img) => (
          <motion.div whileHover={{ scale: 1.03 }} key={img}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={`https://source.unsplash.com/400x300/?airbnb,room,${img}`}
                  alt="Instalación"
                  className="w-full h-60 object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Servicios */}
      <section className="py-10 px-6">
        <h3 className="text-2xl font-semibold mb-6 text-center">Servicios</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {["WiFi", "Cocina equipada", "Estacionamiento", "TV", "Aire acondicionado", "Vista al mar"].map((service) => (
            <li
              key={service}
              className="bg-gray-100 p-4 rounded-xl shadow-sm font-medium"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Mapa */}
      <section className="px-6 pb-10">
        <h3 className="text-2xl font-semibold mb-4 text-center">Ubicación</h3>
        <div className="w-full h-72 rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación Airbnb"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 p-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Mi Airbnb. Todos los derechos reservados.
      </footer>
    </div>
  );
}
