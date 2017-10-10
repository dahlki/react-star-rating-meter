# react-star-rating-meter

a customizable React star rating component with or without a meter.

examples: https://dahlki.github.io/react-star-rating-meter/

code for the examples can be viewed in the **example** folder of this repo.

------------------------------

## install:

https://www.npmjs.com/package/react-star-rating-meter

```
npm install --save react-star-rating-meter
```

or

```
yarn add react-star-rating-meter
```
------------------------------

## properties:

all properties are optional (properties will revert to default values)

***note:** color values can be any css valid color value; if you want a color property to be transparent use an empty string: ""

***note:** if using a custom svg, only one 'path' can be given and also, the 'viewBox' value is required.

| Prop | DataType | Default | Description | 
| --- | :---: |  :---: |  --- |
| readOnly  | boolean | false | indicate whether the star rating is editable by the user or read only |
| numOfStars  | number  | 5 | number of stars |
| initialRating  | number  | 0 | set initial value |
| height  | number (px)  | 30 | height of the meter and highlight in pixels |
| length  | number (px)  | 250 | length of the meter in pixels |
| showMeter  | boolean  | true | indicate whether to show the meter or just show stars/svgs |
| label  | string  | StarRating | an option to label the component to easily get and store the rating value |
| meterEmptyColor  | string  | #F0E7E7 | set the default/empty meter color |
| meterSelectColor  | string  | #311E24 | set the select/active meter color |
| meterBorderColor  | string  | #785A65 | set the meter border color |
| meterBorderSize  | number (px)  | 3 | set the meter border thickness |
| meterBorderStyle  | string  | solid | set the border style; can be any css valid border style |
| highlightColor  | string  | #FFD6DD | set the highlight color of the selected/active star |
| highlightWidth  | number (px) | 30 | set the width of the highlight (height is determined by the height prop, the height of the meter) |
| starEmptyColor  | string  | #AF9EA3 | set the default/empty color of the stars/svgs |
| starSelectColor  | string  | #D60429 | set the selected/active color of the stars/svgs |
| starSize  | number (px)  | 18 | size of the stars |
| getRating  | function  | undefined | set a function to be called upon clicking a star; the arguments passed are: (rating, label, event) |
| onHover  | function  | undefined | set a function to be called upon hovering a star; the arguments passed are: (rating, label, event) |
| svg  | object = {path: string, viewBox: string}  | (if none indicated, the svg is a star) | an object that must have both path and viewBox properties; if either one is missing, defaults to a star |
