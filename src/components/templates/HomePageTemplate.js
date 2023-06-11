import {
  ServiceSection,
  PopularSearch,
  JobPost,
  CompanySection,
  Intro,
  SuggestionSection,
  Footer,
} from '@/components';

export default function HomePageTemplate() {
  return (
    <main className="rootLayout">
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
