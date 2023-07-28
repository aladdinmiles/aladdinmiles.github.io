import { ContentView, Page404 } from './styles';
import Template from './template';

const PageNotFound: React.FC = () => {
  return (
    <Template>
      <ContentView>
        <Page404>
          <p>We could not find what you are looking for</p>
        </Page404>
      </ContentView>
    </Template>
  );
};
export default PageNotFound;
