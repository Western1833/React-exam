import { useState } from "react";
import { randomNumber } from "../../utils/utils.js";

const SearchField = () => {
    const [currentCarBrand, setCarBrand] = useState('');
    const [currentModel, setCarModel] = useState('');
    
    const handleBrandChange = (e) => {
        const carBrand = e.target.value;
        setCarBrand(carBrand.toLowerCase());
    }

    const handleModelChange = (e) => {
        const model = e.target.value;
        setCarModel(model.toLowerCase());
    }

    let models = () => {
        let options = [];

        switch(currentCarBrand){
            case 'bmw':
                options.push(<option value="" key={randomNumber()}>Select model</option>)
                options.push(<option value="1 series" key={randomNumber()}>1 Series</option>)
                options.push(<option value="3 series" key={randomNumber()}>3 Series</option>)
                break;
            case 'mercedes':
                options.push(<option value="" key={randomNumber()}>Select model</option>)
                options.push(<option value="e-class" key={randomNumber()}>E-class</option>)
                options.push(<option value="s-class" key={randomNumber()}>S-class</option>)
                break;
            default: options.push(<option value="" key={randomNumber()}>Model</option>)
        }

        return <select name="model" id="model" style={{width: '120px', height: '50px'}} onChange={handleModelChange}>{options}</select>
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', top: '5px'}}>
            <p style={{ fontSize: '30px', color: 'white', marginRight: '20px' }}>Search:</p>
            <select id="brandSelect" style={{ width: '200px', height: '50px' }} onChange={handleBrandChange}>
                <option value="">Select a brand</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="citroen">Citroen</option>
                <option value="dacia">Dacia</option>
                <option value="fiat">Fiat</option>
                <option value="hyundai">Hyundai</option>
                <option value="jaguar">Jaguar</option>
                <option value="Kia">Kia</option>
                <option value="lexus">Lexus</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="nissan">Nissan</option>
                <option value="opel">Opel</option>
                <option value="porsche">Porsche</option>
                <option value="renault">Renault</option>
                <option value="skoda">Skoda</option>
                <option value="vw">VW</option>
            </select>

               {models()}

               <button style={{margin: "20px",
                height: '60px',
               margin: '20px',
               color: 'white',
               backgroundColor: "#0d6efd",
               fontSize: '20px'
               }}>
                Search
               </button>
        </div>
    );
};

export default SearchField;