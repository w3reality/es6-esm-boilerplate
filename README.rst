es6-esm-boilerplate
===================

Build ES modules from ES6 source code.


How-to
------

**Input/output structure**

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
   ├── lib                         # esm output
   │   ├── my-module.js            # module
   │   ├── my-module.min.js        # module minified
   │   ├── my-module.compat.js     # module (ES5-compatibility)
   │   ├── my-module.compat.min.js # module (ES5-compatibility) minified

**Build**
   
.. code::

   $ npm install  # set up build tools
   $ npm run build  # get esm output in lib/ by Babel
