// jQuery Random function 1.0
﻿jQuery.Random = function(m,n)
{
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}
// jQuery random() 1.01
$.fn.random = function () {
    if (this.length == 0) return this;
    var i = jQuery.Random(0, this.length - 1);
    return this.slice(i, i+1);
}
