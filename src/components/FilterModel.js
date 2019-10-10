import React from 'react';

//Model Filter Component (optimize to SFC later as not managing state here)
export default class FilterModel extends React.Component {

  render() {

    //De-structure the required props
    const { valueModel,
            handleFilterModel,
            handleResetModelFilter
          } = this.props;

    return (
      <div>
        <section className="filter" id="model-filter">
          <h5 className="filter-title">Model</h5>
            <form>
              <select id="car-model" name="model" value={valueModel} onChange={handleFilterModel} disabled>
              <option defaultValue>-- select option --</option>
              {/*Dynamically populated options from 'Make' filter selection will be injected here*/}         
              </select>
              {valueModel !== '' &&
                <div id="selected-option">
                  <span>{valueModel}</span>            
                  <a id="remove-selected" href="#" onClick={handleResetModelFilter}><img src="../img/remove.png"></img></a>
                </div>
              }
            </form>
        </section>
      </div>
    )
  }
}