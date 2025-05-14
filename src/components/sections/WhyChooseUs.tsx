"use client";

import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/lib/data";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-2"
          >
            Why Choose SoftSell
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subheading mx-auto"
          >
            Our platform offers unmatched benefits for businesses looking to buy
            or sell software licenses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 bg-muted/50 rounded-xl border border-border text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to unlock the value of your unused software licenses?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied businesses that have successfully
              bought and sold licenses on our secure platform.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">
                  Satisfaction Rate
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10,000+</p>
                <p className="text-sm text-muted-foreground">
                  Licenses Processed
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">$5M+</p>
                <p className="text-sm text-muted-foreground">
                  Saved By Buyers
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">$25M+</p>
                <p className="text-sm text-muted-foreground">
                  Earned By Sellers
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
