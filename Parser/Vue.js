var context = {
    function:{
        pow : (x,y) => Math.pow(x,y),
        concat:(x,y) => String.prototype.concat(x,y),
        inverse:(x) => !x,
        composeAnd: function(x,y){
                    return a => x(a) && y(a);
                },
        composeOr:function(x,y){
                    return a => x(a) || y(a);
                },
        composeLeft:function(x,y){
                    return a => y(x(a));
                },
        composeRight:function(x,y){
                    return a => x(y(a));
                },        
            }
          }	