import { Content, LegalContainerView, MainContent, SideLink, SideNav } from './styled';

export const LegalContainer: React.FC<{ children: TrustedHTML | string }> = ({ children }) => {
  return (
    <LegalContainerView>
      <Content>
        <SideNav>
          <SideLink href="/privacy-policy">Privacy Policy</SideLink>
          <SideLink href="/terms-conditions">Terms and Conditions</SideLink>
          <SideLink href="/merchant-tc">Merchant T&Cs</SideLink>
        </SideNav>
        <MainContent dangerouslySetInnerHTML={{ __html: children }} />
      </Content>
    </LegalContainerView>
  );
};
