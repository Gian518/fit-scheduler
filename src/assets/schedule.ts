// @ts-expect-error: TypeScript doesn't recognize the module
import { WorkoutPlan } from "@types/Workout"

const workoutPlan: WorkoutPlan = {
    days: [
        {
            day: "Giorno 1 - Full Body + Petto & Spalle + HIIT",
            warmup: {
                duration: "10 min",
                exercises: [
                    { name: "Tapis roulant", treadmill: { duration: "5 min", speed: { value: 6, unit: "km/h" }, incline: "8%" } },
                    { name: "Jumping Jacks", reps: { value: 60, unit: "reps" } },
                    { name: "Push-up sulle ginocchia o classici", sets: 2, reps: { value: 10, unit: "reps" } },
                    { name: "Plank to Shoulder Tap", sets: 2, reps: { value: 15, unit: "reps" } }
                ]
            },
            circuits: [
                {
                    name: "Circuito Forza & HIIT",
                    rounds: 3,
                    exercises: [
                        { name: "Push-up", sets: 3, reps: { value: 12, unit: "reps" } },
                        { name: "Arnold Press con manubri", sets: 3, reps: { value: 12, unit: "reps" }, weight: { min: 6, max: 8, unit: "kg" } },
                        { name: "Jump Squat con Booty Belt", sets: 3, reps: { value: 15, unit: "reps" } },
                        { name: "Plank con battito di mani", sets: 3, reps: { value: 12, unit: "reps" } },
                        { name: "Tapis roulant HIIT", treadmill: { duration: "30 seconds", speed: { value: 12, unit: "km/h" }, reps: { value: 8, unit: "reps" } } }
                    ]
                }
            ],
            cooldown: {
                duration: "10 min",
                exercises: [
                    { name: "Tapis roulant", treadmill: { duration: "3 min", speed: { value: 3, unit: "km/h" } } },
                    { name: "Stretching per spalle, petto e schiena", duration: "7 min" }
                ]
            }
        },
        {
            day: "Giorno 2 - Braccia + Core",
            warmup: {
                duration: "10 min",
                exercises: [
                    { name: "Tapis roulant", treadmill: { duration: "5 min", speed: { value: 6, unit: "km/h" } } },
                    { name: "Jump Rope", reps: { value: 60, unit: "seconds" } },
                    { name: "Plank", reps: { value: 30, unit: "seconds" } }
                ]
            },
            circuits: [
                {
                    name: "Circuito Forza Braccia & Core",
                    rounds: 3,
                    exercises: [
                        { name: "Curl con manubri", sets: 3, reps: { value: 12, unit: "reps" }, weight: { min: 6, unit: "kg" } },
                        { name: "Dips su sedia", sets: 3, reps: { value: 12, unit: "reps" } },
                        { name: "Russian Twist", sets: 3, reps: { value: 20, unit: "reps" } },
                        { name: "Sit-up", sets: 3, reps: { value: 15, unit: "reps" } }
                    ]
                }
            ],
            cooldown: {
                duration: "10 min",
                exercises: [
                    { name: "Stretching per braccia e core", duration: "10 min" }
                ]
            }
        },
        {
            day: "Giorno 3 - Cardio & Lower Body",
            warmup: {
                duration: "10 min",
                exercises: [
                    { name: "Tapis roulant", treadmill: { duration: "5 min", speed: { value: 6, unit: "km/h" } } },
                    { name: "Squat a corpo libero", reps: { value: 15, unit: "reps" } },
                    { name: "Affondi statici", reps: { value: 12, unit: "reps" } }
                ]
            },
            circuits: [
                {
                    name: "Circuito Lower Body & Cardio",
                    rounds: 3,
                    exercises: [
                        { name: "Squat con manubrio", sets: 3, reps: { value: 12, unit: "reps" }, weight: { min: 10, unit: "kg" } },
                        { name: "Affondi con manubri", sets: 3, reps: { value: 12, unit: "reps" }, weight: { min: 6, unit: "kg" } },
                        { name: "Salti sul posto", reps: { value: 30, unit: "seconds" } },
                        { name: "Mountain Climbers", reps: { value: 30, unit: "seconds" } }
                    ]
                }
            ],
            cooldown: {
                duration: "10 min",
                exercises: [
                    { name: "Stretching per gambe e schiena", duration: "10 min" }
                ]
            }
        }
    ]
}

export default workoutPlan