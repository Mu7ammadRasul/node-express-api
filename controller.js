

function test(req, res){
    console.log('ive gotten here');
   res.json({message: "test", test:[]});
}
function moe(req, res){
    console.log('ive gotten here mr moe');
   res.json({message: 'hi moe'});
}


module.exports = { test, moe };