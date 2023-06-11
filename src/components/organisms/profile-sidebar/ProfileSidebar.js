'use client';
import ProfileImage from '@/components/molecules/profile-image/ProfileImage';
import UserInformation from '../user-information/UserInformation';
import { useParams } from 'next/navigation';
import { selectUserById } from '@/redux/selectors/userSelect';

import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect, useState } from 'react';
import { getAllUsers } from '@/redux/actions/user-actions';
import WebSite from '../web-site/WebSite';
import { socialMediaLinks } from '../web-site/data';
import ObjectList from '../object-list/ObjectList';
import { applyItems, documentItems, savedCallItems } from './data';

export default function ProfileSidebar() {
  const dispatch = useDispatch();
  const params = useParams();
  const [user, setUser] = useState(null);

  const currentUser = useSelector((state) =>
    selectUserById(state, { userId: params.id })
  );

  useLayoutEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      dispatch(getAllUsers());
    }
  }, [currentUser]);

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
      <WebSite socialMediaLinks={socialMediaLinks} />
      <ObjectList
        objectItems={documentItems}
        title={'Dökümanlar'}
        linkTitle={'Başka bir döküman ekle'}
        href={'/'}
      />
      <ObjectList
        objectItems={savedCallItems}
        title={'Kaydedilen Aramalarım'}
      />
      <ObjectList
        objectItems={applyItems}
        title={'Başvurularım'}
        linkTitle={'Tümünü Gör'}
        href={'/'}
      />
    </div>
  );
}
