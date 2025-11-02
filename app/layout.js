
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LanguageProvider } from '../components/LanguageContext';

export const metadata = {
  title: "Blockchain Food Trust",
  description: "Filiera alimentare certificata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
