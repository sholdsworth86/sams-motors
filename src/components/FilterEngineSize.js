//Required imports
import React from 'react';

//Engine-Size Filter Component (optimize to SFC later as not managing state here)
export default class FilterEngineSize extends React.Component {

  render() {
    return (
      <div>
        <section className="filter" id="model-filter">
          <h5 className="filter-title">Engine Size From</h5>
            <form>          
              <select id="car-engine-size-from" name="engine-size-from" >
                <option defaultValue>-- select option --</option>
                <option id="engine-size-from-0" className="engine-size-from-A" value="0">0L - 0.9L</option>    
                <option id="engine-size-from-1" className="engine-size-from-A" value="1">1L - 1.9L</option>
                <option id="engine-size-from-2" className="engine-size-from-A" value="2">2L - 2.9L</option>
                <option id="engine-size-from-3" className="engine-size-from-A" value="3">3L - 3.9L</option>
                <option id="engine-size-from-4" className="engine-size-from-A" value="4">4L - 4.9L</option>
                <option id="engine-size-from-5" className="engine-size-from-A" value="5">5L - 5.9L</option>
                <option id="engine-size-from-6" className="engine-size-from-A" value="6">6L - 6.9L</option>
              </select>
            </form>
            <h5 className="filter-title">Engine Size To</h5>
            <form>
              <select id="car-engine-size-to" name="engine-size-to" >
                <option defaultValue>-- select option --</option>
                <option id="engine-size-to-0" className="engine-size-to-B" value="0">0L - 0.9L</option>    
                <option id="engine-size-to-1" className="engine-size-to-B" value="1">1L - 1.9L</option>
                <option id="engine-size-to-2" className="engine-size-to-B" value="2">2L - 2.9L</option>
                <option id="engine-size-to-3" className="engine-size-to-B" value="3">3L - 3.9L</option>
                <option id="engine-size-to-4" className="engine-size-to-B" value="4">4L - 4.9L</option>
                <option id="engine-size-to-5" className="engine-size-to-B" value="5">5L - 5.9L</option>
                <option id="engine-size-to-6" className="engine-size-to-B" value="6">6L - 6.9L</option>
              </select>
            </form>
        </section>
      </div>      
    )
  }
}
