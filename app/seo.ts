import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'YouTube Thumbnail Design & Creative Studio | GFXMEET V3',
  description: 'Elite creative studio led by Meet Patel specializing in YouTube thumbnail design, gaming graphics, visual storytelling, and brand packaging engineered for clicks.',
  keywords: [
    'YouTube Thumbnail Designer',
    'Gaming Thumbnail Designer',
    'Thumbnail Design Services',
    'YouTube Branding',
    'Photoshop Thumbnail Artist',
    'Gaming Graphic Designer',
    'YouTube Packaging',
    'Creative Studio',
    'Meet Patel'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gfxmeet.studio',
    title: 'YouTube Thumbnail Design & Creative Studio | GFXMEET V3',
    description: 'We don’t just make beautiful thumbnails. We engineer attention.',
    siteName: 'GFXMEET V3',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'GFXMEET V3 Studio Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Thumbnail Design & Creative Studio | GFXMEET V3',
    description: 'We don’t just make beautiful thumbnails. We engineer attention.',
    images: ['https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop']
  }
};
