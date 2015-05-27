
function Mesh2d(color) {
  this._arr = new Float32Array(200);
  this._ptr = 0;
  this._color = goog.color.hexToRgb(color).map(function(x) { return x / 255; });
  this._rawColor = color;
}

Mesh2d.prototype.addFace = function(x1, y1, x2, y2, x3, y3) {
  this._maybeResize(this._ptr + 6);
  this._arr[this._ptr++] = x1;
  this._arr[this._ptr++] = y1;
  this._arr[this._ptr++] = x2;
  this._arr[this._ptr++] = y2;
  this._arr[this._ptr++] = x3;
  this._arr[this._ptr++] = y3;
};

Mesh2d.prototype._maybeResize = function(count) {
  if(this._arr.length < count) {
    var next = new Float32Array(this._arr.length +
                                (count < 1000 ? 1000 : count));
    next.set(this._arr);
    this._arr = next;
  }
};

Mesh2d.prototype.getOffsetValue = function(offset) {
  return this._arr[this._ptr - offset];
};

Mesh2d.prototype.getPointer = function() {
  return this._ptr;
}

Mesh2d.prototype.getVertices = function() {
  return this._arr;
};

Mesh2d.prototype.getColor = function() {
  return this._color;
};

Mesh2d.prototype.isColor = function(color) {
  return this._rawColor === color;
};
