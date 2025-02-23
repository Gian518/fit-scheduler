export interface Repetitions {
    value: number
    unit: "reps" | "seconds"
}

export interface Weight {
    min?: number
    max?: number
    unit: "kg"
}

export interface Speed {
    value: number
    unit: "km/h"
}

export interface Treadmill {
    duration: string
    speed: Speed
    incline?: string
    reps?: Repetitions
}

export interface Exercise {
    name: string
    sets?: number
    reps?: Repetitions
    weight?: Weight
    treadmill?: Treadmill
    duration?: string
}

export interface Circuit {
    name: string
    rounds: number
    exercises: Exercise[]
}

export interface WorkoutDay {
    day: string
    warmup: {
        duration: string
        exercises: Exercise[]
    }
    circuits: Circuit[]
    cooldown: {
        duration: string
        exercises: Exercise[]
    }
}

export interface WorkoutPlan {
    days: WorkoutDay[]
}