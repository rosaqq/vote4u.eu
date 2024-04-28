import React, { Component } from 'react';

// Adapted from https://github.com/newbreedofgeek/react-radioimg

export default class RadioImg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: props.options
        };

        this.value = props.defaultValue;
        this.click = this._click.bind(this);
    }

    _click(e) {
        e.preventDefault();

        if (this.value !== e.target.dataset.val) {
            this.value = e.target.dataset.val;

            if (this.props.onChange) {
                this.props.onChange(this.value);
            }

            this.forceUpdate();
        }
    }

    render() {
        return (
            <div className="m-4 radio-img flex justify-center">
                {
                    this.state.options.map((item, index) => {

                        let cls_selected = "outline outline-3 outline-offset-[-1px] outline-cyan-400";
                        let clsToUse = `mx-2 rounded-full size-14 bg-${item.val} ${(this.value === item.val) ? cls_selected : "outline-none"}`;

                        return <button
                            key={index}
                            style={{background: `center / ${item.bg_size} no-repeat url(/img/listas/${item.img})`}}
                            className={clsToUse}
                            onClick={this.click}
                            data-val={item.val}
                            title={item.title}>
                        </button>
                    })
                }
            </div>
        );
    }
}

RadioImg.defaultProps = {
    onChange: (val)=> {

        let elements = document.getElementsByClassName('profile');
        Array.from(elements).forEach(elem => {

            // Hide all that do not match the radio's value
            const hide = (elem.dataset.list !== val)
            elem.classList.toggle('hidden', hide);
        });
    }
};