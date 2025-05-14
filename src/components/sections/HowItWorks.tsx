"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { howItWorksSteps } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
  };

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">


          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-2 mb-4"
          >
            Transform Your Unused Licenses in 3 Easy Steps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subheading text-lg text-muted-foreground"
          >
            SoftSell's streamlined process makes selling your unused software licenses
            quick, secure, and profitable. Get started today.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full bg-background/80 backdrop-blur-sm border-border/50 group hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-lg p-px bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-primary/10 group-hover:to-primary/30 -z-10 transition-all duration-300"></div>

                <CardHeader className="pb-3 relative">
                  <div className="absolute -top-5 left-6 h-10 w-10 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.id}
                  </div>
                  <div className="flex justify-between items-start mt-4">
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>

                  {/* Step connector for desktop */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                      <div className="h-8 w-8 bg-background rounded-full border border-border/50 flex items-center justify-center">
                        <ChevronRight className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Ready to get started?</p>
          <button className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-medium shadow-lg hover:shadow-primary/30 transition-all hover:scale-[1.02]">
            Sell My Licenses Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
