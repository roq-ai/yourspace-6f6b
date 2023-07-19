import axios from 'axios';
import queryString from 'query-string';
import { SpaceInterface, SpaceGetQueryInterface } from 'interfaces/space';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSpaces = async (query?: SpaceGetQueryInterface): Promise<PaginatedInterface<SpaceInterface>> => {
  const response = await axios.get('/api/spaces', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSpace = async (space: SpaceInterface) => {
  const response = await axios.post('/api/spaces', space);
  return response.data;
};

export const updateSpaceById = async (id: string, space: SpaceInterface) => {
  const response = await axios.put(`/api/spaces/${id}`, space);
  return response.data;
};

export const getSpaceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/spaces/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSpaceById = async (id: string) => {
  const response = await axios.delete(`/api/spaces/${id}`);
  return response.data;
};
