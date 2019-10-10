import React from 'react';

//Make Filter Component (optimize to SFC later as not managing state here)
export default class FilterMake extends React.Component {

  //MAKE label (to be displayed when a filter option is selected)
  makeLabel() {

    //De-structure the required props
    const { valueMake } = this.props;

    let label;

    if (valueMake === 'alfa romeo') {
      label = document.getElementById('optn-alfa-romeo').innerText;
    } else if (valueMake === 'aston martin') {
      label = document.getElementById('optn-aston-martin').innerText;
    } else if (valueMake === 'audi') {
      label = document.getElementById('optn-audi').innerText;
    } else if (valueMake === 'bentley') {
      label = document.getElementById('optn-bentley').innerText;
    } else if (valueMake === 'bmw') {
      label = document.getElementById('optn-bmw').innerText;
    } else if (valueMake === 'chevrolet') {
      label = document.getElementById('optn-chevrolet').innerText;
    } else if (valueMake === 'chrysler') {
      label = document.getElementById('optn-chrysler').innerText;
    } else if (valueMake === 'citroen') {
      label = document.getElementById('optn-citroen').innerText;
    } else if (valueMake === 'daewoo') {
      label = document.getElementById('optn-daewoo').innerText;
    } else if (valueMake === 'ferrari') {
      label = document.getElementById('optn-ferrari').innerText;
    } else if (valueMake === 'fiat') {
      label = document.getElementById('optn-fiat').innerText;
    } else if (valueMake === 'ford') {
      label = document.getElementById('optn-ford').innerText;
    } else if (valueMake === 'honda') {
      label = document.getElementById('optn-honda').innerText;
    } else if (valueMake === 'hyundai') {
      label = document.getElementById('optn-hyundai').innerText;
    } else if (valueMake === 'jaguar') {
      label = document.getElementById('optn-jaguar').innerText;
    } else if (valueMake === 'jeep') {
      label = document.getElementById('optn-jeep').innerText;
    } else if (valueMake === 'kia') {
      label = document.getElementById('optn-kia').innerText;
    } else if (valueMake === 'lamborghini') {
      label = document.getElementById('optn-lamborghini').innerText;
    } else if (valueMake === 'land rover') {
      label = document.getElementById('optn-land-rover').innerText;
    } else if (valueMake === 'lexus') {
      label = document.getElementById('optn-lexus').innerText;
    } else if (valueMake === 'lotus') {
      label = document.getElementById('optn-lotus').innerText;
    } else if (valueMake === 'maserati') {
      label = document.getElementById('optn-maserati').innerText;
    } else if (valueMake === 'mazda') {
      label = document.getElementById('optn-mazda').innerText;
    } else if (valueMake === 'mclaren') {
      label = document.getElementById('optn-mclaren').innerText;
    } else if (valueMake === 'mercedes') {
      label = document.getElementById('optn-mercedes').innerText;
    } else if (valueMake === 'mg') {
      label = document.getElementById('optn-mg').innerText;
    } else if (valueMake === 'mini') {
      label = document.getElementById('optn-mini').innerText;
    } else if (valueMake === 'mitsubishi') {
      label = document.getElementById('optn-mitsubishi').innerText;
    } else if (valueMake === 'nissan') {
      label = document.getElementById('optn-nissan').innerText;
    } else if (valueMake === 'peugeot') {
      label = document.getElementById('optn-peugeot').innerText;
    } else if (valueMake === 'porsche') {
      label = document.getElementById('optn-porsche').innerText;
    } else if (valueMake === 'renault') {
      label = document.getElementById('optn-renault').innerText;
    } else if (valueMake === 'saab') {
      label = document.getElementById('optn-saab').innerText;
    } else if (valueMake === 'seat') {
      label = document.getElementById('optn-seat').innerText;
    } else if (valueMake === 'skoda') {
      label = document.getElementById('optn-skoda').innerText;
    } else if (valueMake === 'subaru') {
      label = document.getElementById('optn-subaru').innerText;
    } else if (valueMake === 'suzuki') {
      label = document.getElementById('optn-suzuki').innerText;
    } else if (valueMake === 'tesla') {
      label = document.getElementById('optn-tesla').innerText;
    } else if (valueMake === 'toyota') {
      label = document.getElementById('optn-toyota').innerText;
    } else if (valueMake === 'vauxhall') {
      label = document.getElementById('optn-vauxhall').innerText;
    } else if (valueMake === 'volkswagen') {
      label = document.getElementById('optn-volkswagen').innerText;
    } else if (valueMake === 'volvo') {
      label = document.getElementById('optn-volvo').innerText;
    } 
    return label;
  }

