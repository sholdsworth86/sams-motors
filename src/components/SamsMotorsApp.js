//Required imports
import React from 'react';
import { cars } from '../json-data';
import Header from './Header';
import Filters from './Filters';
import Introduction from './Introduction';
import CompanyDetails from './CompanyDetails';
import Vehicles from './Vehicles';
import Outro from './Outro';
import Footer from './Footer';

//SamsMotorsApp Component (master parent component) (keep as CBC)
export default class SamsMotorsApp extends React.Component {
  
  constructor(props) {
    
    super(props);

    this.resultsLoading = this.resultsLoading.bind(this);
    this.resetSliders = this.resetSliders.bind(this);
    this.handleResetMakeFilter = this.handleResetMakeFilter.bind(this);
    this.handleResetModelFilter = this.handleResetModelFilter.bind(this);

    this.handleResetFilters = this.handleResetFilters.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.handleOpenFiltersRequest = this.handleOpenFiltersRequest.bind(this);
    this.handleCloseFiltersRequest = this.handleCloseFiltersRequest.bind(this);

    this.handleFilterMake = this.handleFilterMake.bind(this);
    this.handleFilterModel= this.handleFilterModel.bind(this);
    this.handleFilterTransmission = this.handleFilterTransmission.bind(this);
    this.handleFilterEngineType = this.handleFilterEngineType.bind(this);
    this.handleFilterEngineSize = this.handleFilterEngineSize.bind(this);
    this.handleFilterMileage = this.handleFilterMileage.bind(this);
    this.handleFilterPrice = this.handleFilterPrice.bind(this);
    this.handleFilterAge = this.handleFilterAge.bind(this);

    this.state = {
      items: [],
      width: window.innerWidth,
      filtersOpened: false,
      filtersClosed: true,
      items: cars,
      itemTotal: cars.length,
      isLoading: false,
      valueMake: '',
      valueModel: '',
      valueTransmission: '',
      valueEngineType: '',
      valueEngineSize: undefined,
      valuePrice: undefined,
      valueMileage: undefined,
      valueAge: undefined,
    }    

  }
  
  componentDidMount() {
   
    //this.resultsLoading();

    window.addEventListener("resize", this.updateDimensions);

    const model = document.getElementById('car-model');

    //Initially render the disabled color as the model selection will be disabled by default until a car make has first been selected 
    if (model.disabled) {
      model.style.color = '#999';
    }

  }

  //Show loading icon to help improve UI experience
  resultsLoading() {
    const html = document.querySelector('html');
    const loader = document.querySelector('#loader');
    const vehicles = document.querySelector('#vehicles');
    const resultsReturned = document.querySelector('#results-returned');
    const loading = document.querySelectorAll('#loading');

    html.style.opacity = 0.4;
    loader.style.display = 'block';
    //vehicles.style.visibility = 'hidden';

    //start loader instantly
    setTimeout(() => {
      
      //resultsReturned.style.visibility = 'hidden';
      //loading.style.visibility = 'visible';
      
      this.setState(() => ({
        isLoading: true
      })) 

      html.style.opacity = 0.4;
      loader.style.display = 'block';
      //vehicles.style.visibility = 'hidden';

    }, 0);
    
    //remove loader (show results loading for 2 seconds)
    setTimeout(() => {
      html.style.opacity = 1;
      loader.style.display = 'none';
      //vehicles.style.visibility = 'visible';
      //resultsReturned.style.visibility = 'visible';
      //loading.style.visibility = 'hidden';

      this.setState(() => ({
        isLoading: false
      }))
      
    }, 1500);

  }

  //Reset sliders
  resetSliders() {
    const figures = document.querySelectorAll('#figure');

    figures.forEach(figure => {
      
      figure.classList.remove('run-animation');
      void figure.offsetWidth;
      figure.classList.add('run-animation');
    })
  }

  //Reset All filters & Items State to show all
  handleResetFilters(event) {
     
    event.preventDefault();

    const model = document.getElementById('car-model');

    //Show loader on reset (only if not previously reset the vehicle items already)
    if(this.state.items !== cars) {
      this.resultsLoading();
    }

    this.setState(() => ({          
      items: cars,
      itemTotal: cars.length,
      valueMake: '',
      valueModel: '',
      valueTransmission: '',
      valueEngineType: '',
      valueEngineSize: '',
      valuePrice: '',
      valueMileage: '', 
      valueAge: ''
    }));

    

    //Disable model selection again as no make selected upon reset (once another make is selected this will re-populate the car makes model selections)
    model.setAttribute('disabled', '');

    if (model.disabled) {
      model.style.color = '#999';
    }

    //Reset the sliders upon filter reset
    this.resetSliders();
  }

  //Individual Filter Resets:
  //MAKE
  handleResetMakeFilter(event) {

    event.preventDefault();

    const model = document.getElementById('car-model');

    //Show loader whilst performing filter reset
    this.resultsLoading();
    
    //Update Filter Values
    this.setState(() => ({  
      valueMake: '',
      valueModel: ''
    }))

    //Disable model selection again as no make selected upon reset (once another make is selected this will re-populate the car makes model selections)
    model.setAttribute('disabled', '');

    if (model.disabled) {
      model.style.color = '#999';
    }

    //Reset the sliders upon filter reset
    this.resetSliders();

  }

  //MODEL
  handleResetModelFilter(event) {

    event.preventDefault();
  
    //Show loader whilst performing filter reset
    this.resultsLoading();
    
    //Update Filter Values
    this.setState(() => ({          
      valueModel: ''
    }));

    //Reset the sliders upon filter reset
    this.resetSliders();
  }

