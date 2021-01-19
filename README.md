## Vue Harvest

This is the front-end in Vue3 of The Harvest, a full-stack single page application built to apply an algorithm through a Python function, which is hosted on AWS Lambda and invoked by AWS Gateway API.

To build this application, first I wrote the Python 3 function to apply the algorithm, which takes 3 arguments:
- An array of integers representing trees, where the values are the number of apples in that tree;
- An integer corresponding to the number of trees that Marcelo will harvest;
- An integer corresponding to the number of trees that Carla will harvest;

The function evaluates all possibilitys of disjoint segments and returns the most advantageous distribution of trees between Marcelo and Carla.

To invoke the function, the Vue front-end app validates the form inputs and calls the API Gateway's endpoint responsable to comunicate with the Lambda AWS service to access the Python function and the custom authentication function.

The Python function and all instructions for testing are available at https://github.com/ResXBocchi/epic-algorithm

After fetching the response from the Python function, the front-end works with the data to display the total and individual amount harvested, the trees aligned horizontaly, with their numbers (indexes + 1) below and their values above. The value's circle of the tree either is red for those which has been harvested by Marcelo, blue for Carla's trees and dark grey for those which will be harvest another day (or eaten by the birds!).

The messages on the output view are conditional rendered. Try out some crazy values and you will be advised.

To keep the things interesting the application is contextualized in the Feudal Age, and the user is awarded with a driving, Oscar-Deserving storytelling.





## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
