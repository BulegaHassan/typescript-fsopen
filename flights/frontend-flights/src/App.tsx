import { useState, useEffect } from "react";
import { DiaryEntry, NewDiaryEntry, Visibility, Weather } from "./types";
import { getAlldiaries, createDiary } from "./diaryService";
const App = () => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState<Weather >(Weather.Sunny);
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Good);
  const [comment, setComment] = useState("");
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  useEffect(() => {
    getAlldiaries().then((data) => {
      setDiaries(data);
    });
  }, []);
  const diaryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();    
    createDiary({ date, weather, visibility, comment }).then((data) => {
      setDiaries(diaries.concat(data));
    });
    setDate("");
    setWeather(Weather.Sunny);
    setVisibility(Visibility.Good);
    setComment("");
  };
  
  const handleWeatherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedWeather = event.target.value as Weather;
    setWeather(selectedWeather);
  };
  const handleVisibilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedVisibility = event.target.value as Visibility;
    setVisibility(selectedVisibility);
  };

  return (
    <div>
      <h2>Add new entry</h2>
      <form onSubmit={diaryCreation}>
        <p>
          date:{" "}
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </p>
        <p>
          visibility:{" "}
          <input
            value={visibility}
            onChange={handleVisibilityChange}
          />
        </p>
        <p>
          weather:{" "}
          <input
            value={weather}
            onChange={handleWeatherChange}
          />
        </p>
        <p>
          comment:{" "}
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </p>
        <button type='submit'>add</button>
      </form>
      <h2>Diary Entries</h2>
      <ul>
        {diaries.map((diary) => {
          return (
            <>
              <h3>{diary.date}</h3>
              <p>Visibility: {diary.visibility}</p>
              <p>Weather: {diary.weather}</p>
              <p>Comment: {diary.comment}</p>
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default App;
