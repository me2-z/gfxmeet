export interface AdminProject {
  id: string;
  title: string;
  client: string;
  status: 'Lead' | 'Discovery' | 'Research' | 'Design' | 'Review' | 'Revision' | 'Completed';
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  dueDate: string;
  budget: string;
}

export interface AdminMediaItem {
  id: string;
  name: string;
  type: 'image' | 'video' | 'psd' | 'vector';
  size: string;
  dimensions: string;
  uploadedAt: string;
  url: string;
}

export interface AdminAnalytics {
  visitors: string;
  portfolioViews: string;
  thumbnailClicks: string;
  conversions: string;
  bounceRate: string;
}

export const ADMIN_PROJECTS: AdminProject[] = [
  {
    id: 'adm-proj-1',
    title: 'Apex Predator: Survival Docuseries Packaging',
    client: 'Krono Gaming',
    status: 'Review',
    priority: 'Urgent',
    dueDate: 'Aug 4, 2026',
    budget: '$1,800'
  },
  {
    id: 'adm-proj-2',
    title: 'Velocity Esports Championship Brand System',
    client: 'Velocity Global',
    status: 'Design',
    priority: 'High',
    dueDate: 'Aug 15, 2026',
    budget: '$5,500'
  },
  {
    id: 'adm-proj-3',
    title: 'Cyberpunk Chronicles Video Essay Art',
    client: 'Aethel Essays',
    status: 'Completed',
    priority: 'Medium',
    dueDate: 'Jul 28, 2026',
    budget: '$1,200'
  },
  {
    id: 'adm-proj-4',
    title: 'Quantum AI Creator Platform Branding',
    client: 'Quantum Inc.',
    status: 'Research',
    priority: 'High',
    dueDate: 'Aug 30, 2026',
    budget: '$8,500'
  }
];

export const ADMIN_MEDIA: AdminMediaItem[] = [
  {
    id: 'med-1',
    name: 'Apex_Predator_V2_Master.psd',
    type: 'psd',
    size: '142 MB',
    dimensions: '3840 x 2160',
    uploadedAt: '10 mins ago',
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'med-2',
    name: 'Velocity_Esports_HUD_Kit.zip',
    type: 'vector',
    size: '88 MB',
    dimensions: 'Vector / 4K',
    uploadedAt: '2 hours ago',
    url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'med-3',
    name: 'Cyberpunk_Keyart_Render.png',
    type: 'image',
    size: '14.2 MB',
    dimensions: '3840 x 2160',
    uploadedAt: 'Yesterday',
    url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop'
  }
];

export const ADMIN_ANALYTICS: AdminAnalytics = {
  visitors: '248,590',
  portfolioViews: '812,400',
  thumbnailClicks: '142,100',
  conversions: '4.8%',
  bounceRate: '32.4%'
};
