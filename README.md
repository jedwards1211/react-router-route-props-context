# react-router-route-props-context

## Installation

```
npm install react-router-route-props-context react-router-apply-middleware
```

## Usage

```js
import applyMiddleware from 'react-router-apply-middleware'
import routePropsContext from 'react-router-route-props-context'

// use it like other router middleware
<Router render={applyMiddleware(routePropsContext())}/>
```
