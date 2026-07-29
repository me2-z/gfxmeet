export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'YouTube Thumbnails' | 'Gaming & Esports' | 'Brand Packaging' | 'Motion & Posters';
  image: string;
  rawImage: string;
  views: string;
  ctr: string;
  creationTime: string;
  softwareUsed: string[];
  description: string;
  challenge: string;
  strategy: string;
  result: string;
  tags: string[];
  objective?: string;
  platform?: string;
  industry?: string;
  role?: string;
  clientBrief?: {
    goal: string;
    audience: string;
    deadline: string;
    metrics: string;
  };
  audienceResearch?: {
    demographics: string;
    psychology: string;
    viewingDevice: string;
  };
  visualStrategy?: {
    focalPoint: string;
    colorBalance: string;
    typographyHierarchy: string;
  };
  processSteps?: { step: string; description: string }[];
  photoshopBreakdown?: { layer: string; type: string; detail: string }[];
  colorPalette?: string[];
  fontsUsed?: string[];
  lessonsLearned?: string;
  featured?: boolean;
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
    rawImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop&sat=-100&blur=2',
    views: '18.4M Views',
    ctr: '16.8% CTR',
    creationTime: '18 Hours',
    softwareUsed: ['Adobe Photoshop', 'Cinema 4D', 'DaVinci Resolve'],
    description: 'Complete visual overhaul and thumbnail strategy for a record-breaking 3-part survival documentary.',
    challenge: 'The channel was experiencing plateauing CTRs on long-form narrative gaming documentaries despite high production quality.',
    strategy: 'Implemented psychological focal anchoring, high-contrast silhouette separation, and curiosity-driven facial expressions with zero visual clutter.',
    result: 'Generated 18.4M views within 14 days, setting a channel record for 48-hour velocity and achieving a 16.8% click-through rate.',
    objective: 'Increase click-through rate by redesigning a cluttered gaming thumbnail into a high-contrast emotional composition.',
    platform: 'YouTube',
    industry: 'Gaming & Survival',
    role: 'Creative Direction & Thumbnail Architecture',
    clientBrief: {
      goal: 'Communicate extreme survival stakes instantly without relying on clickbait clutter.',
      audience: 'Hardcore survival gaming enthusiasts (Ages 16-34).',
      deadline: '72 Hours before scheduled premiere.',
      metrics: 'Target CTR > 14% (Previous average: 5.8%).'
    },
    audienceResearch: {
      demographics: 'Male 16-34, highly mobile-dominant viewing behavior.',
      psychology: 'Instantly attracted to high-contrast silhouettes and high-stakes peril.',
      viewingDevice: '78% Mobile (requires extreme legibility at small scale).'
    },
    visualStrategy: {
      focalPoint: 'Subject facial expression of intense adrenaline and raw danger.',
      colorBalance: 'Deep oceanic blues juxtaposed with warm fiery warning accents.',
      typographyHierarchy: 'Zero text clutter; single bold sans-serif anchor phrase.'
    },
    tags: ['YouTube Thumbnails', 'Visual Psychology', 'Color Theory', 'Typography', 'Gaming'],
    featured: true,
    colorPalette: ['#0A0A0A', '#1B2A4A', '#FF5A5F', '#28C76F'],
    fontsUsed: ['Montserrat Black', 'SF Pro Display'],
    processSteps: [
      { step: 'Reference & Moodboard', description: 'Analyzed top survival docuseries across Netflix and YouTube.' },
      { step: 'Sketch & Composition', description: 'Mapped out golden ratio framing and eyeline direction.' },
      { step: '3D Render & Lighting', description: 'Modeled high-contrast cinematic lighting in Cinema 4D.' },
      { step: 'Color & Typography', description: 'Applied selective color grading and bold sans typography.' }
    ],
    photoshopBreakdown: [
      { layer: 'Adjustment: Selective Curves', type: 'Adjustment Layer', detail: 'Boosted midtone contrast by 18%' },
      { layer: 'Subject Isolation (Smart Object)', type: 'Smart Object', detail: 'High-pass sharpening and edge separation' },
      { layer: 'Atmospheric Vignette', type: 'Gradient Mask', detail: 'Directed focal gaze toward subject eyes' }
    ],
    lessonsLearned: 'Removing 50% of the background elements directly doubled mobile CTR by eliminating cognitive overload.'
  },
  {
    id: 'velocity-esports-rebrand',
    title: 'Velocity Esports Championship Brand Identity & Kit',
    client: 'Velocity Global',
    category: 'Gaming & Esports',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    rawImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop&sat=-80',
    views: '45M+ Impressions',
    ctr: '24% Engagement',
    creationTime: '14 Days',
    softwareUsed: ['Blender', 'Adobe Illustrator', 'After Effects', 'Photoshop'],
    description: 'Full identity suite, broadcast packaging, and jersey design for a tier-1 international esports tournament.',
    challenge: 'Needed a menacing yet premium architectural aesthetic that resonated with both Gen-Z gamers and corporate sponsors like Intel and Monster.',
    strategy: 'Crafted custom geometric wordmarks, matte-metallic texture palettes, and modular HUD overlays for live broadcast integration.',
    result: 'Successfully deployed across 12 live global events with over 45M total stream impressions and a 300% surge in merch sales.',
    objective: 'Establish a tier-1 broadcast identity that balances competitive aggression with corporate sponsor appeal.',
    platform: 'Twitch / Global Broadcast',
    industry: 'Esports & Tournament',
    role: 'Brand Architect & Motion Director',
    clientBrief: {
      goal: 'Unify 12 global championship stages under a singular premium visual system.',
      audience: 'Competitive esports fans and corporate sponsors.',
      deadline: '2 Weeks prior to global broadcast launch.',
      metrics: '300% surge in tournament merchandise sales.'
    },
    audienceResearch: {
      demographics: 'Global Gen-Z & Millennial gaming community.',
      psychology: 'Attracted to razor-sharp geometries, matte-black finishes, and clean metal accents.',
      viewingDevice: 'Desktop & Living Room 4K displays.'
    },
    visualStrategy: {
      focalPoint: 'Geometric logotype and custom matte-metallic wordmark.',
      colorBalance: 'Obsidian black paired with electric Royal Blue (#4B6FFF).',
      typographyHierarchy: 'Custom architectural condensed typeface.'
    },
    tags: ['Esports Branding', 'Motion Graphics', 'Broadcast Packaging', '3D Visuals', 'Gaming'],
    colorPalette: ['#050505', '#4B6FFF', '#111111', '#F7F7F7'],
    fontsUsed: ['Teko Bold', 'Inter Display'],
    processSteps: [
      { step: 'Brand Positioning', description: 'Defined aggressive elite esports aesthetic.' },
      { step: 'Wordmark Architecture', description: 'Designed custom geometric logotype.' },
      { step: 'HUD & Overlays', description: 'Engineered modular stream broadcast templates.' }
    ],
    photoshopBreakdown: [
      { layer: 'Metallic Texture Overlay', type: 'Overlay Blend', detail: 'Brushed aluminum specular highlights' },
      { layer: 'Glow Suppression', type: 'Solid Color', detail: 'Eliminated amateur neon in favor of matte obsidian' }
    ],
    lessonsLearned: 'Matte metallic textures create an immediate sense of physical luxury in digital broadcast overlays.'
  },
  {
    id: 'cyberpunk-chronicles',
    title: 'Cyberpunk Chronicles: Cinematic Video Essay Packaging',
    client: 'Aethel Essays (1.8M Subs)',
    category: 'YouTube Thumbnails',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop',
    rawImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop&sat=-90',
    views: '9.2M Views',
    ctr: '14.5% CTR',
    creationTime: '12 Hours',
    softwareUsed: ['Adobe Photoshop', 'Lightroom', 'Blender'],
    description: 'Atmospheric, cinematic thumbnail art and title sequencing for deep-dive gaming retrospectives.',
    challenge: 'Balancing intellectual depth with immediate visual stopping power in a crowded essay niche.',
    strategy: 'Used dramatic chiaroscuro lighting, emotional character close-ups, and minimalist typography that hints at narrative intrigue.',
    result: 'Outperformed previous channel averages by 210% in initial 24-hour click velocity.',
    objective: 'Create intellectual narrative intrigue without sacrificing mobile homepage click velocity.',
    platform: 'YouTube',
    industry: 'Video Essay & Retrospective',
    role: 'Visual Director & Thumbnail Artist',
    clientBrief: {
      goal: 'Position deep-dive video essays with the cinematic prestige of Hollywood film posters.',
      audience: 'Thoughtful gaming enthusiasts and cyberpunk fiction fans.',
      deadline: '48 Hours.',
      metrics: 'Outperform channel benchmark by 150% in initial 24 hours.'
    },
    audienceResearch: {
      demographics: 'Ages 20-40, appreciative of high-art cinematic storytelling.',
      psychology: 'Drawn to moody chiaroscuro lighting and enigmatic character expressions.',
      viewingDevice: 'Desktop and high-res mobile.'
    },
    visualStrategy: {
      focalPoint: 'Enigmatic character gaze and atmospheric neon shadow falloff.',
      colorBalance: 'Dark obsidian shadows contrasted with cyan and magenta rim light.',
      typographyHierarchy: 'Minimalist editorial serif paired with mono metadata.'
    },
    tags: ['Cinematic Art', 'Photoshop Mastery', 'YouTube Packaging', 'Editorial', 'Technology'],
    colorPalette: ['#080808', '#222222', '#00E5FF', '#FF007F'],
    fontsUsed: ['Cinzel Decorative', 'Roboto Mono'],
    processSteps: [
      { step: 'Chiaroscuro Setup', description: 'Calculated dramatic shadow falloff.' },
      { step: 'Character Isolation', description: 'Polished hair edge matte and specular rim lighting.' }
    ],
    photoshopBreakdown: [
      { layer: 'Color Balance Split', type: 'Adjustment Layer', detail: 'Cyan highlights / Magenta shadows' },
      { layer: 'Film Grain Pass', type: 'Overlay', detail: 'Subtle 3.5% organic silver halide grain' }
    ],
    lessonsLearned: 'Cinematic mystery drives curiosity clicks far better than literal exposition.'
  },
  {
    id: 'apex-legends-global-series',
    title: 'ALGS Championship Broadcast & Social Kit',
    client: 'Respawn Entertainment Partner',
    category: 'Motion & Posters',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop',
    rawImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop&sat=-70',
    views: '12M+ Reach',
    ctr: '19.2% CTR',
    creationTime: '5 Days',
    softwareUsed: ['Cinema 4D', 'After Effects', 'Photoshop'],
    description: 'High-octane promotional posters and motion graphics for premier competitive gaming showdowns.',
    challenge: 'Capturing the raw adrenaline of competitive battle royale without sacrificing legibility across mobile screens.',
    strategy: 'Employed dynamic diagonal framing, laser-focused character contrast, and explosive particle choreography.',
    result: 'Became the most shared promotional asset pack in the publisher’s history.',
    objective: 'Design promotional keyart posters that ignite tournament hype across social feeds.',
    platform: 'X (Twitter) & Instagram',
    industry: 'Competitive Esports',
    role: 'Keyart & Motion Director',
    clientBrief: {
      goal: 'Generate maximum social retweets and anticipation for world championship finals.',
      audience: 'Global Apex Legends competitive player base.',
      deadline: '1 Week.',
      metrics: 'Most shared promotional asset in publisher history.'
    },
    audienceResearch: {
      demographics: 'Competitive FPS players aged 15-28.',
      psychology: 'Energized by explosive motion, diagonal tension lines, and iconic character silhouettes.',
      viewingDevice: 'Mobile social feeds (Twitter/Instagram).'
    },
    visualStrategy: {
      focalPoint: 'Explosive central character silhouette against diagonal motion vectors.',
      colorBalance: 'Fiery orange and battle-tested charcoal grays.',
      typographyHierarchy: 'Heavy condensed display typography with metallic bevels.'
    },
    tags: ['Motion Graphics', 'Posters', 'Social Media', 'Keyart', 'Gaming'],
    colorPalette: ['#0A0A0A', '#FF4500', '#1A1A1A'],
    fontsUsed: ['Apex Sans', 'Eurostile'],
    processSteps: [
      { step: 'Particle Simulation', description: 'Configured fluid sparks and smoke in C4D.' },
      { step: 'Poster Layout', description: 'Balanced typographical hierarchy for print and digital.' }
    ],
    photoshopBreakdown: [
      { layer: 'Dynamic Sparks Particle Pass', type: 'Screen Blend', detail: 'Volumetric ember distribution' },
      { layer: 'Action Blur Grade', type: 'Radial Blur', detail: 'Amplified velocity sensation' }
    ],
    lessonsLearned: 'Diagonal compositional framing naturally forces the human eye across the entire promotional canvas.'
  },
  {
    id: 'quantum-saas-rebrand',
    title: 'Quantum AI: Creator Monetization Platform Visual System',
    client: 'Quantum Inc.',
    category: 'Brand Packaging',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    rawImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop&sat=-90',
    views: 'B2B Flagship',
    ctr: '3.8x Demo Conversions',
    creationTime: '21 Days',
    softwareUsed: ['Figma', 'Adobe Illustrator', 'Blender', 'Principle'],
    description: 'Complete brand identity, design system, and marketing asset library for an AI creator tooling platform.',
    challenge: 'Standing out in a hyper-saturated AI software landscape with authentic creative authority.',
    strategy: 'Rejected generic AI blue gradients in favor of editorial monochrome obsidian architecture with razor-sharp typography.',
    result: 'Positioned the startup for a successful Series A and secured 45,000 active creators in month one.',
    objective: 'Architect a distinct brand system that rejects AI cliches in favor of Apple-grade minimalist luxury.',
    platform: 'Web & SaaS Dashboard',
    industry: 'Artificial Intelligence & SaaS',
    role: 'Lead Brand Architect & UI/UX Director',
    clientBrief: {
      goal: 'Differentiate from generic AI competitors with an authoritative editorial aesthetic.',
      audience: 'Top-tier digital creators, founders, and tech agencies.',
      deadline: '3 Weeks.',
      metrics: '3.8x increase in product demo conversions.'
    },
    audienceResearch: {
      demographics: 'Tech-forward professionals and creators aged 22-45.',
      psychology: 'Drawn to uncompromising minimalism, precision typography, and dark-mode elegance.',
      viewingDevice: 'Desktop Retina displays and tablets.'
    },
    visualStrategy: {
      focalPoint: 'Geometric monochrome logotype and pristine whitespace.',
      colorBalance: 'Obsidian black (#050505) with precise Royal Blue accents.',
      typographyHierarchy: 'Geist Sans variable typography with exact tracking.'
    },
    tags: ['Brand Identity', 'SaaS Design', 'Design Systems', 'Web Packaging', 'Technology'],
    colorPalette: ['#050505', '#111111', '#4B6FFF', '#FFFFFF'],
    fontsUsed: ['Geist Sans', 'Geist Mono'],
    processSteps: [
      { step: 'Design System Audit', description: 'Created modular token architecture.' },
      { step: 'Component Library', description: 'Built production-ready Figma UI kits.' }
    ],
    photoshopBreakdown: [
      { layer: 'Subtle Noise Texture', type: 'Overlay 4%', detail: 'Eliminated digital banding on dark gradients' }
    ],
    lessonsLearned: 'In B2B SaaS, restraint and editorial typography communicate higher enterprise value than loud neon gradients.'
  },
  {
    id: 'titan-craft-minecraft',
    title: 'The Hardcore 100-Days Survival Phenomenon',
    client: 'Zane Craft (8.5M Subs)',
    category: 'YouTube Thumbnails',
    image: 'https://images.unsplash.com/photo-1627856013091-fed6e4e3049e?q=80&w=1200&auto=format&fit=crop',
    rawImage: 'https://images.unsplash.com/photo-1627856013091-fed6e4e3049e?q=80&w=1200&auto=format&fit=crop&sat=-80',
    views: '24.1M Views',
    ctr: '18.9% CTR',
    creationTime: '16 Hours',
    softwareUsed: ['Adobe Photoshop', 'Blender'],
    description: 'Iconic thumbnail engineering for one of the most-watched Minecraft survival series of the decade.',
    challenge: 'Creating universal visual appeal across language barriers and age demographics.',
    strategy: 'Focused on high-stakes narrative tension, exaggerated yet clean character staging, and bold color isolation.',
    result: 'Hit #1 on YouTube Gaming trending for 7 consecutive days with 24.1M organic views.',
    objective: 'Design a legendary Minecraft thumbnail that secures top trending status within 24 hours.',
    platform: 'YouTube',
    industry: 'Gaming & Minecraft',
    role: 'Thumbnail Engineer & Character Artist',
    clientBrief: {
      goal: 'Surpass all previous channel viewership records for a 100-days hardcore series.',
      audience: 'Global gaming audience of all ages.',
      deadline: '24 Hours.',
      metrics: 'Hit #1 YouTube Gaming Trending.'
    },
    audienceResearch: {
      demographics: 'Global gamers aged 10-25.',
      psychology: 'Instantly reads narrative peril and extreme stakes through exaggerated character emotion.',
      viewingDevice: 'Mobile and TV YouTube apps.'
    },
    visualStrategy: {
      focalPoint: 'Exaggerated emotional character expression in extreme peril.',
      colorBalance: 'Contrasting emerald greens and fiery red danger tones.',
      typographyHierarchy: 'Bold 3D extruded title typography.'
    },
    tags: ['Gaming Graphics', 'YouTube Thumbnails', 'Visual Storytelling', 'Character Art', 'Minecraft'],
    colorPalette: ['#0A0A0A', '#2E8B57', '#FFD700', '#8B0000'],
    fontsUsed: ['Minecraft Heavy', 'Impact Bold'],
    processSteps: [
      { step: 'Character Pose', description: 'Rigged custom character model for maximum emotional expression.' },
      { step: 'Color Isolation', description: 'Enhanced gold and emerald contrast for mobile visibility.' }
    ],
    photoshopBreakdown: [
      { layer: 'High Pass Edge Sharpening', type: 'Overlay', detail: 'Crisp silhouette separation' },
      { layer: 'Saturation Boost', type: 'Vibrance Adjustment', detail: 'Maximized color pop on small mobile screens' }
    ],
    lessonsLearned: 'Universal emotional storytelling transcends language barriers in global gaming content.'
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
