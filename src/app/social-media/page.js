'use client';
import { getAllUsers } from '@/redux/actions/user-actions';
import { selectAllUsers } from '@/redux/selectors/userSelect';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function SocialMediaList() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      {users?.map((user) => (
        <ul key={user.id}>
          <li className={'userList'}>
            <Link href={`/social-media/${user.id}`}>{user.name}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
