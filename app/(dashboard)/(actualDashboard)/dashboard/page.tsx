'use client';
import { Button } from '@/components/ui/button';
import { account } from '@/lib/appwrite';
import { AppwriteException } from 'appwrite';
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Page = () => {
  return (
    <div className='flex items-center justify-center p-3 md:p-4 '>
      <div className='flex  min-h-screen flex-col w-full max-w-6xl gap-5 md:gap-8 '>
        <header className='w-full flex justify-between items-center'>
          <span className='text-2xl font-bold'>Welcome, Jake</span>
          <Link href='/request-service'>
            <Button variant={'default'}>Request New Service</Button>
          </Link>
        </header>
        <div>
          <div>
            <div>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className='font-bold'>Service name</TableHead>
                    <TableHead className='font-bold'>Date</TableHead>
                    <TableHead className='font-bold'>Status</TableHead>
                    <TableHead className='font-bold'>
                      Assigned consultant
                    </TableHead>
                    <TableHead className='font-bold text-right'>
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-medium'>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className='text-right'>$250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const Titles = ['', 'Date', 'Status', 'Assigned consultant', 'Actions'];

const Items = [
  {
    name: 'Basic Education Package',
    date: 'February 5, 2024',
    status: 'Request Sent',
    consultant: 'John Doe',
  },
  {
    name: 'Basic Education Package',
    date: 'February 5, 2024',
    status: 'Request Sent',
    consultant: 'John Doe',
  },
  {
    name: 'Basic Education Package',
    date: 'February 5, 2024',
    status: 'Request Sent',
    consultant: 'John Doe',
  },
  {
    name: 'Basic Education Package',
    date: 'February 5, 2024',
    status: 'Request Sent',
    consultant: 'John Doe',
  },
  {
    name: 'Basic Education Package',
    date: 'February 5, 2024',
    status: 'Request Sent',
    consultant: 'John Doe',
  },
  {
    name: 'Basic Education Package',
    date: 'February 5, 2024',
    status: 'Request Sent',
    consultant: 'John Doe',
  },
  {
    name: 'Basic Education Package',
    date: 'February 5, 2024',
    status: 'Request Sent',
    consultant: 'John Doe',
  },
];
