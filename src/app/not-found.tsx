import { Button } from '@/components/buttons';
import Image from 'next/image';
import {
  ContentView,
  MultiStyleText,
  Page404,
  RaleText,
  SideLeft404
} from './styles';

const PageNotFound: React.FC = () => {
  return (
    <ContentView>
      <Page404>
        <SideLeft404>
          <MultiStyleText>Oops! Page not found.</MultiStyleText>
          <RaleText>
            Seems like you’ve wandered to a page that doesn’t exist. Go home to
            get back on track and earn miles.
          </RaleText>
          <Button href="/">Back To Home</Button>
        </SideLeft404>
        <Image src="/images/404.svg" width={480} height={506} alt="404" />
      </Page404>
    </ContentView>
  );
};
export default PageNotFound;
