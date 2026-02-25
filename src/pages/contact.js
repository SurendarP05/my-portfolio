import Navbar from "@/components/Navbar";
import { Send,Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen px-6 md:px-16 py-16 bg-gradient-to-br from-green-100 via-blue-50 to-blue-200">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>

          <p className="text-black mb-8">
            Feel free to reach out if you&apos;d like to collaborate or have any
            questions.
          </p>

          <form
            action="https://formspree.io/f/xbloqjan"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-black">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Write your message..."
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>

          <div className="mt-10 text-sm text-black space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="text-blue-600" size={18} />
              <a href="mailto:psurendar10@gmail.com" className="text-blue-600">
                psurendar10@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="text-blue-600" size={18} />
              Tenkasi, India
            </p>
            <p className="flex items-center gap-2">
              <Phone className="text-blue-600" size={18} />
              +91-6383424735
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
