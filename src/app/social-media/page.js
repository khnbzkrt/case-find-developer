'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import { getAllUsers } from '@/redux/actions/user-actions';
import { selectAllUsers } from '@/redux/selectors/userSelect';

export default function SocialMediaList() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="socialMediaLayout">
      <ul>
        {users?.map((user) => (
          <li className={'userList'} key={user.id}>
            <Link href={`/social-media/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
