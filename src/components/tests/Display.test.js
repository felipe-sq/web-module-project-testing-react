import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from './../Display';

const testShow = {
  name: "Stranger Things",
  summary: "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
  seasons: [
      {
          id:0,
          name: "Season 1",
          episodes: []
      },
      {
          id:1,
          name: "Season 2",
          episodes: []
      },
      {
          id:2,
          name: "Season 3",
          episodes: []
      }
  ]
}

test("Display renders without errors", () => {
  render(<Display />)
});

test("Show component displays when fetch button is pressed", () => {

});

test("The amount of select options rendered is equal to the amount of seasons in the test data", () => {
  
});

test("Optional functional prop in Display component is called when the fetch button is pressed", () => {

});



///Tasks:
//1. Add in necessary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.