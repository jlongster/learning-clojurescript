
function Mesh2d(color) {
  this._vertices = new Float32Array(200);
  this._values = new Float32Array(200);
  this._ptr = 0;
  this._color = color && goog.color.hexToRgb(color).map(function(x) { return x / 255; });
  this._rawColor = color;
}

Mesh2d.prototype.addFace = function(x1, y1, x2, y2, x3, y3) {
  this._vertices = this._maybeResize(this._vertices, this._ptr + 6);
  this._vertices[this._ptr++] = x1;
  this._vertices[this._ptr++] = y1;
  this._vertices[this._ptr++] = x2;
  this._vertices[this._ptr++] = y2;
  this._vertices[this._ptr++] = x3;
  this._vertices[this._ptr++] = y3;
};

Mesh2d.prototype.addFaceValue = function(v1, v2, v3) {
  this._vertices = this._maybeResize(this._vertices, this._ptr + 3);
  // TODO: handle the pointer correctly, hm....
}

Mesh2d.prototype._maybeResize = function(vec, count) {
  if(vec.length < count) {
    var next = new Float32Array(vec.length +
                                (count < 1000 ? 1000 : count));
    next.set(vec);
    return next;
  }
  return vec;
};

Mesh2d.prototype.setCurrentPos = function(x1, y1, x2, y2) {
  this._currentPos = [x1, y1, x2, y2];
}

Mesh2d.prototype.getCurrentPos = function() {
  return this._currentPos;
};

Mesh2d.prototype.getOffsetValue = function(offset) {
  return this._vertices[this._ptr - offset];
};

Mesh2d.prototype.getPointer = function() {
  return this._ptr;
}

Mesh2d.prototype.setPointer = function(ptr) {
  this._ptr = ptr;
}

Mesh2d.prototype.getVertices = function() {
  return this._vertices;
};

Mesh2d.prototype.getColor = function() {
  return this._color;
};

Mesh2d.prototype.isColor = function(color) {
  return this._rawColor === color;
};

Mesh2d.prototype.serialize = function() {
  return [this._vertices, this._ptr, this._color, this._rawColor];
}

Mesh2d.unserialize = function(data) {
  var mesh = new Mesh2d();
  mesh._vertices = data[0];
  mesh._ptr = data[1];
  mesh._color = data[2];
  mesh._rawColor = data[3];
  return mesh;
}
