# Weather Viewer  

## Description  
Weather Viewer is a simple React application that allows users to fetch and view the current weather of any city using the OpenWeatherMap API.  

---

## Features  
- Enter the name of a city to search for its weather.  
- Displays the following details:  
  - City name  
  - Current temperature  
  - Weather description (e.g., "Clear Sky")  
  - Weather icon representing the condition  
- Error handling for invalid city names or API issues.  
- Loading spinner while fetching data.  

---

## Prerequisites  
Before running the application, ensure you have the following installed:  
- Node.js (v14 or higher)  
- npm or yarn  

---

## Installation  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/uvaishnasir/weather-viewer.git  
   cd weather-viewer  
   ```  

2. **Install Dependencies**  
   ```bash  
   npm install  
   ```  

3. **Set Up the API Key**  
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) to get your API key.  
   - Create a `.env` file in the root directory of your project and add the following:  
     ```env  
     REACT_APP_API_KEY=your_api_key  
     ```  

4. **Run the Application**  
   ```bash  
   npm start  
   ```  

---

## Usage  

1. Open the app in your browser at `http://localhost:3000/`.  
2. Enter the name of a city in the input field and click "Search".  
3. View the weather details for the selected city.  

---

## Technologies Used  
- **React.js**: Frontend framework  
- **Axios**: For making API calls  
- **OpenWeatherMap API**: For fetching weather data  
- **CSS**: For styling  

---


