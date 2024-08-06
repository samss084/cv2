import { ImageResponse } from 'next/og';
import './globals.css';
// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
export default function icon() {
  return new ImageResponse(<div className="icon">CV</div>);
}
