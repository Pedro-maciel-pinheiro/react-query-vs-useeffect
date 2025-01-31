// React.query.types




// React.useEffect.types

export interface MakeAndYear {
  makeId: string;
  year: string;
}

export interface Make {
  MakeId: number;
  MakeName: string;
}

export interface VehicleProps {
  Model_ID: number;
  Model_Name: string;
}

export interface ParamsProps {
  params: {
    makeId: string;
    year: string;
  };
}
