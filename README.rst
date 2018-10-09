es6-esm-boilerplate
===================

Build ES modules from ES6 source code.

Input/output structure
----------------------

.. code::

   es6-esm-boilerplate
   ├── package.json
   ├── webpack.config.js
   ├── src                         # ES6 source code
   │   ├── Base.js                 # class 
   │   ├── Foo.js                  # subclass of Base
   │   ├── Bar.js                  # subclass of Base
   │   ├── index.js                # module implementation (export { Foo, Bar })
   │
   ├── lib                         # ES module output
   │   ├── my-module.js            # esm
   │   ├── my-module.min.js        # esm minified
   │   ├── my-module.compat.js     # esm with ES5-compatibility
   │   ├── my-module.compat.min.js # esm with ES5-compatibility minified

How it works
------------

.. code::

   ES6 source code             -> var-module             -> my-module.js (export default MyModule;)
   {Base, Foo, Bar, index}.js     (var MyModule = ...;)  -> my-module.compat.js (UMD)

First, bundle ES6 source code into a var-module.  Then, export the var-module using the
ES Module's ``export`` syntax to finally get ``my-module.js``.  This module file can be directly
consumed on `relatively new browsers <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Browser_compatibility>`__.  

For compatibility with older browsers, development with Babel, and NodeJS,
we also build ``my-module.compat.js``.  This module
file conforms to the `UMD <https://github.com/umdjs/umd>`__ patterns that provide the
script-tag loading, Node-require, and AMD compatibilities.

All the "var-to-esm transformation" is performed by a tiny Webpack plugin called
`webpack-var2esm-plugin <https://github.com/w3reality/webpack-var2esm-plugin/blob/master/src/index.js>`__.


Build
-----

.. code::

   $ npm install  # set up build tools
   $ npm run build  # get ES module output in lib/ by Babel
