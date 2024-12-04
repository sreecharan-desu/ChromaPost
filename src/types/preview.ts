export type PreviewLayout = {
  id: string;
  name: string;
  width: number;
  height: number;
  platform: 'Instagram' | 'Facebook';
  type: 'Story' | 'Post' | 'Reel';
}

export const PREVIEW_LAYOUTS: PreviewLayout[] = [
  {
    id: 'instagram-story',
    name: 'Instagram Story',
    width: 1080,
    height: 1920,
    platform: 'Instagram',
    type: 'Story'
  },
  {
    id: 'instagram-post',
    name: 'Instagram Post',
    width: 1080,
    height: 1080,
    platform: 'Instagram',
    type: 'Post'
  },
  {
    id: 'facebook-reel',
    name: 'Facebook Reel',
    width: 1080,
    height: 1920,
    platform: 'Facebook',
    type: 'Reel'
  },
  {
    id: 'facebook-post',
    name: 'Facebook Post',
    width: 1200,
    height: 630,
    platform: 'Facebook',
    type: 'Post'
  }
] 