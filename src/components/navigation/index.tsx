import Image from 'next/image';
import { Button } from '../buttons';
import { TopBarMobile } from './mobile';
import { LogoArea, NavBar, Wrapper } from './styles';

export const TopBar: React.FC = () => {
  return (
    <Wrapper>
      <NavBar id="large">
        <LogoArea href="/">
          <Image className="actualLogo" src="/logo.png" alt="AladdinMiles logo" width={45} height={32} />
          <Image className="logo-text" src="/logoText.svg" alt="AladdinMiles logo" width={160} height={45} />
        </LogoArea>
        <Button href="/#download">Download the app</Button>
      </NavBar>
      <TopBarMobile />
    </Wrapper>
  );
};
