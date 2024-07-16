App Studio code challenge: 
---------------------------

Product cards with variants
---------------------------

### Challenge Overview

You are required to create a grid of product cards (supplied in the project).

You will build variant color swatches that, when selected, update the carousel with the appropriate variant images. You will also implement a Quick Add button to show the selected variant ID using an alert().

### Task 1: Initial Setup

1.  Get the project to run:

-   Clone the project repository.

-   Install the necessary dependencies.

-   Ensure that the project runs successfully on your local machine.

3.  Component Iteration:

-   Iterate through the product data supplied and display the productCard component.

-   Extract the necessary data to create the variant swatches.

### Task 2: Product Card Component

1.  Variant Color Swatches:

-   Navigate to the product card component.

-   Build variant swatches using the variant image values.

-   Show variant options for the color option only

1.  Image Carousel Update:

-   Implement functionality to update the image carousel based on the selected color variant

-   Ensure that selecting a variant logs the correct variant ID to the console.

-   Update the image carousel to display images corresponding to the selected variant ID.

3.  Quick Add Button:

-   Implement the Quick Add button functionality.

-   Display an alert showing the correct selected variant ID when the button is clicked.

### Submission Process

1.  Branching and Commit History:

-   Create a new branch from the main branch

-   Ensure a clear and descriptive commit history, demonstrating good git-flow practices.

3.  Pull Request:

-   Submit a pull request (PR) when the project is complete explaining your work and how to test it

### Bonus Points

-   Implement animations to enhance the user experience (UX).

-   Add infinite scroll functionality for paginating through products in the grid

Notes on sample data:

The product JSON you will use to build this functionality requires you to drill into the product object's options and specifically target the color variant options.

The association between the image and the color's name is found in the product image's alt-text value, so you must make the selected variant's image appear on the selection of that variant color swatch.

Here are some samples of how a color swatch should look like: