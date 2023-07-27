import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  ContentArea,
  Header,
  HeaderSection,
  ItemRows,
  SmallerHeader,
  Text,
  Wrapper
} from './styled';

type Row = Array<{
  header: string;
  image: string;
  body: string;
}>;
export type FourCardProps = {
  smallHeader: string;
  header: string;
  rows: Array<Row>;
};

export const FourCardSection: React.FC<FourCardProps> = ({ smallHeader, header, rows }) => {
  return (
    <Wrapper>
      <HeaderSection>
        <SmallerHeader>{smallHeader}</SmallerHeader>
        <Header>{header}</Header>
      </HeaderSection>
      <ContentArea>
        {rows.map((row, ind) => (
          <ItemRows key={ind.toString()}>
            {row.map(({ header, image, body }, index) => (
              <Card key={index.toString()} index={ind == 0 ? index : index + 2}>
                <Image src={`/images/${image}`} width={120} height={120} alt="icon" />
                <CardContent>
                  <CardHeader>{header}</CardHeader>
                  <Text>{body}</Text>
                </CardContent>
              </Card>
            ))}
          </ItemRows>
        ))}
      </ContentArea>
    </Wrapper>
  );
};
