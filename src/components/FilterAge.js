import React from 'react';

//Price Filter Component (optimize to SFC later as not managing state here)
export default class FilterAge extends React.Component {

  currentYear () {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear;
  }
  
  render() {
    return (
      

      <div>
        <section className="filter" id="age-filter">
          <h5 className="filter-title">Age</h5>
            <form>
              <select id="car-age" name="age">
                <option defaultValue>-- select option --</option>
                <option value={this.currentYear()}>Up to 1 year old</option>
                <option value={this.currentYear() - 2}>Up to 2 years old</option>
                <option value={this.currentYear() - 3}>Up to 3 years old</option>
                <option value={this.currentYear() - 5}>Up to 5 years old</option>
                <option value={this.currentYear() - 7}>Up to 7 years old</option>
                <option value={this.currentYear() - 10}>Up to 10 years old</option>
                <option value={this.currentYear() - 20}>Up to 20 years old</option>
                <option value={this.currentYear() - 21}>Over 20 years old</option> {/* Do a date difference > 20 calc here for this one later */}
              </select>
            </form>
        </section>
      </div>
    )
  }
}