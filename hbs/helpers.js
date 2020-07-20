const hbs = require('hbs');

//helpers
hbs.registerHelper('getYear',()=>{
  return new Date().getFullYear();
});
hbs.registerHelper('capitalizar',(text)=>{
  return text;
});
