import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      label: 'Email',
      value: 'maahin.ahmaad@gmail.com',
      href: 'mailto:maahin.ahmaad@gmail.com',
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      label: 'Phone',
      value: '+880 1828-034555',
      href: 'tel:+8801828034555',
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: 'https://maps.google.com/?q=Dhaka,Bangladesh',
    },
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const a = document.createElement('a');
    a.href = `mailto:maahin.ahmaad@gmail.com?subject=${subject}&body=${body}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="min-h-[70vh] py-24 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">03.</span> Get In Touch
          <div className="h-px bg-gray-800 flex-grow max-w-xs ml-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
              my inbox is always open. I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.label === 'Location' ? '_blank' : '_self'}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group p-4 rounded-xl border border-white/5 bg-surface/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono uppercase tracking-wider">{info.label}</p>
                    <p className="text-gray-200 font-medium group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="relative">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full liquid-glass border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted/60"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full liquid-glass border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted/60"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400 ml-1">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="w-full liquid-glass border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-muted/60"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary !text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group overflow-hidden relative"
                style={{ color: '#ffffff' }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} className="relative z-10" />
                    <span className="relative z-10">Opening your mail app…</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </>
                )}
              </button>
            </form>

            {/* Background decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
