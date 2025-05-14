import {
  Banknote,
  BarChart,
  DollarSign,
  Handshake,
  Lock,
  MonitorCheck,
  Upload
} from "lucide-react";

// How It Works steps
export const howItWorksSteps = [
  {
    id: 1,
    title: "Upload License",
    description: "Securely submit your software license details through our encrypted platform.",
    icon: Upload,
  },
  {
    id: 2,
    title: "Get Valuation",
    description: "Receive an instant market valuation based on our proprietary pricing algorithm.",
    icon: BarChart,
  },
  {
    id: 3,
    title: "Get Paid",
    description: "Accept the offer and receive payment through your preferred method within 48 hours.",
    icon: DollarSign,
  },
];

// Why Choose Us features
export const features = [
  {
    id: 1,
    title: "Transparent Pricing",
    description: "Our valuations are based on real-time market data with no hidden fees.",
    icon: Banknote,
  },
  {
    id: 2,
    title: "Secure Transactions",
    description: "Enterprise-grade encryption and secure transfer protocols protect your data.",
    icon: Lock,
  },
  {
    id: 3,
    title: "Verified Buyers",
    description: "All buyers on our platform are vetted and verified businesses.",
    icon: Handshake,
  },
  {
    id: 4,
    title: "Compliance Guaranteed",
    description: "We ensure all license transfers meet legal and vendor requirements.",
    icon: MonitorCheck,
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechFlow Solutions",
    avatar: "/images/avatar-1.jpg",
    content: "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was seamless and the valuation exceeded our expectations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CFO",
    company: "Nexus Innovations",
    avatar: "/images/avatar-2.jpg",
    content: "As we transitioned to cloud services, SoftSell provided an efficient way to offset costs by selling our perpetual licenses. Their customer service was exceptional throughout the process.",
  },
];

// License types for form dropdown
export const licenseTypes = [
  { value: "enterprise", label: "Enterprise Software" },
  { value: "creative", label: "Creative Suite" },
  { value: "developer", label: "Developer Tools" },
  { value: "productivity", label: "Productivity Suite" },
  { value: "security", label: "Security Software" },
  { value: "other", label: "Other" },
];

// FAQ items for chat widget
export const faqItems = [
  {
    question: "How do I sell my license?",
    answer: "To sell your license, simply click the 'Sell My License' button, fill in the license details, and our system will provide an instant valuation. If you accept the offer, we'll guide you through the secure transfer process and payment will be processed within 48 hours.",
  },
  {
    question: "Is my license eligible for resale?",
    answer: "Most perpetual software licenses can be resold, but it depends on the specific terms of your agreement. Enterprise licenses, creative suites, and development tools typically have good resale value. Upload your license details for a quick eligibility check.",
  },
  {
    question: "How is my license valued?",
    answer: "Our proprietary algorithm values licenses based on current market demand, remaining support period, version, and transfer conditions. We analyze thousands of similar transactions to provide the most competitive offer possible.",
  },
  {
    question: "How quickly will I get paid?",
    answer: "Once you accept our offer and complete the license transfer process, payment is typically processed within 48 hours. We offer multiple payment methods including direct deposit, PayPal, and wire transfer.",
  },
  {
    question: "Are there any fees for selling?",
    answer: "There are no upfront fees to sell your license on SoftSell. We operate on a simple model where our fee is already incorporated into the offer price you receive, ensuring complete transparency.",
  },
];
