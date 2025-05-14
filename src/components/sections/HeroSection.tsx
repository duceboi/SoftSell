"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              <Zap className="h-4 w-4" />
              <span>Unlock Hidden Value</span>
            </motion.div>

            <h1 className="heading-1 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 leading-tight">
              Transform Unused Software Licenses <span className="whitespace-nowrap">Into Cash</span>
            </h1>

            <p className="subheading text-lg text-muted-foreground max-w-[90%]">
              SoftSell is the premier marketplace for businesses to buy and sell
              unused software licenses. Get instant valuations and quick
              payments for your idle software assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" asChild className="group">
                <Link href="#contact">
                  <span>Sell My Licenses</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#how-it-works" className="flex items-center gap-2">
                  <span>How It Works</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
              {[
                { value: "$50M+", label: "License Value", icon: <BadgeCheck className="h-5 w-5 text-primary" /> },
                { value: "1,000+", label: "Businesses Served", icon: <ShieldCheck className="h-5 w-5 text-primary" /> },
                { value: "48hrs", label: "Payment Time", icon: <Zap className="h-5 w-5 text-primary" /> },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-start p-4 bg-background/50 backdrop-blur-sm border rounded-xl"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {stat.icon}
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-blue-50/80 to-indigo-100/80 dark:from-blue-950/40 dark:to-indigo-900/40 rounded-3xl p-8 shadow-2xl border border-primary/20 backdrop-blur-sm">
              {/* Card header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="h-3 w-32 bg-primary/30 rounded-full mb-2"></div>
                  <div className="h-2 w-24 bg-muted/50 rounded-full"></div>
                </div>
                <div className="h-12 w-12 bg-green-100/80 dark:bg-green-900/50 rounded-full flex items-center justify-center border border-green-200/30 shadow-sm">
                  <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card form */}
              <div className="space-y-5">
                <div className="h-14 w-full bg-muted/50 rounded-lg animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="h-14 w-full bg-muted/50 rounded-lg animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-14 w-full bg-muted/50 rounded-lg animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="h-14 w-full bg-muted/50 rounded-lg animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>

              {/* Card footer */}
              <div className="mt-8">
                <div className="h-16 w-full bg-gradient-to-r from-primary to-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white font-medium text-lg">
                  Get Instant Quote
                </div>
                <div className="mt-4 h-3 w-48 mx-auto bg-muted/30 rounded-full"></div>
              </div>
            </div>

            {/* Floating elements with animation */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 h-24 w-24 bg-primary/10 rounded-full blur-xl"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-8 -left-8 h-32 w-32 bg-blue-500/10 rounded-full blur-xl"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 -right-6 h-5 w-5 bg-primary rounded-full shadow-md"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute top-1/4 -left-4 h-7 w-7 bg-blue-400 rounded-full shadow-md"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className="absolute bottom-1/4 right-1/4 h-6 w-6 bg-indigo-500 rounded-full shadow-md"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
