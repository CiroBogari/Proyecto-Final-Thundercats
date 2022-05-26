import { LightningElement,wire} from 'lwc';

export default class ResourceAllocation extends LightningElement {
    // Aca podria guardar los datos que me lleguen de la query que hagan en Apex, luego puedo mostrar
    options = [
        { label: 'Ross', value: 'option1' },
        { label: 'Rachel', value: 'option2' },
    ];

    // Select option1 by default
    value = ['option1'];

    handleChange(event) {
        const changeValue = event.detail.value;
        alert(changeValue);
    }
}