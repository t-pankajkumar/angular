export class Product {
    name: string;
    price: number;
    description: string;
    range:{};
    constructor(name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.range = {
            text: 'Medium',
            class: 'medium'
        };
    }

    addPrice() {
        this.price++;
        this.calRange();
    }

    subPrice() {
        this.price--;
        this.calRange();
    }

    calRange(){
        if(this.price > 150){
            this.range = {
                text: 'High',
                class: 'high'
            };
        }
        else if(this.price == 150){
            this.range = {
                text: 'Medium',
                class: 'medium'
            };
        }
        else if(this.price < 150){
            this.range = {
                text: 'Low',
                class: 'low'
            };
        }
    }
}