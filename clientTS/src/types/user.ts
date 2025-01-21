import { Booking } from "./booking";
import { Pet } from "./pet";
import { Review } from "./review";
import { Service } from "./service";

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface PetOwner extends User {
  bookings: Booking[];
  pets: Pet[];
}

export interface ServiceProvider extends User {
  rating: number;
  reviews: Review[];
  services: Service[];
}
