import React from 'react';
import FilterMake from './FilterMake';
import FilterModel from './FilterModel';
import FilterTransmission from './FilterTransmission';
import FilterEngineType from './FilterEngineType';
import FilterEngineSize from './FilterEngineSize';
import FilterMileage from './FilterMileage';
import FilterPrice from './FilterPrice';
import FilterAge from './FilterAge';

//Filters Component (optimize to SFC later as not managing state here)
export default class Filters extends React.Component {

    render() {
    
      //De-structure the filters props
      const { 
              items,
              itemTotal, 
              isLoading,
              handleCloseFiltersRequest, 
              handleResetMakeFilter,
              handleResetModelFilter,
              handleResetFilters,
              handleFilterMake, 
              valueMake, 
              handleFilterModel,
              valueModel,
              handleFilterTransmission, 
              valueTransmission,
              handleFilterEngineType,
              valueEngineType,
              handleFilterEngineSize,
              valueEngineSize,
              handleFilterPrice,
              valuePrice,
              handleFilterMileage,
              valueMileage,
              handleFilterAge,
              valueAge } = this.props;

      return (
        <div id="filters">
          <button 
            id="filters-close" 
            onClick={handleCloseFiltersRequest} 
            className="filters-close-btn">Close Search Filters
          </button>
          <h2>Select Your Preferences...</h2>
          <div id="results">{isLoading ? <h3>Loading...</h3> : <h3><span><strong><em>{itemTotal}</em></strong></span> search results found</h3>}</div>

          <FilterMake
            handleFilterMake={handleFilterMake}
            valueMake={valueMake}
            items={items}
            itemTotal={itemTotal}
            handleResetMakeFilter={handleResetMakeFilter}
          />
          <FilterModel 
            handleFilterMake={handleFilterMake}
            handleFilterModel={handleFilterModel}
            valueMake={valueMake}
            valueModel={valueModel}
            handleResetModelFilter={handleResetModelFilter}
          />
          <hr></hr>
          <FilterTransmission 
            handleFilterTransmission={handleFilterTransmission}
            valueTransmission={valueTransmission}
          />
          <hr></hr>
          <FilterEngineType
            handleFilterEngineType={handleFilterEngineType}
            valueEngineType={valueEngineType}
          />
          <hr></hr>
          <FilterEngineSize 
            handleFilterEngineSize={handleFilterEngineSize}
            valueEngineSize={valueEngineSize}
          />
          <hr></hr>
          <FilterPrice 
            handleFilterPrice={handleFilterPrice}
            valuePrice={valuePrice}
          />
          <hr></hr>
          <FilterMileage 
            handleFilterMileage={handleFilterMileage}
            valueMileage={valueMileage}
          />
          <hr></hr>
          <FilterAge
            handleFilterAge={handleFilterAge}
            valueAge={valueAge}
          />
          <button id="reset" onClick={handleResetFilters}>Reset Filters</button>
        </div>
      )
    }
    
  }