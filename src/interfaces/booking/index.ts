import { UserInterface } from 'interfaces/user';
import { SpaceInterface } from 'interfaces/space';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  user_id?: string;
  space_id?: string;
  booking_time: any;
  booking_date: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  space?: SpaceInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  space_id?: string;
}
