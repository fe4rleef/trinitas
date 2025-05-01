export default class Machine {
    weight;
    location;
    element;
    color;
    angle;

    //the constructor is the function/method that runs when we create an instance of our class
    constructor(options = {}) {

        const defaults = {
            weight: 1,
            location: { x: 0, y: 0 },
            element: null,
            color: "gray",
            angle: 0,
        };

        const opts = { ...defaults, ...options };

        this.weight = opts.weight;
        this.location = opts.location;
        this.element = opts.element;
        this.color = opts.color;
        this.angle = opts.angle;

        console.log("Creating machine with weight of " + this.weight + " pounds");
        console.log("It also had coords of " + this.location);

        this.render();
    }

    render() {
        // if an element already exists, just return
        if (this.element) {
            return;
        }

        //create our new element
        this.element = document.createElement("div");
        this.element.style.backgroundColor = this.color;
        this.element.style.width = "30px";
        this.element.style.height = "10px";
        this.element.style.position = "absolute";
        this.element.style.transform = "rotate(" + this.angle + "rad)";

        //place our element on the page itself
        document.body.appendChild(this.element)
    }

        update () {

            this.element.style.left = this.location.x + "px";
            this.element.style.top = this.location.y + "px";
            this.element.style.transform = "rotate(" + this.angle + "rad)";}

};