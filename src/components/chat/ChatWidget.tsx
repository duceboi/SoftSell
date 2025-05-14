"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { faqItems } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, SendIcon, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Auto greeting after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages.length === 0) {
        handleBotResponse(
          "👋 Hi there! How can I help you with your software licenses today?"
        );
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, isUser: true }]);
    setInput("");

    // Simulate AI thinking
    setIsTyping(true);

    // Find if the question matches any FAQ
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      const matchedFaq = faqItems.find((faq) =>
        lowerInput.includes(faq.question.toLowerCase().substring(0, 10))
      );

      if (matchedFaq) {
        handleBotResponse(matchedFaq.answer);
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        handleBotResponse(
          "Hello! How can I help you with your software licenses today?"
        );
      } else if (
        lowerInput.includes("thank") ||
        lowerInput.includes("thanks")
      ) {
        handleBotResponse(
          "You're welcome! Let me know if you have any other questions."
        );
      } else {
        handleBotResponse(
          "I'd be happy to help with that. For specific questions about selling licenses, please fill out our contact form and a specialist will get back to you within 24 hours."
        );
      }
    }, 1500);
  };

  const handleBotResponse = (text: string) => {
    setIsTyping(false);
    setMessages((prev) => [...prev, { text, isUser: false }]);
  };

  const suggestedQuestions = [
    "How do I sell my license?",
    "How quickly will I get paid?",
    "Is my license eligible for resale?",
  ];

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={24} />
          )}
        </Button>
      </div>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 z-50"
          >
            <Card className="shadow-xl border-primary/20 overflow-hidden">
              <div className="bg-primary p-4 text-black">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle size={16} />
                    </div>
                    <h3 className="font-semibold">SoftSell Assistant</h3>
                  </div>
                </div>
              </div>

              <CardContent className="p-0">
                <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isUser
                            ? "bg-primary text-black rounded-tr-none"
                            : "bg-muted rounded-tl-none"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] p-3 rounded-lg bg-muted rounded-tl-none">
                        <div className="flex gap-1">
                          <div className="h-2 w-2 bg-primary/60 rounded-full animate-bounce"></div>
                          <div className="h-2 w-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          <div className="h-2 w-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Suggested Questions (shown only at the start) */}
                  {messages.length <= 1 && (
                    <div className="mt-2">
                      <p className="text-sm text-muted-foreground mb-2">
                        You might want to ask:
                      </p>
                      <div className="flex flex-col gap-2">
                        {suggestedQuestions.map((question, index) => (
                          <button
                            key={index}
                            className="text-sm text-left px-3 py-2 rounded-md hover:bg-muted transition-colors border border-border"
                            onClick={() => {
                              setMessages((prev) => [
                                ...prev,
                                { text: question, isUser: true },
                              ]);

                              // Find the corresponding FAQ answer
                              const matchedFaq = faqItems.find(
                                (faq) => faq.question === question
                              );

                              if (matchedFaq) {
                                setIsTyping(true);
                                setTimeout(() => {
                                  handleBotResponse(matchedFaq.answer);
                                }, 1500);
                              }
                            }}
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-border p-4">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1"
                    />
                    <Button type="submit" size="icon" disabled={isTyping}>
                      <SendIcon size={18} />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
