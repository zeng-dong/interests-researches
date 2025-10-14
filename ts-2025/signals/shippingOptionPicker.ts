import { linkedSignal, signal } from "@angular/core";

interface ShippingMethod {
    id: number;
    name: string;
}

export class ShippingMethodPicker {
    constructor() {
        this.changeShipping(2);
        this.changeShippingOptions();
        console.log(this.selectedOption()); // {"id":2,"name":"Postal Service"}
    }

    shippingOptions = signal<ShippingMethod[]>([
        { id: 0, name: "Ground" },
        { id: 1, name: "Air" },
        { id: 2, name: "Sea" },
    ]);

    selectedOption = linkedSignal<ShippingMethod[], ShippingMethod>({
        source: this.shippingOptions,
        computation: (newOptions, previous) => {
            return (
                newOptions.find((opt) => opt.id === previous?.value.id) ??
                newOptions[0]
            );
        },
    });

    changeShipping(index: number) {
        this.selectedOption.set(this.shippingOptions()[index]);
    }

    changeShippingOptions() {
        this.shippingOptions.set([
            { id: 0, name: "Email" },
            { id: 1, name: "Sea" },
            { id: 2, name: "Postal Service" },
        ]);
    }
}

const picker = new ShippingMethodPicker();
picker.changeShipping(1);
console.log("change shipping to 1: ", picker.selectedOption());
picker.shippingOptions.set([{ id: 0, name: "Email" }]);

console.log(
    "only one option left, and it must be 0 email: ",
    picker.selectedOption()
);
