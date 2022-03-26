class Workout {

    constructor({name, date, exercises, id}) {
        this.name = name;
        this.date = date;
        this.exercises = exercises;
        this.id = id;
    };

    renderWorkout() {
        const workoutAll = document.getElementById("workouts-container");
        workoutAll.classList.add("workout");

        const workoutName = document.createElement("h1");
        workoutName.innerHTML - this.name;

        workoutName.id = `workout-${this.id}`;

        workoutAll.appendChild(workoutName);

        const exerciseList = this.renderExercises();
        workoutName.appendChild(exerciseList);
    };

    createOption() {
        const workoutSelect = document.getElementById("workout-list");
        const opt = document.createElement("option");
        opt.value = this.id;
        opt.innerHTML = this.name;
        workoutSelect.appendChild(opt);
    };


    renderExercises() {
        const exercises = this.exercises;
        const list = document.createElement("ul");

        exercises.forEach(exercise => {
            const newExercise = new Exercise(exercise);

            console.log(exercise, "exercise");

            const nameList = newExercise.renderExercise();

            list.appendChild(nameList);
        });
        return list;
    };


}