import { Section, Container, CountryInfo, Loader, Heading, GoBackBtn } from 'components';

import { useFetchCountry } from 'hooks/useFetchCountry';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';


export const Country = () => {
  const { country, error, isLoading } = useFetchCountry();
  const location = useLocation();
  const goBackLink = location?.state?.from ?? routes.HOME

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Back to countries</GoBackBtn>
        {error && <Heading textAlign="center">Something went wrong ...</Heading>}
        {isLoading && <Loader />}
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};
