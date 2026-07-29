export interface PortalProject {
  id: string;
  title: string;
  category: string;
  status: 'Draft' | 'Research' | 'Design' | 'Review' | 'Revision' | 'Approved' | 'Delivered';
  progress: number;
  deadline: string;
  assignedDesigner: string;
  lastUpdated: string;
  coverImage: string;
  deliverablesCount: number;
}

export interface PortalInvoice {
  id: string;
  number: string;
  issueDate: string;
  dueDate: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  service: string;
}

export interface PortalMessage {
  id: string;
  sender: string;
  avatar: string;
  text: string;
  timestamp: string;
  isDesigner: boolean;
}

export interface PortalNotification {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  type: 'update' | 'invoice' | 'file' | 'approval';
}

export const PORTAL_PROJECTS: PortalProject[] = [
  {
    id: 'proj-1',
    title: 'Apex Predator: Survival Docuseries Packaging',
    category: 'YouTube Thumbnails',
    status: 'Review',
    progress: 85,
    deadline: 'Aug 4, 2026',
    assignedDesigner: 'Meet Patel',
    lastUpdated: '10 minutes ago',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    deliverablesCount: 6
  },
  {
    id: 'proj-2',
    title: 'Velocity Esports Championship Brand System',
    category: 'Gaming & Esports',
    status: 'Design',
    progress: 45,
    deadline: 'Aug 15, 2026',
    assignedDesigner: 'Meet Patel',
    lastUpdated: '2 hours ago',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    deliverablesCount: 12
  },
  {
    id: 'proj-3',
    title: 'Cyberpunk Chronicles Video Essay Art',
    category: 'YouTube Thumbnails',
    status: 'Approved',
    progress: 100,
    deadline: 'Jul 28, 2026',
    assignedDesigner: 'Meet Patel',
    lastUpdated: 'Yesterday',
    coverImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop',
    deliverablesCount: 4
  }
];

export const PORTAL_INVOICES: PortalInvoice[] = [
  {
    id: 'inv-1',
    number: 'GFX-2026-089',
    issueDate: 'Jul 20, 2026',
    dueDate: 'Aug 03, 2026',
    amount: '$1,200.00',
    status: 'Pending',
    service: 'YouTube Thumbnail Retainer (Phase 2)'
  },
  {
    id: 'inv-2',
    number: 'GFX-2026-074',
    issueDate: 'Jun 15, 2026',
    dueDate: 'Jun 29, 2026',
    amount: '$2,500.00',
    status: 'Paid',
    service: 'Esports Broadcast Package'
  }
];

export const PORTAL_MESSAGES: PortalMessage[] = [
  {
    id: 'msg-1',
    sender: 'Meet Patel',
    avatar: 'MP',
    text: "Hey! I've just uploaded the V2 thumbnail variant for Apex Predator with adjusted subject contrast for mobile feeds. Let me know what you think!",
    timestamp: '10:42 AM',
    isDesigner: true
  },
  {
    id: 'msg-2',
    sender: 'Krono Gaming',
    avatar: 'KG',
    text: "The new lighting looks incredible. Checking it on my phone now—the contrast pop is exactly what we needed.",
    timestamp: '10:45 AM',
    isDesigner: false
  }
];

export const PORTAL_NOTIFICATIONS: PortalNotification[] = [
  {
    id: 'notif-1',
    title: 'New Artwork Version Uploaded',
    description: 'Meet Patel uploaded V2 for Apex Predator thumbnail.',
    timestamp: '10 mins ago',
    read: false,
    type: 'file'
  },
  {
    id: 'notif-2',
    title: 'Invoice Due Soon',
    description: 'Invoice GFX-2026-089 is due in 5 days ($1,200.00).',
    timestamp: '2 hours ago',
    read: false,
    type: 'invoice'
  },
  {
    id: 'notif-3',
    title: 'Project Milestone Approved',
    description: 'Cyberpunk Chronicles successfully approved by client.',
    timestamp: 'Yesterday',
    read: true,
    type: 'approval'
  }
];
