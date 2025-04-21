// app/layout.tsx

export const metadata = {
  title: 'Ready4SchoolTT',
  description: 'School books & supplies delivered across Trinidad and Tobago',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
