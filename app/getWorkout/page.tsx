"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { getWorkout } from "../_api/getWorkout";
import Spinner from "../_components/Spinner";

export type FormValues = {
  height: number;
  weight: number;
  goal: string;
  experience: string;
  freq: number | string;
  workoutType: string;
};

export default function Page() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [workout, setWorkout] = useState<string | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    getWorkout(data, setWorkout, setLoading);
  };

  return (
    <>
      {loading ? (
        <div className="gap-4 w-[100vw] h-[80vh] flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {!workout && (
            <div className="flex flex-col col-span-2 min-h-[80vh] justify-center items-center">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col p-8 gap-6 text-lg mx-2 max-w-[90%] "
              >
                <h1 className="text-2xl md:text-5xl font-bold text-center mb-2">
                  Get Your Personalized Workout Plan
                </h1>
                <label className="flex justify-between border-b-2 border-primary pb-2">
                  Height(cm):
                  <input
                    className="bg-zinc-700 rounded-lg w-20 sm:w-40 px-2"
                    type="number"
                    min="80"
                    max="230"
                    {...register("height")}
                    required
                  />
                </label>
                <label className="flex justify-between border-b-2 border-primary pb-2">
                  Weight(kg):
                  <input
                    className="bg-zinc-700 rounded-lg  w-20 sm:w-40 px-2"
                    type="number"
                    min="30"
                    max="350"
                    {...register("weight")}
                    required
                  />{" "}
                </label>
                <label className="flex justify-between border-b-2 border-primary pb-2">
                  Goal:
                  <select
                    {...register("goal")}
                    required
                    className="bg-zinc-700 rounded-lg w-20 sm:w-40 px-2"
                  >
                    <option value=""></option>
                    <option value="build muscle">Building Muscle</option>
                    <option value="lose weight">Losing Weight</option>
                  </select>
                </label>
                <label className="flex justify-between border-b-2 border-primary pb-2">
                  Experience Level:
                  <select
                    {...register("experience")}
                    required
                    className="bg-zinc-700 rounded-lg w-20 sm:w-40 px-2"
                  >
                    <option value=""></option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </label>
                <label className="flex justify-between border-b-2 border-primary pb-2">
                  Frequency:
                  <select
                    {...register("freq")}
                    required
                    className="bg-zinc-700 rounded-lg w-20 sm:w-40 px-2"
                  >
                    <option value=""></option>
                    <option value="3 times per week">3 times per week</option>
                    <option value="4 times per week">4 times per week</option>
                    <option value="5 times per week">5 times per week</option>
                    <option value="6 times per week">6 times per week</option>
                    <option value="7 times per week">7 times per week</option>
                  </select>
                </label>
                <label className="flex justify-between border-b-2 border-primary pb-2">
                  Preferred Workout Type:
                  <select
                    {...register("workoutType")}
                    required
                    className="bg-zinc-700 rounded-lg w-20 sm:w-40 px-2"
                  >
                    <option value=""></option>
                    <option value="calisthenics">calisthenics</option>
                    <option value="gym">gym</option>
                  </select>
                </label>

                <button
                  className="bg-accent hover:bg-secondary text-white font-bold py-1.5 px-3 w-[50%] rounded-lg transition duration-300 ease-in-out text-sm self-center mt-4"
                  type="submit"
                >
                  Get Workout
                </button>
              </form>
            </div>
          )}

          {workout && (
            <div className="col-span-2 p-8 min-h-[80vh] flex flex-col justify-center items-center">
              <h2 className="text-2xl md:text-5xl font-bold mb-4 ml-2">
                Your Workout Plan
              </h2>
              <div dangerouslySetInnerHTML={{ __html: workout }} />
              <button
                onClick={() => window.location.reload()}
                className="bg-accent hover:bg-secondary text-white font-bold py-1.5 px-3 w-[50%] rounded-lg transition duration-300 text-center ease-in-out text-sm mt-8"
              >
                I want to change something
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}
