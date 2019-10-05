# React Stencil Demo

This demo theme is a modified version of [Cornerstone](https://github.com/bigcommerce/cornerstone) 4.2.0. A new module has been added to assets/js/theme/custom/react-demo.js which mounts a React componnet on a category page that is mapped to the react-demo.html custom category template. For information on mapping the custom category template to a page, see the [BigCommerce documentation](https://developer.bigcommerce.com/stencil-docs/storefront-customization/custom-templates).

  

The React component has access to the category page context (information like the products on the page, the category name, product images, add to cart links, etc.) from Stencil. The page context is injected by the `{{inject}}` helper in the custom react-demo.html template. You can use this as a starting point to build a category page with React, or implement the same pattern in a custom Product, Brand, or Web Page template.

  

#### License

  

(The MIT License)

Copyright (C) 2015-present BigCommerce Inc.

All rights reserved.

  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.