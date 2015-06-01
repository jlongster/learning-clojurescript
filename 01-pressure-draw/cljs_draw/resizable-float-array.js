
function ResizableFloatArray() {
  this._arr = new Float32Array(200);
}

ResizableFloatArray.prototype.maybeResize = function(neededCount) {
  if(this._arr.length < neededCount) {
    var next = new Float32Array(
      this._arr.length + Math.max(neededCount, 1000)
    );
    next.set(this._arr);
    this._arr = next;
  }
}

ResizableFloatArray.prototype.set = function(i, x) {
  this._arr[i] = x;
}

ResizableFloatArray.prototype.getTypedArray = function() {
  return this._arr;
}
