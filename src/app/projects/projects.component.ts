import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
 
  projects = [
    {title: "CakeRecipe", subTitle: "How to bake a cake with a preparation time of 5 minutes", imageUrl: "images/cakeRecipe.jpeg", referenceUrl:""},
    {title: "Airline Reservation System", subTitle: "Database for Airline Reservation System", imageUrl: "images/AirlineReservationSystem.jpg", referenceUrl: "https://www.pexels.com/photo/white-and-blue-airplane-flying-3656072/"},
    {title: "Weather App", subTitle: "App to display the weather for a City in North America", imageUrl: "images/WeatherApp.jpg", referenceUrl: "https://www.pexels.com/photo/planet-earth-87651/"},
    {title: "Daily Calories Calculator", subTitle: "You can add person with their details and then enter the daily food intake and app will provide your the calories", imageUrl: "images/DietAnalysis.jpg", reference: "https://www.pexels.com/photo/fruit-salad-in-white-ceramic-bowl-1105166/"},
    {title: "Falling Shapes", subTitle: "This was a Game desgined in Javascript where you catch the falling shapes. Timer is running on the left side and for catching each shape you get a score which is displayed on the top right corner", imageUrl: "images/FallingObjects3.jpg"},

  ];


}
