import React from 'react';

//Transmission Filter Component (optimize to SFC later as not managing state here)
export default class FilterTransmission extends React.Component {
 
  //TRANSMISSION label (to be displayed when a filter option is selected)
  makeLabel() {

    //De-structure the required props
    const { valueTransmission } = this.props;

    let label;

    if (valueTransmission === 'manual') {
      label = document.getElementById('optn-manual').innerText;
    } else if (valueTransmission === 'auto') {
      label = document.getElementById('optn-auto').innerText;
    } else if (valueTransmission === 'semi-auto') {
      label = document.getElementById('optn-semi-auto').innerText;
    }
    return label;
  }

    render() { 

      //De-structure the required props
      const { valueTransmission,
              handleFilterTransmission,
              handleResetTransmissionFilter } = this.props;

      return (
        <div>
          <section className="filter" id="transmission-filter">
            <h5 className="filter-title">Transmission</h5>
              <form>
                <select id="car-transmission" name="transmission" value={valueTransmission} onChange={handleFilterTransmission}>
                  <option defaultValue>-- select option --</option>
                  <option id="optn-manual" value="manual">Manual</option>
                  <option id="optn-auto" value="auto">Automatic</option>
                  <option id="optn-semi-auto" value="semi-auto">Semi-Auto</option>
                </select>
                {valueTransmission !== '' &&
                <div id="selected-option">
                  <span id="makeLabel">{this.makeLabel()}</span>
                  <a id="remove-selected" href="#" onClick={handleResetTransmissionFilter}><img src="../img/remove.png"></img></a>
                </div>
                }
              </form>
          </section>
        </div>
      )
    }
  }