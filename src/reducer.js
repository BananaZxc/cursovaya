import { combineReducers } from 'redux';

const initialMachineBrand = [
  { id: 1, brand: "Yamaha", model: ["Diversion 900", "Drag Star 1100", "Drag Star Classic 400" ], url: "https://www.yamaha-motor.ru/equipment/motorcycles" },
  { id: 2, brand: "Honda", model: ["Africa TWIN", "CB-1", "CB-1000" ], url: "https://moto.honda.ru/" },
  { id: 3, brand: "BMW", model: ["F 650 GS", "F 800 GS", "F650GS" ], url: "https://www.bmw-motorrad.ru/ru/models/modeloverview.html" },
  { id: 4, brand: "Suzuki", model: ["Across", "Bandit 250", "Bandit 250 V" ], url: "https://suzuki-motor.ru/moto/" },
];

const showMachineBrand = (state = initialMachineBrand, action) => {
  if (action.type === "SEARCH_TEXT_ACTION") {
    const filteredMachineBrand = state.filter(elem => {
      return elem.brand.indexOf(action.payload) > -1;
    })
    return filteredMachineBrand;
  }

  if (action.type === "RESET_STATE") return initialMachineBrand;

  return state;
};

export default combineReducers({
  showMachineBrand,
})