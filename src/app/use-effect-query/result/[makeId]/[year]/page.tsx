import Loading from '@/components/loading'
import { Card, CardContent } from '@/components/ui/card'
import {  MakeAndYearProps, ParamsPromiseProps, VehicleProps } from '@/types'
import React, { Suspense, use } from 'react'



async function VehicleResults({ makeId, year }: MakeAndYearProps) {
  const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
  const data = await response.json()
  const vehicles = data.Results
  

  return (
    <section className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl font-bold text-center mb-8'>
          Available Models for {year}
        </h1>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {vehicles?.map((vehicle: VehicleProps) => (
            <li key={vehicle.Model_Name}>
              <Card >
                <CardContent className='p-6'>
                  <h2 className='text-xl font-medium'>{vehicle.Model_Name}</h2>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default  function Resultpage({ params }: ParamsPromiseProps) {
    const resolvedParams = use(params)
  return (
    <>
      <Suspense fallback={<Loading />}>
        <VehicleResults makeId={resolvedParams.makeId} year={resolvedParams.year} />
      </Suspense>
    </>
  )
}
