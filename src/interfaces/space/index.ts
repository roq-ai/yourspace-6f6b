import { BookingInterface } from 'interfaces/booking';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SpaceInterface {
  id?: string;
  location: string;
  availability_time: any;
  availability_date: any;
  status: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  organization?: OrganizationInterface;
  _count?: {
    booking?: number;
  };
}

export interface SpaceGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  status?: string;
  organization_id?: string;
}
