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

# TextMatch - string
<div>Hello World</div>

## screen.getByText('Hello World'); //full string match
## screen.getByText("llo Worl", {exact: false}); //substring match
## screen.getByText("hello world", {exact: false}); //ignore case

# TextMatch - regex
<div>Hello World</div>

## screen.getByText(/World/); //substring match
## screen.getByText(/world/i); //substring match, ignore case
## screen.getByText(/^hello world$/i); //full string match, ignore case

## queryBy
### Returns the matching node for a query, and return null if no elements match.
### Useful for asserting an element that is not present.
### Throws an error if more than one match is found.

## queryAllBy
### Returns all the matching nodes for a query, adn return an empty array if not elements match.

## suffixes for queryBy and getBy are same.

## getBy and getAllBy class of queries are used to assert if elements are present in the DOM.

## queryBy and queryAllBy class of queries are used to assert if elements are nit present in the DOM.

## findBy - Returns a Promise which resolves when an element is found which matches the gien query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms.

## findAllBy - Returns a promise which resolves to an array of elements when any elements are found which match a given query. The promise is rejected if no elements are found after a default timeout of 1000ms.

# user-event library - to handle user interactions in react testing

## fireEvent vs user-event - fireEvent is a method from RTL which is used to dispatch DOM events. user-event simulates full interactions, which may fire multiple events and do additional checks along the way.