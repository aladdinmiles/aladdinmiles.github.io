import Image from 'next/image';
import { Button } from '../buttons';
import { TopBarMobile } from './mobile';
import { LogoArea, NavBar, Wrapper } from './styles';

export const TopBar: React.FC = () => {
  return (
    <Wrapper>
      <NavBar id="large">
        <LogoArea href="/">
          <Image
            className="actualLogo"
            src="/images/Aladdin-Logo-Vertical-Color.svg"
            alt="AladdinMiles logo"
            width={177.8}
            height={40}
          />
        </LogoArea>
        <Button href="/#download">Download the app</Button>
      </NavBar>
      <TopBarMobile />
    </Wrapper>
  );
};
