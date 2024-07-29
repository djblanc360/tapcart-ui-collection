### overview

the `components/product/` directory contains reusable react components specifically designed to handle various aspects of product presentation and interaction.

### components

#### `QuickAdd.tsx`

**description:** This component provides a quick add-to-cart functionality. users can quickly add a product variant to their cart with a single click.

**features:**
- handles user interactions to quickly add items to the cart.
- displays dynamic button text based on availability and click state.
- includes visual feedback for user actions such as changing button color and text on click.
- displays an alert showing the c correct selected variant ID, along with the displayName for easy reference and testinf

#### `ProductCard.tsx`

**description:** This component represents an individual product card within a product grid. it provides a summary of the product's key information and serves as the parent component for specific user interactions in other components in this directory.

**features:**
- integrates with `ImageCarousel` from the base components of this project to displays product images and <Badge> at the top left indicating the color option
- integrates with `ImageCarousel` to handle hover actions to show additional product images or information
- titles, prices, and other essential details
- integrates with `VariantSwatch`, serving as the local state for theselected variant.
- integrates with `QuickAdd` for add to cart functionality
- responsive design for various screen sizes

#### `VariantSwatch.tsx`

**description:** This component allows users to select different product variants (only color options) from a product card.

**features:**
- displays available variants
- show variant options for the color option only
- updates the selected variant state and communicates it to parent component
- visual indicators for selected and available variants
- variants are rendered in a dynamic carousel that adjust for screen size and number of variants

### usage

The components within the `components/product/` directory are designed to be reusable and flexible, allowing for easy integration and customization within different parts of the application.