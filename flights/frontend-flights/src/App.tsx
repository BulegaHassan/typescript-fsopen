import { useState, useEffect } from "react";
import { DiaryEntry, Visibility, Weather } from "./types";
import { getAlldiaries, createDiary } from "./diaryService";
const App = () => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState<Weather>(Weather.Sunny);
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Good);
  const [comment, setComment] = useState("");
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getAlldiaries().then((data) => {
      setDiaries(data);
    });
  }, []);
  const diaryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!date || !weather || !visibility || !comment) {
      setError("Missing field");
      return;
    }
    createDiary({ date, weather, visibility, comment })
      .then((data) => {
        setDiaries(diaries.concat(data as DiaryEntry));
      })
      .catch((error) => {
        setError(error.message);
      });
    setDate("");
    setWeather(Weather.Sunny);
    setVisibility(Visibility.Good);
    setComment("");
    setError('')
  };

  // const handleWeatherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedWeather = event.target.value as Weather;
  //   setWeather(selectedWeather);
  // };
  // const handleVisibilityChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const selectedVisibility = event.target.value as Visibility;
  //   setVisibility(selectedVisibility);
  // };

  return (
    <div>
      <h2>Add new entry</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={diaryCreation}>
        <p>
          date:{" "}
          <input
            type='date'
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </p>
        <p>
          visibility:{" "}
          <label>
            <input
              type='radio'
              value={Visibility.Great}
              checked={visibility === Visibility.Great}
              onChange={(event) =>
                setVisibility(event.target.value as Visibility)
              }
            />
            Great
          </label>
          <label>
            <input
              type='radio'
              value={Visibility.Good}
              checked={visibility === Visibility.Good}
              onChange={(event) =>
                setVisibility(event.target.value as Visibility)
              }
            />
            Good
          </label>
          <label>
            <input
              type='radio'
              value={Visibility.Ok}
              checked={visibility === Visibility.Ok}
              onChange={(event) =>
                setVisibility(event.target.value as Visibility)
              }
            />
            Ok
          </label>
          <label>
            <input
              type='radio'
              value={Visibility.Poor}
              checked={visibility === Visibility.Poor}
              onChange={(event) =>
                setVisibility(event.target.value as Visibility)
              }
            />
            Poor
          </label>
        </p>
        <p>
          weather:{" "}
          <label>
            <input
              type='radio'
              value={Weather.Sunny}
              checked={weather === Weather.Sunny}
              onChange={(event) => setWeather(event.target.value as Weather)}
            />
            Sunny
          </label>
          <label>
            <input
              type='radio'
              value={Weather.Rainy}
              checked={weather === Weather.Rainy}
              onChange={(event) => setWeather(event.target.value as Weather)}
            />
            Rainy
          </label>
          <label>
            <input
              type='radio'
              value={Weather.Cloudy}
              checked={weather === Weather.Cloudy}
              onChange={(event) => setWeather(event.target.value as Weather)}
            />
            Cloudy
          </label>
          <label>
            <input
              type='radio'
              value={Weather.Stormy}
              checked={weather === Weather.Stormy}
              onChange={(event) => setWeather(event.target.value as Weather)}
            />
            Stormy
          </label>
          <label>
            <input
              type='radio'
              value={Weather.Windy}
              checked={weather === Weather.Windy}
              onChange={(event) => setWeather(event.target.value as Weather)}
            />
            Windy
          </label>
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
