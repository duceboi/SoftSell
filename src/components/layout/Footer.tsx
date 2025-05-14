"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Social icon hover animation
  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.2 } },
  };

  // Handle newsletter submission
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      toast.error("Please enter a valid email address");
      emailRef.current?.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast.success("Successfully subscribed to our newsletter!");
    }, 1500);
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-muted/30 pt-24 pb-12  ml-11">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 "></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] "></div>

      <div className="container relative z-10 px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="flex items-center gap-3 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-12 w-12 bg-gradient-to-tr from-primary to-primary/80 rounded-xl flex items-center justify-center text-black font-bold text-2xl shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                S
              </div>
              <span className="font-poppins font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">SoftSell</span>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed"
              variants={itemVariants}
            >
              The trusted marketplace for buying and selling software licenses. Secure, transparent, and efficient.
            </motion.p>

            <motion.div className="flex gap-4 pt-2" variants={itemVariants}>
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" }
              ].map((social, index) => (
                <motion.div key={social.label} whileHover="hover" initial={{ opacity: 0.8 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <Link
                    href="#"
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-background text-primary shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all duration-300 border border-muted-foreground/10 hover:border-primary/30"
                    aria-label={social.label}
                  >
                    <motion.div variants={socialIconVariants}>
                      <social.icon size={18} />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              className="font-semibold text-lg relative inline-flex items-center pb-2"
              variants={itemVariants}
            >
              Quick Links
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              ></motion.span>
            </motion.h3>

            <motion.ul className="space-y-3">
              {[
                { href: "#how-it-works", label: "How It Works" },
                { href: "#why-choose-us", label: "Why Choose Us" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 text-base"
                  >
                    <motion.span
                      className="inline-block mr-2 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                    <span className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-primary before:transition-all before:duration-300 group-hover:before:w-full">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              className="font-semibold text-lg relative inline-flex items-center pb-2"
              variants={itemVariants}
            >
              Legal
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.8 }}
              ></motion.span>
            </motion.h3>

            <motion.ul className="space-y-3">
              {[
                { href: "#terms", label: "Terms of Service" },
                { href: "#privacy", label: "Privacy Policy" },
                { href: "#refund", label: "Refund Policy" },
                { href: "#license", label: "License Compliance" }
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300 text-base"
                  >
                    <motion.span
                      className="inline-block mr-2 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                    <span className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-primary before:transition-all before:duration-300 group-hover:before:w-full">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              className="font-semibold text-lg relative inline-flex items-center pb-2"
              variants={itemVariants}
            >
              Newsletter
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.7, duration: 0.8 }}
              ></motion.span>
            </motion.h3>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              Subscribe to our newsletter for the latest updates and exclusive offers on software licenses.
            </motion.p>

            {isSubscribed ? (
              <motion.div
                className="bg-primary/10 rounded-xl p-4 border border-primary/20 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle2 className="mx-auto mb-2 text-primary" size={28} />
                <p className="font-medium text-primary">Thanks for subscribing!</p>
                <p className="text-sm text-muted-foreground mt-1">We'll keep you updated.</p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubscribe}
                className="space-y-3"
                variants={itemVariants}
              >
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-background h-12 pl-4 pr-12 rounded-xl border border-muted-foreground/20 focus:border-primary/50 shadow-sm focus-visible:ring-primary/30"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={emailRef}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-primary hover:bg-primary/90 text-white shadow-sm transition-all"
                    disabled={isSubmitting}
                    aria-label="Subscribe"
                  >
                    {isSubmitting ? (
                      <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                    ) : (
                      <Send size={16} />
                    )}
                  </Button>
                </div>
                <motion.p
                  className="text-xs text-muted-foreground mt-1 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 0.6 }}
                >
                  We respect your privacy and will never share your details.
                </motion.p>
              </motion.form>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 pt-8 text-center text-muted-foreground relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1.2 }}
          ></motion.div>

          <p className="text-sm">
            &copy; {currentYear} SoftSell. All rights reserved. This is a fictional website created for a web development internship assignment.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
