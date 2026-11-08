import { MousePointerClick, Search, Sparkles, Share2, Globe, ShoppingCart, Code2, GraduationCap, Palette } from 'lucide-react';

export const iconos = { MousePointerClick, Search, Sparkles, Share2, Globe, ShoppingCart, Code2, GraduationCap, Palette } as const;
export type IconoKey = keyof typeof iconos;
