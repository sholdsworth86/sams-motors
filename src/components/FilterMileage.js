import React from 'react';

//Mileage Filter Component (optimize to SFC later as not managing state here)
export default class FilterMileage extends React.Component {

  render() {
    return (
      <div>
        <section className="filter" id="mileage-filter">
          <h5 className="filter-title">Mileage</h5>
            <form>
              <select id="car-engine-size" name="engine-size" >
                <option defaultValue>-- select option --</option>
                <option id="mileage-up-to-5k" value="5000">Up to 5,000 miles</option>
                <option id="mileage-up-to-10k" value="10000">Up to 10,000 miles</option>
                <option id="mileage-up-to-20k" value="20000">Up to 20,000 miles</option>
                <option id="mileage-up-to-40k" value="40000">Up to 40,000 miles</option>
                <option id="mileage-up-to-60k" value="60000">Up to 60,000 miles</option>
                <option id="mileage-up-to-80k" value="80000">Up to 80,000 miles</option>
                <option id="mileage-up-to-100k" value="100000">Up to 100,000 miles</option>
                <option id="mileage-over-100k" value="100001">Over 100,000 miles</option>
              </select>
            </form>
        </section>
      </div>
    )
  }
}