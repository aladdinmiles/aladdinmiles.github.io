import Image from 'next/image';
import { Button } from '../buttons';
import { LogoArea, NavBar } from './styles';

export const TopBar: React.FC = () => {
  return (
    <NavBar>
      <LogoArea>
        <Image className="actualLogo" src="/logo.png" alt="AladdinMiles logo" width={45} height={32} />
        <Image className="logo-text" src="/logoText.svg" alt="AladdinMiles logo" width={160} height={45} />
      </LogoArea>
      <Button href="/#">Download the app</Button>
    </NavBar>
  );
};
