import MyModule from '../../../dist/my-module.js'; 
//import MyModule from '../../../dist/my-module.min.js'; 

console.log('MyModule:', MyModule);
let foo = new MyModule.Foo(true);
let bar = new MyModule.Bar(true);
foo.hello();
bar.hello();
