import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "./types";

const baseUrl = "http://localhost:3001/api/diaries";

export const getAlldiaries = async () => {
  const response = await axios.get<DiaryEntry[]>(baseUrl);
  return response.data;
};
export const createDiary = async (object: NewDiaryEntry) => {
  try {
    const response = await axios.post<DiaryEntry>(baseUrl, object);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data ;
      throw new Error(errorMessage); 
    } else {
      console.error(error);
    }
  }
};
