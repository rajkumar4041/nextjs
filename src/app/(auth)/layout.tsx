export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center">
          <div> authentication</div>
          {children}
          <div> footer</div>
        </div>
      </body>
    </html>
  );
}
