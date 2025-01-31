import { MakeProps,  VehicleProps } from "@/types";

export async function getMakes() {
  const response = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
  );
  const data = await response.json();
  return data.Results as MakeProps[];
}

export async function getVehicles(makeId:string , year:string) {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  );
  const data = await response.json();
  return data.Results as VehicleProps[];
}
