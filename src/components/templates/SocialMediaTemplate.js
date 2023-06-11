import {
  Footer,
  SocialMediaHeader,
  ProfileInfoSection,
  SearchBar,
} from '@/components';

export default function SocialMediaTempalate() {
  return (
    <main className="socialMediaLayout">
      <SocialMediaHeader />
      <SearchBar />
      <ProfileInfoSection />
      <Footer isDefault />
    </main>
  );
}
