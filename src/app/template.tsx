import { Footer } from '@/components/footer';
import { TopBar } from '@/components/navigation';
import { ReactNode } from 'react';
import { MainView } from './styles';

type IProp = {
  children: ReactNode;
};
const Template: React.FC<IProp> = ({ children }) => {
  return (
    <MainView>
      <TopBar />
      {children}
      <Footer />
    </MainView>
  );
};

export default Template;
