import Layout from '@/components/layout/dashboard';
import React from 'react';
import { useRouter } from 'next/router';
import SubsList from '../pages/dashboard/subsList';
import Bulletin from './dashboard/bulletin';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Index() {
  const router = useRouter();


  return (
    <>


    </>
  );
};

