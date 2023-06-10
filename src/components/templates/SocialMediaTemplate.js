import SocialMediaHeader from '../organisms/header/SocialMediaHeader';
import ProfileInfoSection from '../organisms/profile-info-section/ProfileInfoSection';
import SearchBar from '../organisms/search-bar/SearchBar';

export default function SocialMediaTempalate() {
  return (
    <main>
      <SocialMediaHeader />
      <SearchBar />
      <ProfileInfoSection />
    </main>
  );
}
