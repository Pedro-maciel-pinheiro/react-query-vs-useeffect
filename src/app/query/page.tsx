'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getMakes } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';


export default function page() {
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  const { data: makes, isLoading, error } = useQuery({
    queryKey: ['makes'],
    queryFn: getMakes
  })

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 2010 }, (_, index) => ({
    value: (currentYear - index).toString(),
    id: `year-${currentYear - index}`,
  }))


  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="font-medium text-red-500">Failed to fetch vehicle makes</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              React.query Filter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" space-y-6 ">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Select Make
                </Label>
                <Select
                  disabled={isLoading}
                  value={selectedMake}
                  onValueChange={setSelectedMake}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a make" />
                  </SelectTrigger>
                  <SelectContent>
                    {makes?.map((make) => (
                      <SelectItem
                        key={`make-${make.MakeId}`}
                        value={make.MakeId.toString()}
                      >
                        {make.MakeName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-5 space-y-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Select Year
                </Label>
                <Select
                  disabled={isLoading} onValueChange={setSelectedYear} value={selectedYear}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years?.map((year) => (
                      <SelectItem key={year.id} value={year.value.toString()}>
                        {year.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Link
              href={
                selectedMake && selectedYear
                  ? `query-result/result/${selectedMake}/${selectedYear}`
                  : '#'
              }
            >
              <Button
                className="mt-5 w-full"
                disabled={!selectedMake || !selectedYear}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin transition-all duration-700" />
                ) : (
                  'Next'
                )}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