  updateDimensions() {

    const  filters = document.getElementById('filters'),
           filtersOpen = document.querySelector('.filters-open'),
           filtersOpenBtn = document.querySelector('.filters-open-btn');

    this.setState({
      width: window.innerWidth
    });

    if (this.state.width < 751 && !this.state.filtersOpened) {

      filters.style.transform = "translate3d(-100%, 0, 0)";
      filters.style.transition = "transform 0.65s ease-out";

      setTimeout(function() {
        filtersOpen.style.display = "inline-block";
        filtersOpenBtn.style.display = "inline-block";
      }, 650);

    } else if (this.state.width >= 751) {
    
      filters.style.transform = "translate3d(0, 0, 0)";
      filters.style.transition = "transform 0.65s ease-in";
    
      setTimeout(function() {
        filtersOpen.style.display = "none";
        filtersOpenBtn.style.display = "none";
      }, 650);
    }
  }

  //Show Filters Handler (Smaller Screens Only (< 751px))
  handleOpenFiltersRequest(event) {

    const filters = document.getElementById('filters'),
          filtersOpen = document.querySelector('.filters-open'),
          filtersOpenBtn = document.querySelector('.filters-open-btn');

    filters.style.transform = "translate3d(0, 0, 0)";
    filters.style.transition = "transform 0.65s ease-in";
    filtersOpen.style.display = "none";
    filtersOpenBtn.style.display = "none";
    window.scrollTo(0, 0);

    this.setState({
      filtersOpened: true,
      filtersClosed: false
    })

  }

  //Close Filters Handler (Smaller Screens Only (< 751px))
  handleCloseFiltersRequest(event) { 

    const filters = document.getElementById('filters'),
          filtersOpen = document.querySelector('.filters-open'),
          filtersOpenBtn = document.querySelector('.filters-open-btn');
            
    filters.style.transform = "translate3d(-100%, 0, 0)";
    filters.style.transition = "transform 0.65s ease-out";
    
    setTimeout(function() {
      filtersOpen.style.display = "inline-block";
      filtersOpenBtn.style.display = "inline-block";
    }, 500);
          
    this.setState({
      filtersOpened: false,
      filtersClosed: true
    });
  }

