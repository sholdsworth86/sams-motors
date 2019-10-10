import React from 'react';

//Price Filter Component (optimize to SFC later as not managing state here)
export default class FilterPrice extends React.Component {

  render() {
    return (
      <div>
        <section className="filter" id="price-filter">
          <h5 className="filter-title">Price From</h5>
            <form>
              <select id="price-from" name="price_from">
                <option defaultValue>-- select option --</option>
                <option value="0">£0</option>
                <option value="1000">£1,000</option>
                <option value="2000">£2,000</option>
                <option value="3000">£3,000</option>
                <option value="4000">£4,000</option>
                <option value="5000">£5,000</option>
                <option value="6000">£6,000</option>
                <option value="7000">£7,000</option>
                <option value="8000">£8,000</option>
                <option value="9000">£9,000</option>
                <option value="10000">£10,000</option>
                {/*MORE OPTIONS TO BE ADDED HERE*/}
              </select>
            </form>

            <h5 className="filter-title">Price To</h5>
            <form>
              <select id="price-to" name="price_to">
                <option defaultValue>-- select option --</option>
                <option value="1000">£1,000</option>
                <option value="2000">£2,000</option>
                <option value="3000">£3,000</option>
                <option value="4000">£4,000</option>
                <option value="5000">£5,000</option>
                <option value="6000">£6,000</option>
                <option value="7000">£7,000</option>
                <option value="8000">£8,000</option>
                <option value="9000">£9,000</option>
                <option value="10000">£10,000</option>
                {/*MORE OPTIONS TO BE ADDED HERE*/}
              </select>
            </form>
        </section>
      </div>
    )
  }
}