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
   ├── lib                         # ES5 output
   │   ├── my-module.esm.js        # esm module
   │   ├── my-module.esm.min.js    # esm module minified

**Build**
   
.. code::

   $ npm install  # set up build tools
   $ npm run build  # get ES5 module output in lib/ (transpiled by Babel)
