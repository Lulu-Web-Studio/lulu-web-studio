"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import HeaderText from "@/components/Text/HeaderText";
import SecondaryText from "@/components/Text/BodyText";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section className="bg-white rounded-t-[50px] relative z-10 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-28 py-20 md:py-32 pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-5 gap-12 lg:gap-16"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <HeaderText as="h2" className="font-bold text-neutral-900 mb-4">
                Contact Information
              </HeaderText>
              <SecondaryText className="text-neutral-600 leading-relaxed">
                Fill out the form and our team will get back to you within 24
                hours.
              </SecondaryText>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4 group"
              >
                <div className="p-3 bg-neutral-100 rounded-xl group-hover:bg-neutral-900 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@luluwebstudio.com"
                    className="text-neutral-900 text-lg hover:text-neutral-600 transition-colors"
                  >
                    hello@luluwebstudio.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4 group"
              >
                <div className="p-3 bg-neutral-100 rounded-xl group-hover:bg-neutral-900 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-neutral-900 text-lg hover:text-neutral-600 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4 group"
              >
                <div className="p-3 bg-neutral-100 rounded-xl group-hover:bg-neutral-900 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-neutral-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="text-neutral-900 text-lg">
                    San Francisco, CA
                    <br />
                    United States
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-sm text-neutral-500 uppercase tracking-wide mb-4">
                Follow Us
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "Instagram", "GitHub"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-neutral-600 hover:text-neutral-900 text-sm font-medium transition-colors"
                    >
                      {social}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 text-neutral-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 text-neutral-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 text-neutral-900"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 resize-none text-neutral-900"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white rounded-xl font-medium text-lg hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Send Message
                <Send className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
