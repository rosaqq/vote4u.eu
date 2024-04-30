import React, { Component } from 'react';

// Adapted from https://github.com/newbreedofgeek/react-radioimg

// Elem props are
// target_class: special css class to identify toggle elements
// margin: tailwind margin class (default = mx-2)
// size: tailwind size class (default = size-16)
// onChange: callback to execute on change
// options: described below

// Options are
// val: 'button value',
// title: 'tooltip text',
// img: 'image name, based on /img/<insert name>',
// bg_size: 'size param for image, i.e. 80% | cover | contain'

export default class RadioImg extends Component {
    constructor(props) {
        super(props);

        // todo: read up on this https://www.iamtimsmith.com/blog/this-state-how-to-use-state-in-react
        this.state = {
            options: props.options
        };

        this.target_class = props.target_class;
        this.click = this._click.bind(this);
    }

    _click(e) {
        e.preventDefault();

        if (this.value !== e.target.dataset.val) {
            this.value = e.target.dataset.val;
        }
        else {
            this.value = ''; // Reset value so users can deselect
        }

        if (this.props.onChange) {
            this.props.onChange(this.value, this.target_class);
        }

        this.forceUpdate();
    }

    render() {
        return (
            this.state.options.map((item, index) => {
                let cls_selected = "outline outline-3 outline-offset-[-1px] outline-cyan-400";
                let clsToUse = `flex-none ${this.props.margin} rounded-full ${this.props.size} bg-${item.val} ${(this.value === item.val) ? cls_selected : "outline-none"}`;

                return <button
                    key={index}
                    style={{background: `center / ${item.bg_size} no-repeat url(/img/${item.img})`}}
                    className={clsToUse}
                    onClick={this.click}
                    data-val={item.val}
                    title={item.title}>
                </button>
            })
        );
    }
}

RadioImg.defaultProps = {
    margin: 'mx-1 md:mx-2',
    size: 'size-10 md:size-16',
    onChange: (val, target_class)=> {

        let elements = document.getElementsByClassName(target_class);
        Array.from(elements).forEach(elem => {
            // Hide all whose data-radio does not match this element's val
            const hide = (elem.dataset.radio !== val)
            elem.classList.toggle('hidden', hide);
        });
    }
};