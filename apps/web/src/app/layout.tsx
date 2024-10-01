import { ReactNode } from 'react';
import type { Metadata } from 'next';

import '@draftulse/ui/styles/tailwind';

export const metadata: Metadata = {
  title: 'Draftulse',
  description: 'A modern web-based student project management platform'
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
