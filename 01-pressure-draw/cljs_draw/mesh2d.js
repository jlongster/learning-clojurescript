
function Mesh2d(color) {
  this._vertices = new Float32Array(200);
  this._values = new Float32Array(200);
  this._numVertices = 0;
  this._color = color && goog.color.hexToRgb(color).map(function(x) { return x / 255; });
  this._rawColor = color;
}

Mesh2d.prototype.addVertex = function(x, y, value) {
  this._vertices = this._maybeResize(this._vertices,
                                     (this._numVertices * 2) + 6);
  this._values = this._maybeResize(this._values,
                                     this._numVertices + 3);

  var ptr = this._numVertices * 2;
  this._vertices[ptr] = x;
  this._vertices[ptr + 1] = y;

  ptr = this._numVertices;
  this._values[ptr] = value;

  this._numVertices++;
};

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

Mesh2d.prototype.getNumVertices = function() {
  return this._numVertices;
}

Mesh2d.prototype.setNumVertices = function(num) {
  this._numVertices = num;
}

Mesh2d.prototype.getVertices = function() {
  return this._vertices;
};

Mesh2d.prototype.getValues = function() {
  return this._values;
}

Mesh2d.prototype.getColor = function() {
  return this._color;
};

Mesh2d.prototype.isColor = function(color) {
  return this._rawColor === color;
};

Mesh2d.prototype.serialize = function() {
  return [this._vertices, this._values, this._numVertices, this._color, this._rawColor];
}

Mesh2d.unserialize = function(data) {
  var mesh = new Mesh2d();
  mesh._vertices = data[0];
  mesh._values = data[1];
  mesh._numVertices = data[2];
  mesh._color = data[3];
  mesh._rawColor = data[4];
  return mesh;
}
