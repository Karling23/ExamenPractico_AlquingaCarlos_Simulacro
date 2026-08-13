import { http } from "./http";
    
export type Paginated<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};
/*#id BIGSERIAL PRIMARY KEY
#plate VARCHAR(10) NOT NULL UNIQUE
#brand VARCHAR(40) NOT NULL
#daily_rate NUMERIC(10,2) NOT NULL
#is_available BOOLEAN NOT NULL DEFAULT TRUE*/
export type Vehicle = {
  id: number;
  plate: string;
  brand: string;
  daily_rate: number;
  is_available: boolean;
};

export async function listVehiclesApi() {
  const { data } = await http.get<Paginated<Vehicle>>("/api/vehicles/");
  return data; // { count, next, previous, results }
}

export async function createVehicleApi(plate: string) {
  const { data } = await http.post<Vehicle>("/api/vehicles/", { plate });
  return data;
}

export async function updateVehicleApi(id: number, plate: string) {
  const { data } = await http.put<Vehicle>(`/api/vehicles/${id}/`, { plate });
  return data;
}

export async function deleteVehicleApi(id: number) {
  await http.delete(`/api/vehicles/${id}/`);
}