  render() {
    //De-structure the required props
    const { valueMake,
            handleFilterMake,
            handleResetMakeFilter
          } = this.props;

    return (
      <div>
        <section className="filter" id="make-filter">
          <h5 className="filter-title">Make</h5>
            <form>      
              <select id="car-make" name="make" value={valueMake} onChange={handleFilterMake}>
                <option defaultValue>-- select option --</option>
                <option id="optn-alfa-romeo" value="alfa romeo">Alfa Romeo</option>
                <option id="optn-aston-martin" value="aston martin">Aston Martin</option>
                <option id="optn-audi" value="audi">Audi</option>
                <option id="optn-bentley" value="bentley">Bentley</option>
                <option id="optn-bmw" value="bmw">BMW</option>
                <option id="optn-chevrolet" value="chevrolet">Chevrolet</option>
                <option id="optn-chrysler" value="chrysler">Chrysler</option>
                <option id="optn-citroen" value="citroen">Citroen</option>
                <option id="optn-daewoo" value="daewoo">Daewoo</option>
                <option id="optn-ferrari" value="ferrari">Ferrari</option>
                <option id="optn-fiat" value="fiat">Fiat</option>
                <option id="optn-ford" value="ford">Ford</option>
                <option id="optn-honda" value="honda">Honda</option>
                <option id="optn-hyundai" value="hyundai">Hyundai</option>
                <option id="optn-jaguar" value="jaguar">Jaguar</option>
                <option id="optn-jeep" value="jeep">Jeep</option>
                <option id="optn-kia" value="kia">Kia</option>
                <option id="optn-lamborghini" value="lamborghini">Lamborghini</option>
                <option id="optn-land-rover" value="land rover">Land Rover</option>
                <option id="optn-lexus" value="lexus">Lexus</option>
                <option id="optn-lotus" value="lotus">Lotus</option>
                <option id="optn-maserati" value="maserati">Maserati</option>
                <option id="optn-mazda" value="mazda">Mazda</option>
                <option id="optn-mclaren" value="mclaren">McLaren</option>
                <option id="optn-mercedes" value="mercedes">Mercedes</option>
                <option id="optn-mg" value="mg">MG</option>
                <option id="optn-mini" value="mini">Mini</option>
                <option id="optn-mitsubishi" value="mitsubishi">Mitsubishi</option>
                <option id="optn-nissan" value="nissan">Nissan</option>
                <option id="optn-peugeot" value="peugeot">Peugeot</option>
                <option id="optn-porsche" value="porsche">Porsche</option>
                <option id="optn-renault" value="renault">Renault</option>
                <option id="optn-saab" value="saab">Saab</option>
                <option id="optn-seat" value="seat">Seat</option>
                <option id="optn-skoda" value="skoda">Skoda</option>
                <option id="optn-subaru" value="subaru">Subaru</option>
                <option id="optn-suzuki" value="suzuki">Suzuki</option>
                <option id="optn-tesla" value="tesla">Tesla</option>
                <option id="optn-toyota" value="toyota">Toyota</option>
                <option id="optn-vauxhall" value="vauxhall">Vauxhall</option>
                <option id="optn-volkswagen" value="volkswagen">Volkswagen</option>
                <option id="optn-volvo" value="volvo">Volvo</option>             
              </select>
              {valueMake !== '' &&
                <div id="selected-option">
                  <span id="makeLabel">{this.makeLabel()}</span>
                  <a id="remove-selected" href="#" onClick={handleResetMakeFilter}><img src="../img/remove.png"></img></a>
                </div>
              }
            </form>
        </section>
      </div>
    )
  }
}