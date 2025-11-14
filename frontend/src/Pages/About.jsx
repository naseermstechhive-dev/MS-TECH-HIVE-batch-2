



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="px-6 md:px-20 py-20 text-center">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          About Us
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          We provide innovative digital solutions tailored to your business needs.
        </p>
      </section>

      {/* ---------------- STORY SECTION ---------------- */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We began our journey with one mission — delivering premium tech
              solutions that transform businesses and help them grow in the
              digital era.
            </p>
          </div>

          <div data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="story"
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="px-6 md:px-20 py-20 bg-gray-100 dark:bg-gray-800 transition duration-300">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-14"
        >
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div
            data-aos="fade-up"
            className="p-8 rounded-xl bg-white dark:bg-gray-700 shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">Expert Solutions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We bring expertise, creativity, and precision to every project.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-8 rounded-xl bg-white dark:bg-gray-700 shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">Trusted Team</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our professionals ensure your business receives the best support.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-8 rounded-xl bg-white dark:bg-gray-700 shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">Quality Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We deliver high-quality solutions on time, every time.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-20 px-6 md:px-20 text-center">
        <p
          data-aos="zoom-in"
          className="text-lg md:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300"
        >
          Want a customized solution for your business?
        </p>

        <div data-aos="fade-up" className="flex justify-center">
          <a href="/contact">
            <button className="px-8 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition flex items-center gap-2">
              Get Custom Solution
            </button>
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;