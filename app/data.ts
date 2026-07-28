export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'YouTube Thumbnails' | 'Gaming & Esports' | 'Brand Packaging' | 'Motion & Posters';
  image: string;
  views: string;
  ctr: string;
  description: string;
  challenge: string;
  strategy: string;
  result: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  startingPrice: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  channel: string;
  subscribers?: string;
  avatar?: string;
}

export const STUDIO_STATS = [
  { label: 'Total Views Generated', value: '3.4B+' },
  { label: 'Average CTR Lift', value: '+142%' },
  { label: 'Client Retention Rate', value: '94%' },
  { label: 'Global Creator Partners', value: '180+' },
];

export const PROJECTS: Project[] = [
  {
    id: 'apex-predator-packaging',
    title: 'Apex Predator: The Ultimate Survival Docuseries Packaging',
    client: 'Krono Gaming (4.2M Subs)',
    category: 'YouTube Thumbnails',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    views: '18.4M Views',
    ctr: '16.8% CTR',
    description: 'Complete visual overhaul and thumbnail strategy for a record-breaking 3-part survival documentary.',
    challenge: 'The channel was experiencing plateauing CTRs on long-form narrative gaming documentaries despite high production quality.',
    strategy: 'Implemented psychological focal anchoring, high-contrast silhouette separation, and curiosity-driven facial expressions with zero visual clutter.',
    result: 'Generated 18.4M views within 14 days, setting a channel record for 48-hour velocity and achieving a 16.8% click-through rate.',
    tags: ['YouTube Thumbnails', 'Visual Psychology', 'Color Theory', 'Typography']
  },
  {
    id: 'velocity-esports-rebrand',
    title: 'Velocity Esports Championship Brand Identity & Kit',
    client: 'Velocity Global',
    category: 'Gaming & Esports',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    views: '45M+ Impressions',
    ctr: '24% Engagement',
    description: 'Full identity suite, broadcast packaging, and jersey design for a tier-1 international esports tournament.',
    challenge: 'Needed a menacing yet premium architectural aesthetic that resonated with both Gen-Z gamers and corporate sponsors like Intel and Monster.',
    strategy: 'Crafted custom geometric wordmarks, matte-metallic texture palettes, and modular HUD overlays for live broadcast integration.',
    result: 'Successfully deployed across 12 live global events with over 45M total stream impressions and a 300% surge in merch sales.',
    tags: ['Esports Branding', 'Motion Graphics', 'Broadcast Packaging', '3D Visuals']
  },
  {
    id: 'cyberpunk-chronicles',
    title: 'Cyberpunk Chronicles: Cinematic Video Essay Packaging',
    client: 'Aethel Essays (1.8M Subs)',
    category: 'YouTube Thumbnails',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop',
    views: '9.2M Views',
    ctr: '14.5% CTR',
    description: 'Atmospheric, cinematic thumbnail art and title sequencing for deep-dive gaming retrospectives.',
    challenge: 'Balancing intellectual depth with immediate visual stopping power in a crowded essay niche.',
    strategy: 'Used dramatic chiaroscuro lighting, emotional character close-ups, and minimalist typography that hints at narrative intrigue.',
    result: 'Outperformed previous channel averages by 210% in initial 24-hour click velocity.',
    tags: ['Cinematic Art', 'Photoshop Mastery', 'YouTube Packaging', 'Editorial']
  },
  {
    id: 'apex-legends-global-series',
    title: 'ALGS Championship Broadcast & Social Kit',
    client: 'Respawn Entertainment Partner',
    category: 'Motion & Posters',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop',
    views: '12M+ Reach',
    ctr: '19.2% CTR',
    description: 'High-octane promotional posters and motion graphics for premier competitive gaming showdowns.',
    challenge: 'Capturing the raw adrenaline of competitive battle royale without sacrificing legibility across mobile screens.',
    strategy: 'Employed dynamic diagonal framing, laser-focused character contrast, and explosive particle choreography.',
    result: 'Became the most shared promotional asset pack in the publisher’s history.',
    tags: ['Motion Graphics', 'Posters', 'Social Media', 'Keyart']
  },
  {
    id: 'quantum-saas-rebrand',
    title: 'Quantum AI: Creator Monetization Platform Visual System',
    client: 'Quantum Inc.',
    category: 'Brand Packaging',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    views: 'B2B Flagship',
    ctr: '3.8x Demo Conversions',
    description: 'Complete brand identity, design system, and marketing asset library for an AI creator tooling platform.',
    challenge: 'Standing out in a hyper-saturated AI software landscape with authentic creative authority.',
    strategy: 'Rejected generic AI blue gradients in favor of editorial monochrome obsidian architecture with razor-sharp typography.',
    result: 'Positioned the startup for a successful Series A and secured 45,000 active creators in month one.',
    tags: ['Brand Identity', 'SaaS Design', 'Design Systems', 'Web Packaging']
  },
  {
    id: 'titan-craft-minecraft',
    title: 'The Hardcore 100-Days Survival Phenomenon',
    client: 'Zane Craft (8.5M Subs)',
    category: 'YouTube Thumbnails',
    image: 'https://images.unsplash.com/photo-1627856013091-fed6e4e3049e?q=80&w=1200&auto=format&fit=crop',
    views: '24.1M Views',
    ctr: '18.9% CTR',
    description: 'Iconic thumbnail engineering for one of the most-watched Minecraft survival series of the decade.',
    challenge: 'Creating universal visual appeal across language barriers and age demographics.',
    strategy: 'Focused on high-stakes narrative tension, exaggerated yet clean character staging, and bold color isolation.',
    result: 'Hit #1 on YouTube Gaming trending for 7 consecutive days with 24.1M organic views.',
    tags: ['Gaming Graphics', 'YouTube Thumbnails', 'Visual Storytelling', 'Character Art']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'youtube-packaging',
    title: 'YouTube Thumbnail & Packaging Mastery',
    subtitle: 'Engineered for maximum click-through velocity',
    description: 'We analyze audience psychology, click-through drop-offs, and competitive positioning to craft thumbnails that dominate the YouTube homepage.',
    deliverables: [
      'Custom Psychological Thumbnail Design',
      'A/B Testing Variant Assets',
      'Title Hook & Angle Consultation',
      'Channel Branding & Banner Integration',
      'Source File (.PSD) Handover'
    ],
    timeline: '48-72 Hour Turnaround',
    startingPrice: '$450 / thumbnail or retainer'
  },
  {
    id: 'gaming-esports-graphics',
    title: 'Gaming & Esports Visual Systems',
    subtitle: 'Broadcast, streaming, and competitive identity',
    description: 'Command the arena with professional-grade overlay packages, tournament branding, promotional keyart, and hyper-polished channel identity.',
    deliverables: [
      'Full Twitch/YouTube Stream Packaging',
      'Tournament Keyart & Promotional Posters',
      'Esports Team Logo & Jersey Systems',
      'Custom Motion Alerts & Stingers',
      'Social Media Kit & Banner Suite'
    ],
    timeline: '1-3 Weeks',
    startingPrice: '$2,500'
  },
  {
    id: 'brand-identity-design',
    title: 'Creator & Brand Identity Architecture',
    subtitle: 'Timeless luxury aesthetics for modern icons',
    description: 'Build an unforgettable studio brand. We craft sophisticated identities that separate top 1% creators and tech companies from the noise.',
    deliverables: [
      'Strategic Brand Positioning',
      'Custom Typography & Wordmark Design',
      'Comprehensive Brand Guidelines (PDF)',
      'Digital Asset System & Templates',
      'Social & Merchandise Packaging'
    ],
    timeline: '2-4 Weeks',
    startingPrice: '$4,000'
  },
  {
    id: 'motion-graphics-posters',
    title: 'Motion Graphics & Keyart Posters',
    subtitle: 'Kinetic storytelling and physical-grade print design',
    description: 'High-end visual motion and collectible poster design for album releases, film trailers, product launches, and major creator events.',
    deliverables: [
      'Cinematic Motion Graphics (4K 60FPS)',
      'Print-Ready Collector Posters',
      'Social Teaser Loops',
      'Dynamic Typography Animation'
    ],
    timeline: '1-2 Weeks',
    startingPrice: '$1,800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Meet and the GFXMEET team completely transformed our channel's visual economy. Our average CTR jumped from 6% to nearly 16% on day one of the new packaging. They don't just design; they understand viewer psychology on a molecular level.",
    author: "Krono Gaming",
    role: "Founder & Lead Creator",
    channel: "4.2M Subscribers",
  },
  {
    id: '2',
    quote: "Working with GFXMEET felt like collaborating with an elite product design studio like Apple or Stripe. The attention to typography, contrast, and clean execution is unmatched in the creator space.",
    author: "Elena Rostova",
    role: "VP of Marketing",
    channel: "Quantum AI Tech",
  },
  {
    id: '3',
    quote: "If you are serious about scaling your creator business or esports brand, GFXMEET is the only studio you should call. Expensive? Yes. Worth every single penny? Absolutely 10x over.",
    author: "Zane Craft",
    role: "Top Gaming Creator",
    channel: "8.5M Subscribers",
  }
];
