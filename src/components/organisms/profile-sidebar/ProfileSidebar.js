'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProfileImage from '@/components/molecules/profile-image/ProfileImage';
import UserInformation from '../user-information/UserInformation';
import { getUserById } from '@/redux/actions/user-actions';
import { useParams } from 'next/navigation';
import { userSelect } from '@/redux/selectors/userSelect';

import styles from './styles.module.css';

export default function ProfileSidebar() {
  const params = useParams();
  const user = useSelector(userSelect);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(params.id));
  }, []);

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