  handleFilterMake(event) {

    const make = document.getElementById('car-make');
    const model = document.getElementById('car-model');
    
    //Show loading effect when filter selected
    this.resultsLoading();
    //Update selected make results
    this.setState({
      valueMake: event.target.value }, 
      () => { 

        //De-structure the updated state object variables (in the callback as setState is async) for filtering process
        const { valueMake, valueModel, valueTransmission, valueEngineType, valueEngineSize, valuePrice, valueMileage, valueAge } = this.state;
        const model = document.getElementById('car-model');
        
        //Car Model Selections (Based off the selected make) 
        //CASE - ALFA ROMEO
        if (this.state.valueMake === 'alfa romeo') {
            model.innerHTML = '';
            model.removeAttribute('disabled');
            let modelOptions = [
                                '|-- select option --', 
                                '147|147',
                                '156|156', 
                                '159|159', 
                                'brera|Brera',
                                'giulia|Giulia',
                                'giulietta|Giulietta',
                                'gt|GT',
                                'gtv|GTV',
                                'mito|Mito',
                                'spider|Spider',
                                'stelvio|Stelvio'
                              ];
            
            for (let option in modelOptions) {
              const pair = modelOptions[option].split('|');
              const newOption = document.createElement('option');
              newOption.value = pair[0];
              newOption.innerHTML = pair[1];
              model.options.add(newOption);
            }
        }

        //CASE - ASTON MARTIN
        else if (this.state.valueMake === 'aston martin') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'db7|DB7',
                              'db9|DB9', 
                              'db11|DB11',
                              'dbs|DBS', 
                              'dbs superleggera|DBS Superleggera',
                              'rapide|Rapide',
                              'vanquish|Vanquish',
                              'vantage|Vantage',
                              'virage|Virage'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - AUDI
        else if (this.state.valueMake === 'audi') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'a1|A1',
                              'a2|A2', 
                              'a3|A3',  //use the JS .includes('a3') method as per this example for an 'a3' model (this this for all model searches rather than === operand for will be different variants i.e. astra, astra GTC etc...)
                              'a4|A4', 
                              'a5|A5',
                              'a6|A6',
                              'a7|A7',
                              'a8|A8',
                              'e-tron|E-Tron',
                              'q2|Q2',
                              'q3|Q3',
                              'q5|Q5',
                              'q7|Q7',
                              'q8|Q8',
                              'r8|R8',
                              'rs4|RS4',
                              'rs5|RS5',
                              'rs6|RS6',
                              's3|S3',
                              's4|S4',
                              's5|S5',
                              's6|S6',
                              's7|S7',
                              's8|S8',
                              'sq5|SQ5',
                              'sq7|SQ7',
                              'tt|TT',
                              'ttrs|TTRS'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - BENTLEY
        else if (this.state.valueMake === 'bentley') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'arnage|Arnage',
                              'bentayga|Bentayga',
                              'brooklands|Brooklands',
                              'continental|Continental', 
                              'continental gt|Continental GT',
                              'flying spur|Flying Spur',
                              'mulsanne|Mulsanne'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - BMW
        else if (this.state.valueMake === 'bmw') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              '1-series|1-Series', //Multiple possibilities, use the JS charAt(0) method to determine the series for these groups (will work for pre-fixed with a # models)
                              '2-series|2-Series',
                              '3-series|3-Series',
                              '4-series|4-Series',
                              '5-series|5-Series',
                              '6-series|6-Series',
                              '7-series|7-Series',
                              '8-series|8-Series',
                              'i3|I3',
                              'i8|I8',
                              'm2|M2',
                              'm3|M3',
                              'm4|M4',
                              'm5|M5',
                              'm6|M6',
                              'x1|X1',
                              'x2|X2',
                              'x3|X3',
                              'x4|X4',
                              'x5|X5',
                              'x6|X6',
                              'z3|Z3',
                              'z4|Z4'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - CHEVROLET
        else if (this.state.valueMake === 'chevrolet') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'aveo|Aveo',
                              'captiva|Captiva',
                              'corvette|Corvette',
                              'cruze|Cruze',
                              'epica|Epica',
                              'kalos|Kalos',
                              'lacetti|Lacetti',
                              'orlando|Orlando',
                              'spark|Spark',
                              'tacuma|Tacuma',
                              'trax|Trax'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - CHRYSLER
        else if (this.state.valueMake === 'chrysler') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              '300c|300C',
                              'crossfire|Crossfire',
                              'delta|Delta',
                              'grand voyager|Grand Voyager',
                              'pt cruiser|PT Cruiser',
                              'sebring|Sebring',
                              'ypsilon|Ypsilon'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - CITROEN
        else if (this.state.valueMake === 'citroen') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'berlingo|Berlingo',
                              'c1|C1',
                              'c2|C2',
                              'c3|C3',
                              'c4|C4',
                              'c5|C5',
                              'c6|C6',
                              'c8|C8',
                              'c-crosser|C-Crosser',
                              'ds3|DS3',
                              'ds4|DS4',
                              'ds5|DS5',
                              'grand c4 picasso|Grand C4 Picasso',
                              'nemo multispace|Nemo Multispace',
                              'xsara picasso|Xsara Picasso'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - DAEWOO
        else if (this.state.valueMake === 'daewoo') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'kalos|Kalos',
                              'matiz|Matiz'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - FERRARI
        else if (this.state.valueMake === 'ferrari') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              '360|360',
                              '458|458',
                              '488|488',
                              '599 gtb|599 GTB',
                              'california|California',
                              'california t|California T',
                              'f12 berlinetta|F12 Berlinetta',
                              'ff coupe|FF Coupe'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - FIAT
        else if (this.state.valueMake === 'fiat') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              '500|500',
                              '500l|500L',
                              '500l mpw|500L MPW',
                              'bravo|Bravo',
                              'doblo|Doblo',
                              'multipla|Multipla',
                              'panda|Panda',
                              'punto|Punto',
                              'qubo|Qubo',
                              'stilo|Stilo',
                              'tipo|Tipo'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - FORD
        else if (this.state.valueMake === 'ford') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'b-max|B-MAX',
                              'c-max|C-MAX',
                              'eco sport|Eco Sport',
                              'edge|Edge',
                              'fiesta|Fiesta',
                              'focus|Focus',
                              'focus c-max|Focus C-MAX',
                              'fusion|Fusion',
                              'galaxy|Galaxy',
                              'grand c-max|Grand C-MAX',
                              'ka|Ka',
                              'kuga|Kuga',
                              'mondeo|Mondeo',
                              'mustang|Mustang',
                              'ranger|Ranger',
                              's-max|S-MAX',
                              'tourneo connect|Tourneo Connect',
                              'vignale|Vignale'                              
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - HONDA
        else if (this.state.valueMake === 'honda') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'accord|Accord',
                              'civic|Civic',
                              'cr-v|CR-V',
                              'cr-z|CR-Z',
                              'fr-v|FR-V',
                              'hr-v|HR-V',
                              'insight|Insight',
                              'jazz|Jazz',
                              'legend|Legend',
                              'prelude|Prelude',
                              's2000|S2000'                                                      
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - HYUNDAI
        else if (this.state.valueMake === 'hyundai') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'amica|Amica',                                                      
                              'coupe|Coupe',
                              'genesis|Genesis',
                              'i10|I10',
                              'i20|I20',
                              'i30|I30',
                              'i40|I40',
                              'ioniq|Ioniq',                                                      
                              'ix20|IX20',
                              'ix35|IX35',
                              'kona|Kona',
                              'santa fe|Santa Fe',
                              'tucson|Tucson',
                              'veloster|Veloster'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - JAGUAR
        else if (this.state.valueMake === 'jaguar') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'e-pace|E-Pace',
                              'f-pace|F-Pace',
                              'f-type|F-Type',
                              'i-pace|I-Pace',
                              's-type|S-Type',
                              'xe|XE',
                              'xf|XF',
                              'xj|XJ',
                              'xjs|XJS',
                              'xk|XK',
                              'xk8|XK8',
                              'x-type|X-Type'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - JEEP
        else if (this.state.valueMake === 'jeep') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'cherokee|Cherokee',
                              'compass|Compass',
                              'grand cherokee|Grand Cherokee',
                              'patriot|Patriot',
                              'renegade|Renegade',
                              'wrangler|Wrangler'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - KIA
        else if (this.state.valueMake === 'kia') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'carens|Carens',
                              'ceed|Ceed',
                              'niro|Niro',
                              'optima|Optima',
                              'picanto|Picanto',
                              'rio|Rio',
                              'sorento|Sorento',
                              'soul|Soul',
                              'sportage|Sportage',
                              'stringer|Stringer',
                              'stonic|Stonic',
                              'venga|Venga'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - LAMBORGHINI
        else if (this.state.valueMake === 'lamborghini') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'aventador|Aventador',
                              'gallardo|Gallardo',
                              'huracan|Huracan',
                              'murcielago|Murcielago',
                              'urus|Urus' 
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }   
        }

        //CASE - LAND ROVER
        else if (this.state.valueMake === 'land rover') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'discovery|Discovery',
                              'discovery sport|Discovery Sport',
                              'freelander|Freelander',
                              'range rover|Range Rover',
                              'range rover evoque|Range Rover Evoque',
                              'range rover sport|Range Rover Sport',
                              'range rover velar|Range Rover Velar'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }   
        }

        //CASE - LEXUS
        else if (this.state.valueMake === 'lexus') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'ct|CT',
                              'es|ES',
                              'gs|GS',
                              'is|IS',
                              'ls|LS',
                              'nx|NX',
                              'rc|RC',
                              'rx|RX',
                              'sc|SC',
                              'ux|UX'   
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }   
        }

        //CASE - LOTUS
        else if (this.state.valueMake === 'lotus') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'elise|Elise',
                              'evora|Evora',
                              'exige|Exige'                              
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }   
        }

        //CASE - MASERATI
        else if (this.state.valueMake === 'maserati') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              '3200 gt|3200 GT',
                              'ghibli|Ghibli',
                              'gran cabriolet|Gran Cabriolet',  
                              'gransport|Gransport',
                              'granturismo|Granturismo',
                              'levante|Levante',                            
                              'quattroporte|Quattroporte',  
                              'spyder|Spyder'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }   
        }

        //CASE - MAZDA
        else if (this.state.valueMake === 'mazda') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              '2|2',
                              '3|3',
                              '5|5',
                              '6|6',
                              'cx-3|CX-3',
                              'cx-5|CX-5',
                              'cx-7|CX-7',
                              'mx-5|MX-5',
                              'rx-8|RX-8'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }   
        }

        //CASE - McLAREN
        else if (this.state.valueMake === 'mclaren') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              '540c|540C',
                              '570gt|570GT',
                              '570s|570S',
                              '600lt|600LT',
                              '720s|720S',
                              'f1|F1',
                              'gt|GT'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }   
        }

        //CASE - MERCEDES
        else if (this.state.valueMake === 'mercedes') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'a-class|A-Class', //Multiple possibilities, use the JS charAt(0) method to determine the series for these groups (will work for pre-fixed with a # models)
                              'b-class|B-Class',
                              'c-class|C-Class',
                              'cl|CL',
                              'clc|CLC',
                              'clk|CLK',
                              'cls|CLS',
                              'e-class|E-Class',
                              'g-class|G-Class',
                              'gla-class|GLA-Class',
                              'glc-glass|GLC-Class',
                              'gls-class|GLS-Class',
                              'm-class|M-Class',
                              'r-class|R-Class',
                              's-class|S-Class',
                              'sl-class|SL-Class'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - MG
        else if (this.state.valueMake === 'mg') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'f|F',
                              'gs|GS',
                              'tf|TF',
                              'zr|ZR',
                              'zs|ZS',
                              'zt|ZT'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - MINI
        else if (this.state.valueMake === 'mini') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'clubman|Clubman',
                              'cooper|Cooper',
                              'countryman|Countryman',
                              'paceman|Paceman',
                              'roadster|Roadster'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - MITSUBISHI
        else if (this.state.valueMake === 'mitsubishi') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'asx|ASX',
                              'colt|Colt',
                              'fto|FTO',
                              'gto|GTO',
                              'lancer|Lancer',
                              'lancer evo|Lancer Evo',
                              'mirage|Mirage',
                              'outlander|Outlander',
                              'pajero|Pajero',
                              'shogun|Shogun',
                              'warrior|Warrior'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - NISSAN
        else if (this.state.valueMake === 'nissan') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              '350z|350Z',
                              '370z|370Z',
                              'almera|Almera',
                              'cube|Cube',
                              'gt-r|GT-R',
                              'juke|Juke',
                              'leaf|Leaf',
                              'micra|Micra',
                              'murano|Murano',
                              'note|Note',
                              'pathfinder|Pathfinder',
                              'pixo|Pixo',
                              'primera|Primera',
                              'pulsar|Pulsar',
                              'qashqai|Qashqai',
                              'qashqai+2|Qashqai+2',
                              'skyline|Skyline',
                              'x-trail|X-Trail'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - PEUGEOT
        else if (this.state.valueMake === 'peugeot') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              '1007|1007',
                              '106|106',
                              '107|107',
                              '108|108',
                              '2008|2008',
                              '206|206',
                              '207|207',
                              '208|208',
                              '3008|3008',
                              '306|306',
                              '307|307',
                              '308|308',
                              '4007|4007',
                              '406|406',
                              '407|407',
                              '5008|5008',
                              '508|508',
                              '607|607',
                              '807|807',
                              'ion|Ion',
                              'partner combi|Partner Combi',
                              'partner tepee|Partner Tepee',
                              'rcz|RCZ',
                              'rifter|Rifter'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - PORSCHE
        else if (this.state.valueMake === 'porsche') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              '718 boxster|718 Boxster',
                              '718 cayman|718 Cayman',
                              '911|911',
                              '924|924',
                              '928|928',
                              '944|944',
                              '968|968',
                              '987|987',
                              '996|996',
                              'boxster|Boxster',
                              'carrera gt|Carrera GT',
                              'cayenne|Cayenne',
                              'cayman|Cayman',
                              'macan|Macan',
                              'panamera|Panamera',
                              'turbo|Turbo',
                              'turbo s|Turbo S'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - RENAULT
        else if (this.state.valueMake === 'renault') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'captur|Captur',
                              'clio|Clio',
                              'espace|Espace',
                              'grand espace|Grand Espace',
                              'grand modus|Grand Modus',
                              'grand scenic|Grand Scenic',
                              'kadjar|Kadjar',
                              'kangoo|Kangoo',
                              'koleos|Koleos',
                              'laguna|Laguna',
                              'megane|Megane',
                              'modus|Modus',
                              'scenic|Scenic',
                              'twingo|Twingo',
                              'wind|Wind',
                              'zoe|Zoe'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - SAAB
        else if (this.state.valueMake === 'saab') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              '9-3|9-3',
                              '9-5|9-5'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - SEAT
        else if (this.state.valueMake === 'seat') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'alhambra|Alhambra',
                              'altea|Altea',
                              'arona|Arona',
                              'arosa|Arosa',
                              'ateca|Ateca',
                              'exeo|Exeo',
                              'ibiza|Ibiza',
                              'leon|Leon',
                              'mii|Mii',
                              'tarraco|Tarraco',
                              'toledo|Toledo'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - SKODA
        else if (this.state.valueMake === 'skoda') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'citigo|Citigo',
                              'fabia|Fabia',
                              'karoq|Karoq',
                              'kodiaq|Kodiaq',
                              'octavia|Octavia',
                              'rapid|Rapid',
                              'roomster|Roomster',
                              'superb|Superb',
                              'yeti|Yeti'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - SUBARU
        else if (this.state.valueMake === 'subaru') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'brz|BRZ',
                              'forester|Forester',
                              'impreza|Impreza',
                              'legacy|Legacy',
                              'outback|Outback',
                              'xv|XV'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - SUZUKI
        else if (this.state.valueMake === 'suzuki') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'alto|Alto',
                              'baleno|Baleno',
                              'celerio|Celerio',
                              'grand vitara|Grand Vitara',
                              'ignis|Ignis',
                              'jimny|Jimny',
                              'splash|Splash',
                              'swift|Swift',
                              'sx4|SX4',
                              'sx4 s-cross|SX4 S-Cross',
                              'vitara|Vitara',
                              'wagon-r+|Wagon-R+'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - TESLA
        else if (this.state.valueMake === 'tesla') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'model s|Model S',
                              'model x|Model X'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - TOYOTA
        else if (this.state.valueMake === 'toyota') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'auris|Auris',
                              'avensis|Avensis',
                              'aygo|Aygo',
                              'camry|Camry',
                              'celica|Celica',
                              'c-hr|C-HR',
                              'corolla|Corolla',
                              'gt86|GT86',
                              'iq|IQ',
                              'mr2|MR2',
                              'previa|Previa',
                              'prius|Prius',
                              'supra|Supra',
                              'urban cruiser|Urban Cruiser',
                              'verso|Verso',
                              'yaris|Yaris'                 
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - VAUXHALL
        else if (this.state.valueMake === 'vauxhall') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'adam|Adam',
                              'agila|Agila',
                              'ampera|Ampera',
                              'antara|Antara',
                              'astra|Astra',
                              'cascada|Cascada',
                              'combo|Combo',
                              'corsa|Corsa',
                              'grandland x|Grandland X',
                              'insignia|Insignia',
                              'meriva|Meriva',
                              'mokka|Mokka',
                              'monaro|Monaro',
                              'signum|Signum',
                              'tigra|Tigra',
                              'vectra|Vectra',
                              'viva|Viva',
                              'vx220|VX220',
                              'vxr8|VXR8',
                              'zafira|Zafira'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - VOLKSWAGEN
        else if (this.state.valueMake === 'volkswagen') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'arteon|Arteon',
                              'beetle|Beetle',
                              'bora|Bora',
                              'caddy life|Caddy Life',
                              'caddy maxi life|Caddy Maxi Life',
                              'california|California',
                              'caravelle|Caravelle',
                              'cc|CC',
                              'e-golf|E-Golf',
                              'eos|EOS',
                              'fox|Fox',
                              'golf|Golf',
                              'jetta|Jetta',
                              'lupo|Lupo',
                              'passat|Passat',
                              'polo|Polo',
                              'scirocco|Scirocco',
                              'sharan|Sharan',
                              't-cross|T-Cross',
                              'tiguan|Tiguan',
                              'touareg|Touareg',
                              'touran|Touran',
                              't-roc|T-Roc'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        //CASE - VOLVO
        else if (this.state.valueMake === 'volvo') {

          model.innerHTML = '';
          model.removeAttribute('disabled');
          let modelOptions = [
                              '|-- select option --', 
                              'c30|C30',
                              'c70|C40',
                              's40|S40',
                              's60|S60',
                              's80|S80',
                              's90|S90',
                              'v40|V40',
                              'v50|V50',
                              'v60|V60',
                              'v70|V70',
                              'v90|V90',
                              'xc40|XC40',
                              'xc60|XC60',
                              'xc70|XC70',
                              'xc90|XC90'
                            ];
          
          for (let option in modelOptions) {
            const pair = modelOptions[option].split('|');
            const newOption = document.createElement('option');
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            model.options.add(newOption);
          }
        }

        ////////////////////////////////////////////////////////////////////////////////////// ALL OTHER FILTERING (GENERIC STATES FOR ALL) ////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////// NO OTHER FILTERS //////////////////////////////////////////////////////////////////////////////
        if (this.state.valueMake !== '') {
          cars.forEach(() => {
            //no other filters applied
            if (valueModel === '' && valueTransmission === '' && valueEngineType === '' && valueEngineSize === '' && valuePrice === '' && valueMileage === '' && valueAge === '') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === valueMake),
                itemTotal: prevState.items.length
              }))
            }        
            /////////////////////////////////////////////////////////////////////////////////////// 1 OTHER FILTER ////////////////////////////////////////////////////////////////////////////
            //1 other filter previously applied (Model filter - NOTE THIS IS NOT APPLICABLE FOR MAKE FILTER AS CANNOT SELECT A MODEL WITHOUT MAKE BEING SELECTED!!) 
            else if (valueModel !== '' && valueTransmission === '' && valueEngineType === '' && valueEngineSize === '' && valuePrice === '' && valueMileage === '' && valueAge === '') {
            //1 other filter previously applied (Transmission filter) 
            } else if (valueModel === '' && valueTransmission !== '' && valueEngineType === '' && valueEngineSize === '' && valuePrice === '' && valueMileage === '' && valueAge === '') {
              this.setState(prevState => ({
                items: cars.filter(car => car.transmission.toLowerCase() === valueTransmission)
                           .filter(car => car.make.toLowerCase() === valueMake),
                itemTotal: prevState.items.length
              }))
            //1 other filter previously applied (Engine-Type filter)   
            } else if (valueModel === '' && valueTransmission === '' && valueEngineType !== '' && valueEngineSize === '' && valuePrice === '' && valueMileage === '' && valueAge === '') {
                this.setState(prevState => ({
                  items: cars.filter(car => car.engineType.toLowerCase() === valueEngineType)
                             .filter(car => car.make.toLowerCase() === valueMake),
                  itemTotal: prevState.items.length
                }))
            //1 other filter previously applied (Engine-Size filter)   
            } else if (valueModel === '' && valueTransmission === '' && valueEngineType === '' && valueEngineSize !== '' && valuePrice === '' && valueMileage === '' && valueAge === '') {
              this.setState(prevState => ({
                items: cars.filter(car => car.engine.toLowerCase() === valueEngineSize)
                           .filter(car => car.make.toLowerCase() === valueMake),
                itemTotal: prevState.items.length
              }))
            //1 other filter previously applied (Price filter)   
            } else if (valueModel === '' && valueTransmission === '' && valueEngineType === '' && valueEngineSize === '' && valuePrice !== '' && valueMileage === '' && valueAge === '') {
              this.setState(prevState => ({
                items: cars.filter(car => car.price.toLowerCase() === valuePrice)
                           .filter(car => car.make.toLowerCase() === valueMake),
                itemTotal: prevState.items.length
              }))
            //1 other filter previously applied (Mileage filter)   
            } else if (valueModel === '' && valueTransmission === '' && valueEngineType === '' && valueEngineSize === '' && valuePrice === '' && valueMileage !== '' && valueAge === '') {
              this.setState(prevState => ({
                items: cars.filter(car => car.mileage.toLowerCase() === valueMileage)
                           .filter(car => car.make.toLowerCase() === valueMake),
                itemTotal: prevState.items.length
              }))
            //1 other filter previously applied (Age filter)   
            } else if (valueModel === '' && valueTransmission === '' && valueEngineType === '' && valueEngineSize === '' && valuePrice === '' && valueMileage === '' && valueAge !== '') {
              this.setState(prevState => ({
                items: cars.filter(car => car.year.toLowerCase() === valueAge)
                           .filter(car => car.make.toLowerCase() === valueMake),
                itemTotal: prevState.items.length
              }))
            /////////////////////////////////////////////////////////////////////////////////////// 2 OTHER FILTERS //////////////////////////////////////////////////////////////////////////////
            //2 other filter previously applied (Transmission filter + Engine Type filter) 
            } else if (valueModel === '' && valueTransmission !== '' && valueEngineType !== '' && valueEngineSize === '' && valuePrice === '' && valueMileage === '' && valueAge === '') {
              this.setState(prevState => ({
                items: cars.filter(car => car.transmission.toLowerCase() === valueTransmission)
                           .filter(car => car.engineType.toLowerCase() === valueEngineType)
                           .filter(car => car.make.toLowerCase() === valueMake),
                itemTotal: prevState.items.length
              }))
            //2 other filter previously applied (Transmission filter + Engine Size filter)
            } else if (valueModel === '' && valueTransmission !== '' && valueEngineType === '' && valueEngineSize !== '' && valuePrice === '' && valueMileage === '' && valueAge === '') {
              this.setState(prevState => ({
                items: cars.filter(car => car.transmission.toLowerCase() === valueTransmission)
                           .filter(car => car.engineType.toLowerCase() === valueEngineSize)
                           .filter(car => car.make.toLowerCase() === valueMake),
                itemTotal: prevState.items.length
              }))
            //2 other filter previously applied (Transmission filter + Price filter)
            } else if (valueModel === '' && valueTransmission !== '' && valueEngineType === '' && valueEngineSize === '' && valuePrice !== '' && valueMileage === '' && valueAge === '') {
              this.setState(prevState => ({
                items: cars.filter(car => car.transmission.toLowerCase() === valueTransmission)
                           .filter(car => car.engineType.toLowerCase() === valuePrice)
                           .filter(car => car.make.toLowerCase() === valueMake),
                itemTotal: prevState.items.length
              }))
            /* etc... etc... until all 2^8 states combinations are complete! ... Need to find a better way of managing the components and state (consider re-designing with Redux)
             as passing down too much state and props unnecessarily here*/

            }
          })
        }
      });

    if (make.value !== '' ) {
      model.style.color = 'black';
    }
      
    //Reset the sliders when current items state updates
    this.resetSliders();
  }

  handleFilterModel(event) {
    
    //Show loading effect when filter selected
    this.resultsLoading();
    //Update selected make results
    this.setState({
      valueModel: event.target.value }, 
      () => { 

        //De-structure the updated state object variables (in the callback as setState is async) for filtering process
        const { valueMake, valueModel, valueTransmission, valueEngineType, valueEngineSize, valuePrice, valueMileage, valueAge } = this.state;
        //const make = document.getElementById('car-make');
        //const model = document.getElementById('car-model');
    /////////////////////////////////////////////////////////////////////////////////////// NO OTHER FILTERS //////////////////////////////////////////////////////////////////////////////
      if (valueModel !== '') {

        cars.forEach(() => {
          //No other filters applied (except Make but no need to add as model is dependant on this being set(so can ommit makes value))
          if (valueTransmission === '' && valueEngineType === '' && valueEngineSize === '' && valuePrice === '' && valueMileage === '' && valueAge === '') {

            //SPECIAL CASE MODELS, i.e. specific model series which include multiple variants... 
            //Case - BMW 
            //1-Series
            if (valueMake === 'bmw') {
            if (valueModel === '1-series') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'bmw')
                           .filter(car => car.model.toLowerCase().charAt(0) === '1'),
                itemTotal: prevState.items.length
              }))
            //2-Series
            } else if (valueModel === '2-series') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'bmw')
                           .filter(car => car.model.toLowerCase().charAt(0) === '2'),
                itemTotal: prevState.items.length
              }))
            //3-Series
            } else if (valueModel === '3-series') {

              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'bmw')
                           .filter(car => car.model.toLowerCase().charAt(0) === '3'),
                itemTotal: prevState.items.length
              }))
            //4-Series
            } else if (valueModel === '4-series') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'bmw')
                           .filter(car => car.model.toLowerCase().charAt(0) === '4'),
                itemTotal: prevState.items.length
              }))
            //5-Series
            } else if (valueModel === '5-series') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'bmw')
                           .filter(car => car.model.toLowerCase().charAt(0) === '5'),
                itemTotal: prevState.items.length
              }))
            //6-Series
            } else if (valueModel === '6-series') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'bmw')
                           .filter(car => car.model.toLowerCase().charAt(0) === '6'),
                itemTotal: prevState.items.length
              }))
            //7-Series
            } else if (valueModel === '7-series') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'bmw')
                           .filter(car => car.model.toLowerCase().charAt(0) === '7'),
                itemTotal: prevState.items.length
              }))
            //8-Series
            } else if (valueModel === '8-series') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'bmw')
                           .filter(car => car.model.toLowerCase().charAt(0) === '8'),
                itemTotal: prevState.items.length
              }))
            }
          }
            

            //Case - Mercedes
            //A-Class
            if (valueMake === 'mercedes' && valueModel === 'a-class') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'mercedes')
                           .filter(car => car.model.toLowerCase().charAt(0) === 'a'),
                itemTotal: prevState.items.length
              }))
            } 
            //B-Class
            else if (valueMake === 'mercedes' && valueModel === 'b-class') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'mercedes')
                           .filter(car => car.model.toLowerCase().charAt(0) === 'b'),
                itemTotal: prevState.items.length
              }))
            }
            //C-Class
            else if (valueMake === 'mercedes' && valueModel === 'c-class') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'mercedes')
                           .filter(car => car.model.toLowerCase().charAt(0) === 'c' && car.model.toLowerCase().charAt(1) !== 'l'),
                itemTotal: prevState.items.length
              }))
            }
            //CL Series
            else if (valueMake === 'mercedes' && valueModel === 'cl') {
              this.setState(prevState => ({
                items: cars.filter(car => car.make.toLowerCase() === 'mercedes')
                           .filter(car => car.model.toLowerCase().charAt(0) === 'c' 
                                       && car.model.toLowerCase().charAt(1) === 'l'
                                       && car.model.toLowerCase().charAt(2) !== 's'), //|| car.model.toLowerCase().charAt(2) !== 'k' || car.model.toLowerCase().charAt(2) !== 's'),
                itemTotal: prevState.items.length
              }))
            }

            // etc... etc... etc... etc...etc... etc...
                        
          
            //Else utilize the includes() method for all other models as the car model may contain other characters (thus inhibiting an exact filter match (thus the need for includes))
            else {
            this.setState(prevState => ({
              items: cars.filter(car => car.model.toLowerCase().includes(valueModel)), 
              itemTotal: prevState.items.length
            }))
          }
        }
      })
    }        
  })  

    //Reset the sliders when current items state updates
    this.resetSliders();
  }

  handleFilterTransmission(event) {

    //show loader
    this.resultsLoading();
    //update selected make results
    this.setState({
      valueTransmission: event.target.value, }, 
      () => { 
        if (this.state.valueTransmission === 'manual') {
           
          cars.forEach(car => {
            
            this.setState(prevState => ({
              items: cars.filter(car => car.transmission === 'Manual'),
              itemTotal: prevState.items.length
            }))
          })
          
        } else if (this.state.valueTransmission === 'auto') {
          
          cars.forEach(car => {

            this.setState(prevState => ({
              //valueTransmission: '',
              items: cars.filter(car => car.transmission === 'Auto'),
              itemTotal: prevState.items.length,
              itemTotal: this.state.items.length,
              valueTransmission: 'auto'
            }))

            if (this.state.valueMake !== '') {
              this.setState(prevState => ({
                valueTransmission: '',
                items: prevState.items.filter(car => car.transmission === 'Auto').filter(car),
                itemTotal: prevState.items.length,
                valueTransmission: 'auto'
              }))
            }
          })

        } else if (this.state.valueTransmission === 'semi-auto') {
          
          cars.forEach(car => {

            this.setState(prevState => ({
              items: cars.filter(car => car.transmission === 'Semi-Auto'),
              itemTotal: prevState.items.length
            }))
          })
        }

    });

    //Reset the sliders when current items state updates
    this.resetSliders();
  }

  handleFilterEngineType(event) {

    //De-structure the necessary state object variables
    const { valueMake, valueModel, valueTransmission, valueEngineType, valueEngineSize, valueMileage, valuePrice, valueAge } = this.state;

    //show loader
    this.resultsLoading();

    //update selected make results
    this.setState({
      valueEngineType: event.target.value},
      () => {

        //PETROL
        if (this.state.valueEngineType === 'petrol') {

          cars.forEach(car => {
            //Case when no other filters are applied beforehand
            if ((valueMake === '' && valueTransmission === '')) {
              this.setState(prevState => ({              
                items: prevState.items.filter(car => car.engineType === 'Petrol'),
                itemTotal: prevState.items.length
              }))

            //Case when 'MAKE' filter is applied beforehand, then retain the previous state value (with no previous engine type filter applied)
            } else if ((this.state.valueMake !== '' || this.state.valueTransmission !== '') && (this.state.valueEngineType === '')) {
              this.setState(prevState => ({              
                items: prevState.items.filter(car => car.engineType === 'Petrol'),
                itemTotal: prevState.items.length
              }))

            //Case when any other filter is applied beforehand and another engine type filter was previously applied ... THE TRICKY ONE!! - PART WHERE HAVE TO LIST ALL COMBO'S
            } else if ((this.state.valueMake !== '' || this.state.valueTransmission !== '') && (this.state.valueEngineType !== '')) {
                this.setState(prevState => ({              
                  items: cars.filter(car => car.make.toLowerCase() === this.state.valueMake)
                             .filter(car => car.engineType === 'Petrol'),
                  itemTotal: prevState.items.length
                }))
              //}
            }
          })

          
        //DIESEL
        } else if (this.state.valueEngineType === 'diesel') {

          cars.forEach(car => {
            //Case when no other filters are applied beforehand, then filter full car listings
            if (this.state.valueMake === '' && this.state.valueTransmission === '') {
              this.setState(prevState => ({              
                items: cars.filter(car => car.engineType === 'Diesel'),
                itemTotal: prevState.items.length
              }))

            //Case when any other filter is applied beforehand, then retain the previous state value (with no previous engine type filter applied)
            } else if ((this.state.valueMake !== '' || this.state.valueTransmission !== '') && (this.state.valueEngineType === '')) {
              this.setState(prevState => ({              
                items: prevState.items.filter(car => car.engineType === 'Diesel'),
                itemTotal: prevState.items.length 
              }))
            

            //Case when any other filter is applied beforehand and another engine type filter was previously applied ... THE TRICKY ONE!! - PART WHERE HAVE TO LIST ALL COMBO'S
            } else if ((this.state.valueMake !== '' || this.state.valueTransmission !== '') && (this.state.valueEngineType !== '')) {
                this.setState(prevState => ({              
                  items: cars.filter(car => car.make.toLowerCase() === this.state.valueMake)
                             .filter(car => car.engineType === 'Diesel'),
                  itemTotal: prevState.items.length
                }))
            }
          })

        } else if (this.state.valueEngineType === 'hybrid') {

          cars.forEach(car => {

            this.setState(prevState => ({
              items: cars.filter(car => car.engineType === 'Hybrid'),
              itemTotal: prevState.items.length
            }))
          })

        } else if (this.state.valueEngineType === 'electric') {

          cars.forEach(car => {

            this.setState(prevState => ({
              items: cars.filter(car => car.engineType === 'Electric'),
              itemTotal: prevState.items.length
            }))
          })

        } else {

          cars.forEach(car => {

            if ((this.state.valueMake === '' && this.state.valueTransmission === '')) {
            this.setState(prevState => ({
              valueEngineType: '',
              items: cars,
              itemTotal: prevState.items.length
            }))
           }
          })
        }
      }
    )

    //Reset the sliders when current items state updates
    this.resetSliders();

    
  }

  handleFilterEngineSize(event) {
  }

  handleFilterMileage(event) {
  }

  handleFilterPrice(event) {
  }

  handleFilterAge(event) {
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {

    //Local title & subtitle variables
    const title = `Sam's Motors`;
    const subtitle = `The way vehicle buying should be...`;

    return ( 
      
        <div>
          <div id="loader"><img src="/img/loader.gif" alt="results loading" /></div>
          {/*{this.state.isLoading && <div id="loader"><img src="/img/loader.gif" alt="results loading" /></div>}*/}
          
          <Header title={title} subtitle={subtitle} />
          
          <Introduction />
          <CompanyDetails />
          <Vehicles 
            items={this.state.items}
            itemTotal={this.state.itemTotal}
            isLoading={this.state.isLoading}
          />
          <Outro />
          <Filters
            isLoading={this.state.isLoading}
            items={this.state.items}
            handleCloseFiltersRequest={this.handleCloseFiltersRequest}
                        
            valueMake={this.state.valueMake}
            handleFilterMake={this.handleFilterMake}
            valueModel={this.state.valueModel}
            handleFilterModel={this.handleFilterModel}
            valueTransmission={this.state.valueTransmission}
            handleFilterTransmission={this.handleFilterTransmission}
            valueEngineType={this.state.valueEngineType}
            handleFilterEngineType={this.handleFilterEngineType}
            valueEngineSize={this.state.valueEngineSize}
            handleFilterEngineSize={this.handleFilterEngineSize}
            valueMileage={this.state.valueMileage}
            handleFilterMileage={this.handleFilterMileage}
            valuePrice={this.state.valuePrice}
            handleFilterPrice={this.handleFilterPrice}
            valueAge={this.state.valueAge}
            handleFilterAge={this.handleFilterAge}


            handleResetMakeFilter={this.handleResetMakeFilter}
            handleResetModelFilter={this.handleResetModelFilter}

            handleResetFilters={this.handleResetFilters}
            itemTotal={this.state.itemTotal}
          />

          
          <Footer />
          {/* filter side-button  (smaller screens) */}
          <div className="filters-open"> 
            <button   
              onClick={this.handleOpenFiltersRequest} 
              className="filters-open-btn">
              <img id="magnify" src="../img/magnify.png" alt="magnifying glass" height="27.5" width="30" /><span>Filters Results</span>
            </button>
          </div>  
        </div>
      );
  }
}