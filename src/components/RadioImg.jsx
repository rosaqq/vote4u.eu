import React, { Component } from 'react';

// Adapted from https://github.com/newbreedofgeek/react-radioimg

// Elem props are
// groups: special case to toggle EU groups as well...
// targetClass: special css class to identify toggle elements
// margin: tailwind margin class (default = mx-2)
// size: tailwind size class (default = size-16)
// options: described below

// Options are
// val: 'button value',
// eu_group: [], array of eu groups associated with option
// title: 'tooltip text',
// img: 'image name, based on /img/<insert name>',
// bg_size: 'size param for image, i.e. 80% | cover | contain'

export default class RadioImg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: props.options
        };

        if (props.defaultValue)
        {
            this.value = props.defaultValue;
        }

        this.targetClass = props.targetClass;
        this.click = this._click.bind(this);
    }

    _click(e) {
        e.preventDefault();

        if (this.value !== e.target.dataset.val) {
            this.value = e.target.dataset.val;
            this.eu_group = e.target.dataset.eu_group;

            // No longer allow users to deselect
            // Decision made in sequence to appearing with a starting selection (wip)
            // TODO: Implement radio pre-selection
            // FIXME: currently broken due to all targets starting hidden & component not updating them on initial render

            // ON CHANGE FUNC
            // Standard case
            let elements = document.getElementsByClassName(this.targetClass);
            Array.from(elements).forEach(elem => {
                // Hide all whose data-radio does not match this element's val
                let hide = (elem.dataset.radio !== this.value)
                elem.classList.toggle('hidden', hide);
            });


            // Special EU group case
            if (this.props.groups) {
                let groups = document.getElementsByClassName('groupcard');
                Array.from(groups).forEach(group => {
                    // Hide all whose data-radio is not included in the eu_group ref
                    let hide = !this.eu_group.includes(group.dataset.radio)
                    group.classList.toggle('hidden', hide);
                });

                // Hide tip on first click
                document.getElementById('initialTip').classList.add('hidden');
            }
            this.forceUpdate();
        }
    }

    render() {
        return (
            this.state.options.map((item, index) => {
                let cls_selected = "outline outline-3 outline-offset-[-1px] outline-cyan-400";
                let clsToUse = `flex-none ${this.props.margin} rounded-full ${this.props.size} ${(this.value === item.val) ? cls_selected : "outline-none"}`;

                return <button
                    key={index}
                    style={{background: `center / ${item.bg_size} no-repeat url(/img/${item.img})`}}
                    className={clsToUse}
                    onClick={this.click}
                    data-val={item.val}
                    data-eu_group={item.eu_group}
                    title={item.title}>
                </button>
            })
        );
    }
}

RadioImg.defaultProps = {
    margin: 'm-1 sm:mx-2',
    size: 'size-14 sm:size-16'
};