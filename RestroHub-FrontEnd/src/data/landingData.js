import { TrendingUp, Target, Clock, Users, Heart, MessageCircle } from 'lucide-react';

export const landingData = {
  navLinks: [
    { label: 'Features', href: '#features' },
    { label: 'Intelligence', href: '#ai-intelligence' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Pricing', href: '#pricing' },
  ],
  aiFeatures: [
    {
      icon: TrendingUp,
      title: "Sales Forecasting",
      desc: "Predict revenue 7 days out with 94% accuracy using local weather and event data."
    },
    {
      icon: Clock,
      title: "Peak-Hour Prediction",
      desc: "Staff intelligently by knowing exactly when the rush will hit, down to the 15-minute block."
    },
    {
      icon: Target,
      title: "Menu Demand Analytics",
      desc: "Identify underperforming items and auto-generate combo recommendations."
    }
  ],
  ecosystemFeatures: [
    {
      icon: Users,
      title: "Rich Customer Profiles",
      desc: "Know their favorite orders, allergies, and lifetime value."
    },
    {
      icon: Heart,
      title: "Automated Loyalty",
      desc: "Reward repeat customers without lifting a finger."
    },
    {
      icon: MessageCircle,
      title: "Sentiment Analysis",
      desc: "AI-driven parsing of feedback to identify exactly what to improve."
    }
  ],
  pricingPlans: [
    {
      name: 'Starter',
      price: 'Free',
      period: 'Forever',
      desc: 'Perfect for single small restaurants getting started.',
      features: ['1 Branch', '10 Tables', 'QR Menu', 'Basic Analytics'],
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹1,999',
      period: '/month',
      desc: 'The complete AI operating system for growing businesses.',
      features: [
        '5 Branches',
        'Unlimited Tables',
        'AI Sales Forecasting',
        'Advanced Analytics',
        'Priority Support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Billed Annually',
      desc: 'For multi-location restaurant chains.',
      features: [
        'Unlimited Branches',
        'Dedicated Manager',
        'Custom Integrations',
        'SLA Guarantee',
        'White-label options',
      ],
      popular: false,
    },
  ]
};
