import React from 'react';

//Engine-Type Filter Component (optimize to SFC later as not managing state here)
export default class FilterEngineType extends React.Component {
 
  //ENGINE TYPE label (to be displayed when a filter option is selected)
  makeLabel() {

    //De-structure the required props
    const { valueEngineType } = this.props;

    let label;

    if (valueEngineType === 'petrol') {
      label = document.getElementById('optn-petrol').innerText;
    } else if (valueEngineType === 'diesel') {
      label = document.getElementById('optn-diesel').innerText;
    } else if (valueEngineType === 'hybrid') {
      label = document.getElementById('optn-hybrid').innerText;
    } else if (valueEngineType === 'electric') {
      label = document.getElementById('optn-electric').innerText;
    }
    return label;
  }

  render() { 

    //De-structure the required props
    const { valueEngineType,
            handleFilterEngineType,
            handleResetEngineTypeFilter
          } = this.props;

    return (
      <div>
        <section className="filter" id="engine-type-filter">
          <h5 className="filter-title">Engine Type</h5>
            <form>
              <select id="car-engine-type" name="engine-type" value={valueEngineType} onChange={handleFilterEngineType}>
                <option defaultValue>-- select option --</option>
                <option id="optn-petrol" value="petrol">Petrol</option>
                <option id="optn-diesel" value="diesel">Diesel</option>
                <option id="optn-hybrid" value="hybrid">Hybrid</option>
                <option id="optn-electric" value="electric">Electric</option>
              </select>
              {valueEngineType !== '' &&
                <div id="selected-option">
                  <span id="makeLabel">{this.makeLabel()}</span>
                  <a id="remove-selected" href="#" onClick={handleResetEngineTypeFilter}><img src="../img/remove.png"></img></a>
                </div>
              }
            </form>
        </section>
      </div>
    )
  }
}