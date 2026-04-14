## getByRole() - RTL query is used to get the element based on  the aria-role.

## getByRole Options -
### name - The accessible name is for simple cases equal to 1. the label of a form element.2. the text content of a button or 3.the value of the aria-label attribute.

### level - Useful when we have to work with component that has multiple levels of headings.

## getByLabel() - RTL query that matches the label by the text, and then returns the HTML element corresponding to that label.
### selector option with getByLabelText is used when same label is used with multiple html elements, so we mention the type of HTML element in the selector.

## getByPlaceHolderText() - RTL query that search for all the elements with the placeholder attribute and fnd the one that matches the given text.

## getByText() - RTL wuery that will search for all the elements with the text node and will return that element whose text node mathches the text.

## getByDisplayValue() - RTL query that returns the input, textarea, or select element that has the matching display value.

## getByAltText() - RTL query that returns the element that has the given alt text. This method only supports elements which accept an alt attribute like <img>, <input>, <area> or custom HTML elements.

## getByTitle() - RTL query that returns the element that has matching title attribute.

## getByTestId() - RTL query that returns the element that has the matching data-testid attribute.