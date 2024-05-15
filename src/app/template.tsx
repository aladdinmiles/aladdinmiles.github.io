import { Footer } from '@/components/footer';
import { TopBar } from '@/components/navigation';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MerchantForm } from './merchant/form';
import { Redirect } from './redirect';
import { ChildrenContainer, MainView } from './styles';

type IProp = {
  children: ReactNode;
};
const Template: React.FC<IProp> = ({ children }) => {
  return (
    <MainView>
      <TopBar />
      <ChildrenContainer>
        {children}
        <MerchantForm />
      </ChildrenContainer>
      <Footer />
      <ToastContainer position="top-center" />
      <Redirect />
    </MainView>
  );
};

export default Template;
