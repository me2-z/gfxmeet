export interface StudioDepartment {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  categories?: string[];
  deliverables: string[];
  timeline: string;
  image: string;
}

export interface ToolItem {
  name: string;
  category: string;
  years: string;
  purpose: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const STUDIO_DEPARTMENTS: StudioDepartment[] = [
  {
    id: 'youtube-thumbnails',
    number: '01',
    title: 'YouTube Thumbnail Design & Packaging',
    subtitle: 'Engineered advertisements for long-form video velocity',
    description: 'Thumbnails are not decorations; they are the primary driver of click-through rate. We combine visual hierarchy, color psychology, facial expressions, and mobile legibility to dominate the YouTube homepage.',
    deliverables: ['Custom Psychological Thumbnail Design', 'A/B Testing Variant Assets', 'Title Hook Consultation', 'Source .PSD Files', 'Multi-Platform Export Suite'],
    timeline: '48-72 Hour Turnaround',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'channel-branding',
    number: '02',
    title: 'YouTube Channel Branding & Packaging',
    subtitle: 'Cohesive visual identity for top 1% creator channels',
    description: 'Build immediate viewer trust the moment they land on your channel page. We design custom channel banners, profile avatars, watermarks, playlist packaging, and video intro/outro assets.',
    deliverables: ['Channel Banner Suite', 'Avatar & Watermark Identity', 'Playlist Cover System', 'Video Packaging Templates', 'Brand Guidelines PDF'],
    timeline: '1-2 Weeks',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'gaming-graphics',
    number: '03',
    title: 'Gaming & Esports Visual Systems',
    subtitle: 'Command the arena with cinematic competitive branding',
    description: 'Specialized visual packages for Roblox, Minecraft, Valorant, Fortnite, CS2, League of Legends, and major esports tournaments. Premium lighting, stream overlays, and clan branding.',
    deliverables: ['Stream Overlays & Alerts', 'Tournament Promotional Posters', 'Esports Team Logos', 'Discord Asset Suite', 'Social Media Templates'],
    timeline: '1-3 Weeks',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'social-media',
    number: '04',
    title: 'Social Media Design & Campaigns',
    subtitle: 'Platform-optimized carousels, ads, and visual stories',
    description: 'Capture attention across Instagram, Threads, LinkedIn, TikTok, and X (Twitter). High-converting carousels, campaign ads, and high-impact graphic assets.',
    deliverables: ['Multi-Platform Carousels', 'Paid Ad Creative Suites', 'Story & Reel Templates', 'Post Visuals'],
    timeline: '1 Week',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'motion-graphics',
    number: '05',
    title: 'Motion Graphics & Kinetic Animation',
    subtitle: 'Brought to life with 4K 60FPS fluid motion',
    description: 'Animated logos, YouTube intros, lower thirds, stream alerts, transitions, and short motion ads that elevate production value instantly.',
    deliverables: ['Animated Logotypes', 'Stream Stingers & Alerts', 'Lower Thirds & Titles', 'Short Motion Reels', 'Lottie Animation Files'],
    timeline: '1-2 Weeks',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'brand-identity',
    number: '06',
    title: 'Creator & Brand Identity Architecture',
    subtitle: 'Timeless luxury aesthetics for modern icons and tech',
    description: 'Comprehensive brand identity systems including logo design, color theory, typography architecture, stationery, and digital guidelines for startups and creator businesses.',
    deliverables: ['Logo & Logomark Suite', 'Color System & Tokens', 'Typography Guidelines', 'Stationery & Mockups', 'Brand Book (PDF)'],
    timeline: '2-4 Weeks',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'poster-design',
    number: '07',
    title: 'Poster Design & Keyart Collectibles',
    subtitle: 'Large cinematic layouts and print-ready masterworks',
    description: 'High-end collectible posters for game launches, movie trailers, album releases, and major creator milestones. Printed-grade precision and cinematic drama.',
    deliverables: ['Print-Ready Master Files (300 DPI)', 'Digital Keyart Assets', 'Variant Colorway Passes', 'Mockup Presentation'],
    timeline: '3-7 Days',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'creative-consulting',
    number: '08',
    title: 'Creative Consulting & Thumbnail Audits',
    subtitle: 'Strategic advisory for scaling channel growth and CTR',
    description: 'Direct 1-on-1 strategic consulting with Meet Patel. Deep-dive channel audits, thumbnail critique, packaging strategy, and visual direction roadmaps.',
    deliverables: ['Comprehensive Channel Audit', 'CTR Drop-off Analysis', 'Packaging Strategy Roadmap', '1-on-1 Zoom Consultation', 'Actionable Design System'],
    timeline: '48-Hour Delivery',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
  }
];

export const STUDIO_PROCESS = [
  { step: '01', name: 'Discovery', desc: 'Understanding your channel goals, audience demographics, competitive landscape, and current CTR hurdles.' },
  { step: '02', name: 'Research', desc: 'Analyzing platform trends, moodboarding references, and formulating psychological hooks.' },
  { step: '03', name: 'Strategy', desc: 'Defining color temperature, focal contrast, typography hierarchy, and compositional framing.' },
  { step: '04', name: 'Design', desc: 'Executing sketches, 3D renders, smart object layer stacking, and high-precision production.' },
  { step: '05', name: 'Review', desc: 'Rigorous mobile legibility testing, peer critique, and refinement against target CTR benchmarks.' },
  { step: '06', name: 'Delivery', desc: 'Handover of organized source files (.PSD), variants, fonts, and comprehensive export assets.' }
];

export const STUDIO_TOOLS: ToolItem[] = [
  { name: 'Adobe Photoshop', category: 'Raster & Composite', years: '8+ Years', purpose: 'Thumbnail masterwork & image retouching', icon: 'Ps' },
  { name: 'Adobe Illustrator', category: 'Vector Architecture', years: '7+ Years', purpose: 'Logotypes, branding, and vector assets', icon: 'Ai' },
  { name: 'Cinema 4D / Blender', category: '3D Spatial Design', years: '5+ Years', purpose: 'Lighting, character rigging, and keyart scenes', icon: '3D' },
  { name: 'Adobe After Effects', category: 'Motion & Vfx', years: '6+ Years', purpose: 'Cinematic broadcast packaging & animations', icon: 'Ae' },
  { name: 'Figma', category: 'UI/UX & Systems', years: '5+ Years', purpose: 'Brand guidelines, UI design, and design tokens', icon: 'Fg' }
];

export const STUDIO_FAQS: FaqItem[] = [
  { question: 'What is the typical turnaround time for a YouTube thumbnail?', answer: 'Our standard studio turnaround is 48 to 72 hours per thumbnail. Priority 24-hour rush delivery is available upon request for active retainer partners.' },
  { question: 'Do you provide source files (.PSD)?', answer: 'Yes. Every project includes fully organized, layered source files (.PSD or vector formats) with labeled smart objects so your internal team has complete ownership.' },
  { question: 'How do your thumbnail retainers work?', answer: 'We partner with top creators on weekly or monthly retainers where we handle 100% of thumbnail ideation, A/B variant design, and packaging strategy.' },
  { question: 'What is required to get started?', answer: 'Simply fill out our consultation form or scope estimator with your channel URL, content goals, and timeline. Meet Patel will review your request within 24 hours.' }
];
