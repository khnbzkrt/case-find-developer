'use client';
import {
  ServiceSection,
  PopularSearch,
  JobPost,
  CompanySection,
  Intro,
} from '@/components';
import SuggestionSection from '../organisms/suggestion-section/SuggestionSection';
import Footer from '../organisms/footer/Footer';
import { useSelector } from 'react-redux';

export default function HomePageTemplate() {
  const state = useSelector((state) => state);
  console.log(state);
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
