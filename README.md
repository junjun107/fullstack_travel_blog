## Full Stack Travel Journal

A full stack web application to show a list of places you have traveled.

## How to setup the app

### Backend

#### Setup Server

- Install dependencies
- Setup Express App
- Setup Express error handler

#### Connect to MongoDB

- Use connection string

#### Define Travel Log Schema

- Title
- Rating
- Description
- Latitude
- Longitude
- CreatedAt

#### Setup Routes

- GET
- POST
- PUT
- DELETE

## Frontend

#### Setup development environment use Create React App

```
npx create-react-app my-app
cd my-app
npm start
```

#### Use React Map GL

React Map GLis a React package that is build on top of Mapbox GL JS that makes adding map interface much easier. This package provides an integration for Mapbox GL JS and an easy to use component library to build on.

```
npm install react-map-gl mapbox-gl
```

#### React fetching data from Node.js with useEffect

```
const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLongEntries(logEntries);
  };

  useEffect(() => {
    getEntries();
  }, []);
```

### Display logs with React Map GL Maker and Popup on map dynamically

```
 {logEntries.map((entry) => (
        <React.Fragment>
          <Marker> {/* ... /} </Marker>
            <Popup>{/* ... /}</Popup>
        </React.Fragment>
      ))}
```

### Implement a forum when double click on map

### Issues:

Cors Origin Error
Cores Origin url in the backend doesn't match the frontend url localhost:3000

production build error "x is not defined" 
Map from mapbox api didn't show up during production. Reason to that is because the JavaScript bundle is incompatible with some Babel transforms because of the way it shares code between the main thread and Web Worker. 
To fix that, I explicitly disable transpiling of the Mapbox GL JS bundle.