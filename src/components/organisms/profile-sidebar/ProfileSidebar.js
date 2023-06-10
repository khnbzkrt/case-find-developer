'use client';
import ProfileImage from '@/components/molecules/profile-image/ProfileImage';
import UserInformation from '../user-information/UserInformation';
import { useParams } from 'next/navigation';
import { selectUserById } from '@/redux/selectors/userSelect';

import styles from './styles.module.css';
import { useSelector } from 'react-redux';

export default function ProfileSidebar() {
  const params = useParams();

  const user = useSelector((state) =>
    selectUserById(state, { userId: params.id })
  );

  return (
    <div className={styles.profileSidebarContainer}>
      <ProfileImage />
      {user && (
        <UserInformation
          name={user.name}
          email={user.email}
          job={user.website}
          location={user.address.city}
          phone={user.phone}
        />
      )}
    </div>
  );
}
