export interface QueryProviderProps {
  children:React.ReactNode
}


// React.query.types // React.useEffect.types



export interface MakeAndYearProps {
  makeId: string;
  year: string;
}

export interface MakeProps {
  MakeId: number;
  MakeName: string;
}

export interface VehicleProps {
  Model_ID: number;
  Model_Name: string;
}

export interface ParamsPromiseProps {
  params: Promise<{
    makeId: string;
    year: string;
  }>;
}
