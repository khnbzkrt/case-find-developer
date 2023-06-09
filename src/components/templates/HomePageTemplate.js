import {
  ServiceSection,
  PopularSearch,
  JobPost,
  CompanySection,
  Intro,
} from '@/components';
import SuggestionSection from '../organisms/suggestion-section/SuggestionSection';
import Footer from '../organisms/Footer/Footer';

export default function HomePageTemplate() {
  return (
    <main>
      <Intro />
      <PopularSearch />
      <JobPost />
      <ServiceSection />
      <CompanySection />
      <SuggestionSection />
      <Footer />
    </main>
  );
}
